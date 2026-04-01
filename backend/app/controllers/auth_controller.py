from fastapi import HTTPException, Response, Cookie
from datetime import timedelta
from app.models.user_model import UpdateUser, UpdatePassword
from app.core.security import verify_password
from app.core.security import create_access_token
from app.repository.user_repository import UserRepository
from app.core.config import settings
from jose import jwt, JWTError

class AuthController:
    """
    Controlador de autenticaión

    Esta clase se encarga de gestionar las operaciones relacionadas con
    la autenticación por el momento solo maneja una que sería el inicio de sesión "Login".

    Metodos:
        login(email: str, password: str):
            Verifica las credenciales del usuario y retorna un JWT para que pueda realizar
            o acceder a diferentes rutas.
            

    Nota:
        Este controlador debe estar relacionado o integrarse con el repository el cual se comunica
        con la base de datos para poder validar las credenciales del usuario.
    """
    @staticmethod
    def login(email: str, password: str, response: Response):
        user = UserRepository.find_by_email(email)

        # Validación de lo que retorna la función find_by_email
        if not user:
            raise HTTPException(status_code=401, detail="Usuario No encontrado")
        
        # Validación de los parametros recibidos
        verify_password(user, password)

        # Tiempo en que expira el token
        expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE)

        # Creación del token
        token = create_access_token({
            "sub": str(user["user_id"]),
            "role": user["rol_name"]
            }, 
            expires_delta=expires)
        
        response.set_cookie(
            key="access_token",
            value=f"Bearer {token}",
            httponly=True,
            secure=False,
            samesite="lax",
            max_age=settings.ACCESS_TOKEN_EXPIRE * 60)

        return{
            "success": True,
            "message": "Inicio de sesion exitoso"
        }
    
    @staticmethod
    def verify_role(rol, payload):
        # Valida si el rol que hay dentro del jwt es igual al parametro rol
        if payload.get("role") != rol:
            raise HTTPException(status_code=403, detail="No autorizado")
        return {
            "success": True
        }
    
    @staticmethod
    def logout(response: Response):
        response.delete_cookie(
            key="access_token",
            httponly=True,
            secure=False,
            samesite="lax"
        )
        return {
            "success": True,
            "message": "Sesion cerrada"
        }
    
    @staticmethod
    def get_current_user(access_token: str = Cookie(None)):
        if not access_token:
            raise HTTPException(status_code=401, detail="No autenticado")
        
        try:
            token = access_token.replace("Bearer ", "")
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=[settings.ALGORITHM])
            error, data = UserRepository.find_by_id(payload["sub"])

            if error:
                raise HTTPException(status_code=404, detail=error)

            return {
                "user": data[0]
            }
        except JWTError:
            raise HTTPException(status_code=401, detail="Token inválido")
        
    @staticmethod
    def update_current_user(user_data: UpdateUser, payload: dict):
        error, success, message = UserRepository.update(int(payload["user_id"]), user_data)

        if error:
            raise HTTPException(status_code=404, detail=error)

        return {
            "success": success,
            "message": message
        }
    
    @staticmethod
    def update_user_password(password_data: UpdatePassword, payload: dict):
        data = password_data.model_dump()

        if data["new_password"] != data["repeat_password"]:
            raise HTTPException(status_code=400, detail="Las contraseñas no coinciden")

        error, user = UserRepository.find_by_id(int(payload["user_id"]))

        # Validación de lo que retorna la función find_by_email
        if not user or error:
            raise HTTPException(status_code=401, detail="Usuario No encontrado")
        
        # Validación de que la contraseña antigua sea valida
        verify_password(user[0], data["old_password"])
        
        error, success, message = UserRepository.update_password(int(payload["user_id"]), data["new_password"])

        if error:
            raise HTTPException(status_code=404, detail=error)

        return {
            "success": success,
            "message": message
        }