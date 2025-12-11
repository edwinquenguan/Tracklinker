from fastapi import HTTPException, Depends
from datetime import timedelta
from app.core.security import verify_password
from app.core.security import create_access_token
from app.repository.user_repository import UserRepository
from app.core.config import settings

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
    def login(email: str, password: str):
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

        return{
            "name": user["user_name"],
            "first_surname": user["user_first_surname"],
            "second_surname": user["user_second_surname"],
            "email": email,
            "token_type": "Bearer",
            "access_token": token
        }
    
    @staticmethod
    def verify_role(rol, payload):
        # Valida si el rol que hay dentro del jwt es igual al parametro rol
        if payload.get("role") != rol:
            raise HTTPException(status_code=403, detail="No autorizado")
        return {
            "success": True
        }