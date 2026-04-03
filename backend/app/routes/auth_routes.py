from fastapi import APIRouter, Depends, Response, Cookie, Body
from app.controllers.auth_controller import AuthController
from app.models.auth_model import LoginModel, RecoverPassword
from app.models.user_model import UpdateUser, UpdatePassword
from app.middlewares.jwt_middleware import verify_jwt
from pydantic import EmailStr

router = APIRouter(
    prefix="/api/auth", 
    tags=["Auth"]
)

# Endpoint para loguearse
@router.post("/login")
def login(credentials: LoginModel, response: Response):
    return AuthController.login(credentials.email, credentials.password, response)

# Endpoint para verificar el rol del usuario
@router.get("/verify-role/{rol}")
def verifyRole(rol: str, payload: dict = Depends(verify_jwt)):
    return AuthController.verify_role(rol, payload)

#Endpoint para cerrar sesión
@router.post("/logout")
def logout(response: Response):
    return AuthController.logout(response)

#Endpoint para obtener la informacion del usuario
@router.get("/me")
def get_me(access_token: str = Cookie(None)):
    return AuthController.get_current_user(access_token)

#Endpoint para actualizar la informacion del usuario
@router.put("/update/me")
def update_me(user_data: UpdateUser = Body(...), payload: dict = Depends(verify_jwt)):
    return AuthController.update_current_user(user_data, payload)

# Endpoint para actulizar la contraseña del usuario
@router.put("/update-password")
def update_user_password(password_data: UpdatePassword, payload: dict = Depends(verify_jwt)):
    return AuthController.update_user_password(password_data, payload)

# Endpoint para recuperar contraseña
@router.post("/recover-password")
async def recover_user_password(data: RecoverPassword):
    return await AuthController.recover_user_password(data.email)