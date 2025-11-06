from jose import jwt, JWTError
from fastapi import Depends, HTTPException
from app.core.security import oauth2_scheme
from app.core.config import settings

# Función para verificar el token en todas las solicitudes protegidas
async def verify_jwt(token: str = Depends(oauth2_scheme)):
    credentials_exception = HTTPException(
        status_code=401,
        detail="Token inválido o expirado",
        headers={"WWW-Authenticate": "Bearer"},
    )

    try:
        payload = jwt.decode(
            token,
            settings.SECRET_KEY,
            algorithms=[settings.ALGORITHM]
        )

        user_id = payload.get("sub")
        role = payload.get("role")

        if not user_id or not role:
            raise credentials_exception

    except JWTError as e:
        print("error", {e})
        raise credentials_exception
    
    return{
        "user_id": user_id,
        "role": role
    }