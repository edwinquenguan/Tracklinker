from datetime import timedelta
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from app.repository.user_repository import UserRepository
from app.models.user_model import User
from app.core.security import create_access_token
from app.core.config import settings

class UserController:

    @staticmethod
    def login(form_data: OAuth2PasswordRequestForm = Depends()):
        error, email = UserRepository.find_by_email(form_data.email)

        expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE)
        token = create_access_token({"sub": form_data.email}, expires_delta=expires)

        if error:
            raise HTTPException(status_code=404, detail=error)
        
        if email:
            raise 

        return{
            "token": token
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

    @staticmethod
    def get_report_users(rol_id: int):
        error, user = UserRepository.find_by_rol(rol_id)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
           "data": user
        }
    
    @staticmethod
    def get_all_roles():
        error, data = UserRepository.find_all_roles()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }