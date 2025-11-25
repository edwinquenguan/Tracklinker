from fastapi import APIRouter
from app.controllers.reports_controller import ReportsController
from fastapi import Depends
from app.middlewares.roles_middleware import require_roles

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"]
)

#Endpoint para obtener reportes de usuarios por rol
@router.get("/{rol_id}")
def get(
    rol_id:int
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_report_users(rol_id)