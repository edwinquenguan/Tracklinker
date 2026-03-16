from app.repository.reports_repository import ReportsRepository
from fastapi import HTTPException

class ReportsController:

#   ------------ REPORTES DE USUARIOS ------------
    @staticmethod
    def get_users():
        error, user = ReportsRepository.find_users()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
           "data": user
        }
    
    @staticmethod
    def get_users_by_rol():
        error, user = ReportsRepository.find_by_rol()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
           "data": user
        }
    
    @staticmethod
    def get_users_by_month():
        error, data = ReportsRepository.find_by_month()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_monthly_user_growth():
        error, data = ReportsRepository.find_monthly_user_growth()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }

    @staticmethod
    def get_users_by_status():
        error, data = ReportsRepository.find_users_by_status()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_users_by_date_range(start_date: str, end_date: str):
        error, users = ReportsRepository.find_users_by_date_range(start_date, end_date)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": users
        }
    
    @staticmethod
    def get_report_users_by_create_date():
        error, users = ReportsRepository.find_users_grouped_by_create_date()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": users
        }
    
    @staticmethod
    def get_disabled_users():
        error, users = ReportsRepository.find_disabled_users()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": users
        }
    
    @staticmethod
    def get_deleted_users_by_date_range(start_date: str, end_date: str):
        error, users = ReportsRepository.find_deleted_users_by_date_range(start_date, end_date)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": users
        }
    
#   ------------ REPORTES DE ------------