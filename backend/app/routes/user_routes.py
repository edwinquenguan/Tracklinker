from fastapi import APIRouter
from app.controllers.user_controller import UserController
from app.models.user_model import User

router = APIRouter(
    prefix="/api/users",
    tags=["Usuarios"]
)

@router.get("/")
def get_all_users():
    return UserController.get_all_users()

@router.get("/{user_id}")
def get_user_by_id(user_id: int):
    return UserController.get_user_by_id(user_id)

@router.post("/create")
def create_user(user_data: User):
    return UserController.create_user(user_data)

@router.put("/update/{user_id}")
def update_user(user_id: int, user_data: dict):
    return UserController.update_user(user_id, user_data)


@router.delete("/delete/{user_id}")
def delete_user(user_id: int):
    return UserController.delete_user(user_id)