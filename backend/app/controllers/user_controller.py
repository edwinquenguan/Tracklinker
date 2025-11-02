from fastapi import HTTPException
from app.repository.user_repository import UserRepository
from app.models.user_model import User

class UserController:

    @staticmethod
    def login(user_email: str, user_password: str):
        error, email = UserRepository.find_by_email()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return{
            "data": email
        }
    
    @staticmethod
    def get_all_users():
        error, users = UserRepository.find_all_users()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": users
        }

    @staticmethod
    def get_user_by_id(user_id: int):
        error, user = UserRepository.find_by_id(user_id)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
           "data": user
        }
    
    
    @staticmethod
    def create_user(user_data: User):
        error, success, message = UserRepository.create(user_data)
        if error:
            raise HTTPException(status_code=400, detail=error)
        return {
            "success": success,
            "message": message
        }
    
    @staticmethod
    def update_user(user_id: int, user_data: dict):
        error, message, user = UserRepository.update(user_id, user_data)
        if error:
            raise HTTPException(status_code=400, detail=error)
        return {
            "message": message,
            "data": user
        }
    
    @staticmethod
    def delete_user(user_id: int):
        error, success, message = UserRepository.delete(user_id)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "success": success,
            "message": message
        }