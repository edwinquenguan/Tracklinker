from fastapi import APIRouter
from app.controllers.user_controller import UserController
from fastapi import Depends
from app.models.user_model import User
from app.middlewares.roles_middleware import require_roles

router = APIRouter(
    prefix="/api/users",
    tags=["Users"]
)

# Endpoint para obtener todos los usuarios
@router.get("/")
def get_all_users(payload: dict = Depends(require_roles(["Admin"]))):
    return UserController.get_all_users()

# Endpoint para obtener un usuario mediante el id
@router.get("/{user_id}")
def get_user_by_id(user_id: int):
    return UserController.get_user_by_id(user_id)

# Endpoint para crear o registrar un usuario
@router.post("/create")
def create_user(
    user_data: User, 
    payload: dict = Depends(require_roles(["Admin"]))
):
    return UserController.create_user(user_data)

# Endpoint para actualizar la información de un usuario existente mediante su id
@router.put("/update/{user_id}")
def update_user(
    user_id: int, 
    user_data: dict
):
    return UserController.update_user(user_id, user_data)

# Endpoint para eliminar un usuario mediante su id
@router.delete("/delete/{user_id}")
def delete_user(
    user_id: int,
    payload: dict = Depends(require_roles(["Admin"]))
):
    return UserController.delete_user(user_id)