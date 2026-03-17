from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class User(BaseModel):
    rol_id: int
    id: Optional[int] = None
    name: str
    first_surname: str
    second_surname: str
    address: str
    city: str
    password: str
    email: EmailStr
    phone: int
    date: Optional[datetime] = None