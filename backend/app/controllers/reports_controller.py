from app.core.config import settings
from app.repository.user_repository import UserRepository
from fastapi import HTTPException, Depends



class ReportsController:
    @staticmethod
    def get_report_users(rol_id: int):
         error, users = UserRepository.find_by_id(rol_id) 
         if error:
            raise HTTPException(status_code=404, detail=error)
         return {
            "data": users
        }