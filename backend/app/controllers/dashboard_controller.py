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
        return{
            "data": data
        }