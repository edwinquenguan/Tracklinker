from app.repository.reports_repository import ReportsRepository
from fastapi import HTTPException

class ReportsController:

#   ------------ REPORTES DE USUARIOS ------------
    @staticmethod
    def get_recent_users():
        error, user = ReportsRepository.find_recent_users()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
           "data": user
        }
    
    @staticmethod
    def get_users_by_rol(period: str):
        error, user = ReportsRepository.find_users_by_rol(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
           "data": user
        }
    
    @staticmethod
    def get_users_by_month(period: str):
        error, data = ReportsRepository.find_users_by_month(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }
    
    @staticmethod
    def get_monthly_user_growth(period: str):
        error, data = ReportsRepository.find_monthly_users_growth(period)
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
    def get_recent_products():
        error, products = ReportsRepository.find_recent_products()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": products
        }

    @staticmethod
    def get_monthly_products_growth(period: str):
        error, data = ReportsRepository.find_monthly_products_growth(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_products_by_brand(period: str):
        error, data = ReportsRepository.find_products_by_brand(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_products_by_status():
        error, data = ReportsRepository.find_products_by_status()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    

#   ------------ REPORTES DE CATEGORIAS ------------
    @staticmethod
    def get_recent_categories():
        error, categories = ReportsRepository.find_recent_categories()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": categories
        }

    @staticmethod
    def get_monthly_categories_growth(period: str):
        error, data = ReportsRepository.find_monthly_categories_growth(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_categories_by_brand(period: str):
        error, data = ReportsRepository.find_categories_by_brand(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_categories_by_status():
        error, data = ReportsRepository.find_categories_by_status()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
#   ------------ REPORTES DE SUBCATEGORIAS ------------
    @staticmethod
    def get_recent_subcategories():
        error, subcategories = ReportsRepository.find_recent_subcategories()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": subcategories
        }

    @staticmethod
    def get_monthly_subcategories_growth(period: str):
        error, data = ReportsRepository.find_monthly_subcategories_growth(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_subcategories_by_category(period: str):
        error, data = ReportsRepository.find_subcategories_by_category(period)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }
    
    @staticmethod
    def get_subcategories_by_status():
        error, data = ReportsRepository.find_subcategories_by_status()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data 
        }