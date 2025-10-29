from pydantic import BaseModel, EmailStr

class User(BaseModel):
    id: int
    name: str
    first_surname: str
    second_surname: str
    address: str
    city: str
    password: str
    email: EmailStr
    phone: int