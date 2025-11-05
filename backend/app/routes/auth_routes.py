from fastapi import APIRouter
from app.controllers.auth_controller import AuthController
from app.models.auth_model import LoginModel

router = APIRouter(prefix="/api/auth", tags=["Auth"])

# Endpoint para loguearse
@router.post("/login")
def login(credentials: LoginModel):
    return AuthController.login(credentials.email, credentials.password)