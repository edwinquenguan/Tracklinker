from fastapi import APIRouter
from app.controllers.user_controller import UserController

router = APIRouter(
    prefix="/api/users",
    tags=["Usuarios"]
)

@router.get("/")
def get_all_users():
    data = UserController.get_all_users()
    return{
        "data": data
    }

@router.get("/{user_id}")
def get_user_by_id(user_id: int):
    data = UserController.get_user_by_id(user_id)
    return{
        "data": data
    }

@router.post("/create")
def create_user():
    data = UserController.create_user()
    return{
        "data": data 
    }

@router.put("/update/{user_id}")
def update_user(user_id: int, user_data: dict):
    data = UserController.update_user(user_id, user_data)
    return{
        "data": data
    }


@router.delete("/delete/{user_id}")
def delete_user(user_id: int):
    data = UserController.delete_user(user_id)
    return{
        "data": data
    }