from fastapi import HTTPException, Depends
from datetime import timedelta
from app.core.security import verify_credentials
from app.core.security import create_access_token
from app.repository.user_repository import UserRepository
from app.core.config import settings

class AuthController:
    @staticmethod
    def login(email: str, password: str):
        user = UserRepository.find_by_email(email)

        # Validación de lo que retorna la función find_by_email
        if not user:
            raise HTTPException(status_code=401, detail="Usuario No encontrado")
        
        # Validación de los parametros recibidos
        verify_credentials(user, password)

        # Tiempo en que expira el token
        expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE)
        # Creación del token
        token = create_access_token({"sub": email}, expires_delta=expires)

        return{
            "token_type": "Bearer",
            "access_token": token,
        }