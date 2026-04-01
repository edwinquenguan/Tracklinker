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

#   ------------ REPORTES DE PRODUCTOS ------------
    @staticmethod
    def get_products():
        error, products = ReportsRepository.find_products()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": products
        }
    @staticmethod
    def get_monthly_products_growth():
        error, data = ReportsRepository.find_monthly_products_growth()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_count_of_all():
        error, data = ReportsRepository.get_count_of_all()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }