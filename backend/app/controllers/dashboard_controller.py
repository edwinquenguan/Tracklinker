from app.repository.dashboard_repository import DashboardRepository
from fastapi import HTTPException


class DashboardController:

    @staticmethod
    def get_all_monthly_supplier_inputs():
        error, data = DashboardRepository.find_all_suppliers_inputs()

        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }

    @staticmethod
    def get_all_outputs():
        error, data = DashboardRepository.find_all_outputs()

        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }

    @staticmethod
    def get_all_warranty_status():
        error, data = DashboardRepository.find_all_warranty_status()

        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }

    @staticmethod
    def get_all_and_new_users():
        error, data = DashboardRepository.find_all_and_new_users()

        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }

    @staticmethod
    def get_stock_by_brand():
        error, data = DashboardRepository.find_stock_by_brand()

        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }

    @staticmethod
    def get_output_orders_amount():
        error, data = DashboardRepository.find_output_orders_amount()

        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }

    @staticmethod
    def get_categories_amount():
        error, data = DashboardRepository.find_categories_amount()
        
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }
    
    @staticmethod
    def get_subcategories_with_stock():
        error, data = DashboardRepository.find_subcategories_with_stock()

        if error: 
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": data
        }
    
