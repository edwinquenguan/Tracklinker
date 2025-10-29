from fastapi import HTTPException
from app.repository.user_repository import UserRepository

class UserController:        

    @staticmethod
    def get_user_by_id(user_id: int):
        user = UserRepository.find_by_id(user_id)
        if not user:
            raise HTTPException(status_code=404, detail="Usuario no encontrado")
        return user
    
    @staticmethod
    def get_all_users():
        user = UserRepository.find_all_users()
        if not user:
            raise HTTPException(status_code=404, detail="No se pudo encontrar los usuarios")
        return user
    
    @staticmethod
    def create_user():
        user = UserRepository.create()
        if not user:
            raise HTTPException(status_code=404, detail="No se pudo crear el usuario")
        return user
    
    @staticmethod
    def update_user():
        user = UserRepository.update()
        if not user:
            raise HTTPException(status_code=404, detail="No se pudo actualizar el usuario")
        return user
    
    @staticmethod
    def delete_user():
        user = UserRepository.delete()
        if not user:
            raise HTTPException(status_code=404, detail="No se pudo eliminar el usuario")
        return user