from fastapi import APIRouter
from app.repository.user_repository import get_all_users, get_user_by_id

router = APIRouter(
    prefix="/api/users",
    tags=["Usuarios"]
)

@router.get("/")
def get_users():
    data = get_all_users()
    return{
        "data": data
    }

@router.get("/{user_id}")
def get_user_by_one_id(user_id: int):
    data = get_user_by_id(user_id)
    return{
        "data": data
    }