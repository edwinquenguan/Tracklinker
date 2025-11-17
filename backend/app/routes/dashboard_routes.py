from fastapi import APIRouter, Depends
from app.controllers.dashboard_controller import DashboardController
from app.middlewares.roles_middleware import require_roles

router = APIRouter(
    prefix="/api/dashboard",
    tags=["Dashboard"]
)

# Endopoint para obtener las entradas mensuales de cada proveedor
@router.get("/monthly-inputs")
def get_monthly_suppliers_inputs():
    return DashboardController.get_all_monthly_supplier_inputs()

# Endpoint para obtener las salidas mensuales con su mes y año
@router.get("/monthly-outputs")
def get_monthly_outputs():
    return DashboardController.get_all_outputs()