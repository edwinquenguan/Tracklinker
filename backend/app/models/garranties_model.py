from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class User(BaseModel):
    rol_id: int
    user_id: Optional[int] = None
    user_name: str
    user_first_surname: str
    user_second_surname: str
    user_address: str
    user_city: str
    user_password: str
    user_email: EmailStr
    user_phone: int
    user_date: Optional[datetime] = None