from fastapi import APIRouter, Depends
from app.middlewares.roles_middleware import require_roles
from app.controllers.reports_controller import ReportsController

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"]
)
#   ------------ REPORTES DE USUARIOS ------------

# Endpoint para obtener reportes de usuarios por rol
@router.get("/get_users_by_rol/{period}")
def get_users_by_rol(period: str = "30d", payload: dict = Depends(require_roles(["Admin"]))):
    return ReportsController.get_users_by_rol(period)

# Endpoint para obtener reporte de los ultimos 6 usuarios creados
@router.get("/get_recent_users")
def get_recent_users():
    return ReportsController.get_recent_users()

# Endpoint para obtener el crecimiento mensual de usuarios
@router.get("/get_monthly_user_growth/{period}")
def get_monthly_user_growth(period: str = "30d"):
    return ReportsController.get_monthly_user_growth(period)

# Endpoint para obtener los usuarios activos, deshabilitados y recien creados
@router.get("/get_users_by_status")
def get_users_by_status():
    return ReportsController.get_users_by_status()


#   ------------ REPORTES DE PRODUCTOS ------------

# Endpoint para obtener reporte de los ultimos 6 productos agregados
@router.get("/get_recent_products")
def get_recent_products():
    return ReportsController.get_recent_products()

# Endpoint para obtener el crecimiento de productos
@router.get("/get_monthly_products_growth/{period}")
def get_monthly_products_growth(period: str = "30d"):
    return ReportsController.get_monthly_products_growth(period)

# Endpoint para obtener productos por marca
@router.get("/get_products_by_brand/{period}")
def get_products_by_brand(period: str = "30d"):
    return ReportsController.get_products_by_brand(period)

# Endpoint para obtener productos por estado
@router.get("/get_products_by_status")
def get_products_by_status():
    return ReportsController.get_products_by_status()

#   ------------ REPORTES DE CATEGORIAS ------------
# Endpoint para obtener reporte de las ultimas 6 categorias agregados
@router.get("/get_recent_categories")
def get_recent_categories():
    return ReportsController.get_recent_categories()

# Endpoint para obtener el crecimiento de categorias
@router.get("/get_monthly_categories_growth/{period}")
def get_monthly_categories_growth(period: str = "30d"):
    return ReportsController.get_monthly_categories_growth(period)

# Endpoint para obtener cateegorias por estado
@router.get("/get_categories_by_status")
def get_categories_by_status():
    return ReportsController.get_categories_by_status()

#   ------------ REPORTES DE SUBCATEGORIAS ------------
# Endpoint para obtener reporte de las ultimas 6 subcategorias agregados
@router.get("/get_recent_subcategories")
def get_recent_subcategories():
    return ReportsController.get_recent_subcategories()

# Endpoint para obtener el crecimiento de categorias
@router.get("/get_monthly_subcategories_growth/{period}")
def get_monthly_subcategories_growth(period: str = "30d"):
    return ReportsController.get_monthly_subcategories_growth(period)

# Endpoint para obtener subcategorias por categoria
@router.get("/get_subcategories_by_category/{period}")
def get_subcategories_by_category(period: str = "30d"):
    return ReportsController.get_subcategories_by_category(period)

# Endpoint para obtener cateegorias por estado
@router.get("/get_subcategories_by_status")
def get_subcategories_by_status():
    return ReportsController.get_subcategories_by_status()