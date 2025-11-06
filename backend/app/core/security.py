from datetime import datetime, timedelta, timezone
from typing import Union
import bcrypt
from jose import jwt
from fastapi import HTTPException
from fastapi.security import OAuth2PasswordBearer
from app.core.config import settings

# Ruta en la cúal los usuarios obtienen el login
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="/api/auth/login")

# Función para crear el jwt con fecha de expiración
def create_access_token(
    data: dict,
    expires_delta: Union[timedelta, None] = None
) -> str:
    
    # Aqui guardamos una copia de el diccionario "data" dentro de "to_encode"
    to_encode = data.copy()

    # Validación
    if expires_delta:
        expire = datetime.now(timezone.utc) + expires_delta
    else:
        expire = datetime.now(timezone.utc) + timedelta(minutes=15)
    to_encode.update({"exp": expire})

    # Convierte la llave sub en una cadena de texto
    to_encode["sub"] = str(to_encode["sub"])
    
    # Aqui guardamos todo dentro del string del jwt
    encoded_jwt = jwt.encode(
            to_encode,
            settings.SECRET_KEY,
            algorithm=settings.ALGORITHM
        )
    
    return encoded_jwt

# Función para verificar la contraseña del usuario
def verify_password(user, password: str):
    password_bytes = password.encode("utf-8")
    hashed_bytes = user["user_password"].encode("utf-8")

    if not bcrypt.checkpw(password_bytes, hashed_bytes):
        raise HTTPException(
            status_code=401, 
            detail="Contraseña Incorrecta"
        )
    
    return True