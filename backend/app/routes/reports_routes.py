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



#   ------------ REPORTES DE CATEGORIAS ------------

#Endpoint para obtener categorias creadas en un rango de fechas
@router.get("/categories-date-range/{start_date}/{end_date}")
def get_categories_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_categories_by_date_range(start_date, end_date)  

 #Endponit paara obtener categoria eliminadas en un rango de fechas
@router.get("/categories-deleted-date-range/{start_date}/{end_date}")   
def get_deleted_categories_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_deleted_categories_by_date_range(start_date, end_date)

#Endpoint para obtener todas las categorias existentes
@router.get("/all-categories")
def get_all_categories(
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_all_categories()

# Endpoint para obtener todas las categorias deshabilitadas
@router.get("/disabled-categories/all")
def get_disabled_categories(
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_disabled_categories()

#   ------------ REPORTES DE SUBCATEGORIAS ------------
#Endpoint para obtener subcategorias creadas en un rango de fechas
@router.get("/subcategories-date-range/{start_date}/{end_date}")
def get_subcategories_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_subcategories_by_date_range(start_date, end_date)

#Endponit paara obtener subcategoria eliminadas en un rango de fechas
@router.get("/subcategories-deleted-date-range/{start_date}/{end_date}")
def get_deleted_subcategories_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_deleted_subcategories_by_date_range(start_date, end_date)

#Endpoint para obtener todas las subcategorias existentes
@router.get("/all-subcategories")
def get_all_subcategories(
        payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
    ):
     return ReportsController.get_all_subcategories()

# Endpoint para obtener todas las subcategorias deshabilitadas
@router.get("/disabled-subcategories/all")  
def get_disabled_subcategories(
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_disabled_subcategories()

#   ------------ REPORTES DE GARANTIAS ------------

#Endpoint para obtener garantias creadas en un rango de fechas
@router.get("/guarantees-date-range/{start_date}/{end_date}")
def get_guarantees_by_date_range(   
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_guarantees_by_date_range(start_date, end_date)

#Endponit paara obtener garantias eliminadas en un rango de fechas
@router.get("/guarantees-deleted-date-range/{start_date}/{end_date}")
def get_deleted_guarantees_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_deleted_guarantees_by_date_range(start_date, end_date)

#Endpoint para obtener todas las garantias existentes
@router.get("/all-guarantees")
def get_all_guarantees(
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_all_guarantees()

# Endpoint para obtener todas las garantias deshabilitadas
@router.get("/disabled-guarantees/all")
def get_disabled_guarantees(
        payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
    ):
     return ReportsController.get_disabled_guarantees()


#   ------------ REPORTES DE PROVEEDORES ------------
#Endpoint para obtener proveedores creados en un rango de fechas
@router.get("/suppliers-date-range/{start_date}/{end_date}")
def get_suppliers_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_suppliers_by_date_range(start_date, end_date)

#Endponit paara obtener proveedores eliminados en un rango de fechas
@router.get("/suppliers-deleted-date-range/{start_date}/{end_date}")
def get_deleted_suppliers_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_deleted_suppliers_by_date_range(start_date, end_date)

#Endpoint para obtener todas los proveedores existentes
@router.get("/all-suppliers")
def get_all_suppliers(
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_all_suppliers()

#   ------------ REPORTES DE TRANSFORMACIONES ------------

#Endpoint para obtener transformaciones creadas en un rango de fechas
@router.get("/transformations-date-range/{start_date}/{end_date}")
def get_transformations_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_transformations_by_date_range(start_date, end_date)

#Endponit paara obtener transformaciones eliminadas en un rango de fechas
@router.get("/transformations-deleted-date-range/{start_date}/{end_date}")
def get_deleted_transformations_by_date_range(
    start_date: str,
    end_date: str,
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_deleted_transformations_by_date_range(start_date, end_date)


#Endpoint para obtener todas las transformaciones existentes
@router.get("/all-transformations")
def get_all_transformations(
        payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
    ):
     return ReportsController.get_all_transformations()

# Endpoint para obtener todas las transformaciones completadas
@router.get("/completed-transformations/all")
def get_completed_transformations(
    payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ReportsController.get_completed_transformations()