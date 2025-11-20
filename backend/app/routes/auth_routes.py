from fastapi import APIRouter, Depends
from app.controllers.auth_controller import AuthController
from app.models.auth_model import LoginModel
from app.middlewares.jwt_middleware import verify_jwt

router = APIRouter(
    prefix="/api/auth", 
    tags=["Auth"]
)

# Endpoint para loguearse
@router.post("/login")
def login(credentials: LoginModel):
    return AuthController.login(credentials.email, credentials.password)

# Endpoint para verificar el rol del usuario
@router.get("/verify-role/{rol}")
def verifyRole(rol: str, payload: dict = Depends(verify_jwt)):
    return AuthController.verify_role(rol, payload)

