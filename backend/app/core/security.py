from datetime import datetime, timedelta
from typing import Union
from jose import jwt, JWTError
from fastapi import Depends, HTTPException
from fastapi.security import OAuth2PasswordBearer
from app.core.config import settings

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="")

def create_access_token(
    data: dict,
    expires_delta: Union[timedelta, None] = None
) -> str:
    
    to_encode = data.copy()