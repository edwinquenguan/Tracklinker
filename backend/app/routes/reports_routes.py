from fastapi import APIRouter
from app.controllers.user_controller import UserController
from fastapi import Depends
from app.middlewares.roles_middleware import require_roles

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"]
)

#Endpoint para obtener reportes de usuarios por rol
@router.get("/{rol_id}")
def get_report_users(
    rol_id: int,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return UserController.get_report_users(rol_id)

