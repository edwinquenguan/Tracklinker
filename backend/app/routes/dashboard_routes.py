from fastapi import APIRouter, Depends
from app.controllers.dashboard_controller import DashboardController

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

@router.get("/monthly-inputs")
def get_monthly_suppliers_inputs():
    return DashboardController.get_all_monthly_supplier_inputs()