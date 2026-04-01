from fastapi import APIRouter, Depends
from app.controllers.reports_controller import ReportsController
from app.middlewares.roles_middleware import require_roles

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"]
)
#   ------------ REPORTES DE USUARIOS ------------

#Endpoint para obtener reportes de usuarios por rol
@router.get("/get_users_by_rol")
def get_user_by_rol():
    return ReportsController.get_users_by_rol()

#Endpoint para obtener reportes de usuarios por rol
@router.get("/get_users_by_month")
def get_user_by_rol():
    return ReportsController.get_users_by_month()

# Endpoint para obtener reporte de los ultimos 6 usuarios creados
@router.get("/get_users")
def get_users_report():
    return ReportsController.get_users()

#Endpoint para obtener el crecimiento mensual de usuarios
@router.get("/get_monthly_user_growth")
def get_monthly_user_growth():
    return ReportsController.get_monthly_user_growth()

# Endpoint para obtener los usuarios activos, deshabilitados y recien creados
@router.get("/get_users_by_status")
def get_users_by_status():
    return ReportsController.get_users_by_status()


#   ------------ REPORTES DE PRODUCTOS ------------

# Endpoint para obtener reporte de los ultimos 6 productos agregados
@router.get("/get_products")
def get_products_report():
    return ReportsController.get_products()

@router.get("/get_monthly_products_growth")
def get_monthly_products_growth():
    return ReportsController.get_monthly_products_growth()

@router.get("/get_count_of_all")
def get_count_of_all():
    return ReportsController.get_count_of_all()
