from fastapi import APIRouter
from app.controllers.user_controller import UserController
from app.controllers.products_controller import ProductsController
from app.controllers.subcategories_controller import SubcategoriesController
from app.controllers.guarantees_controller import GuaranteeController
from app.controllers.category_controller import CategoryController
#from app.controllers.suppliers_controller import SuppliersController
from app.controllers.output_details_controller import OutputDetailsController

from fastapi import Depends
from app.middlewares.roles_middleware import require_roles

router = APIRouter(
    prefix="/api/reports",
    tags=["Reports"]
)
# ----------------------------------------------------------------------
#------------REPOTES DE USUARIOS----------------------------------------

#Endpoint para obtener reportes de usuarios por rol
@router.get("/{rol_id}")
def get_report_users(
    rol_id: int,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return UserController.get_report_users(rol_id)

#Endpoint para ususarios creado en un rango de fechas
@router.get("/date-range/{start_date}/{end_date}")
def get_users_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return UserController.get_users_by_date_range(start_date, end_date)

#Endopoint para obtener usuarios creados en un rango de fechas
@router.get("/create-date-range/{start_date}/{end_date}")
def get_report_users_by_create_date(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return UserController.get_report_users_by_create_date(start_date, end_date) 

#Endpoint para obtener todos los usuarios deshabilitados
@router.get("/disabled-users/all")
def get_disabled_users(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return UserController.get_disabled_users()

#Endpoint para obtener todos los usuarios eliminados en las fechas
@router.get("/deleted-date-range/{start_date}/{end_date}")
def get_deleted_users_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return UserController.get_deleted_users_by_date_range(start_date, end_date)

#----------------------------------------------------------------------
#------------REPOTES DE PRODUCTOS--------------------------------------

#Endopoint para obtener productos agregados en las fechas
@router.get("/products-add-date-range/{start_date}/{end_date}")
def get_products_added_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ProductsController.get_products_added_by_date_range(start_date, end_date)


#Endponit para productos eliminados en las fechas
@router.get("/products-deleted-date-range/{start_date}/{end_date}")
def get_products_deleted_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ProductsController.get_products_deleted_by_date_range(start_date, end_date)

#Endpoint para obtener productos existentes
@router.get("/all-products")
def get_all_products(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ProductsController.get_all_products()

#Endpoint para obtener productos sin stock
@router.get("/products-out-of-stock")
def get_products_out_of_stock(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return ProductsController.get_products_out_of_stock()

#----------------------------------------------------------------------
#------------REPOTES DE CATEGORIAS--------------------------------------

#Endpoint para obtener categorias creadas en un rango de fechas
@router.get("/categories-date-range/{start_date}/{end_date}")
def get_categories_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return CategoryController.get_categories_by_date_range(start_date, end_date)  

 #Endponit paara obtener categoria eliminadas en un rango de fechas
@router.get("/categories-deleted-date-range/{start_date}/{end_date}")   
def get_deleted_categories_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return CategoryController.get_deleted_categories_by_date_range(start_date, end_date)

#Endpoint para obtener todas las categorias existentes
@router.get("/all-categories")
def get_all_categories(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return CategoryController.get_all_categories()

# Endpoint para obtener todas las categorias deshabilitadas
@router.get("/disabled-categories/all")
def get_disabled_categories(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return CategoryController.get_disabled_categories()

#----------------------------------------------------------------------
#------------REPOTES DE SUBCATEGORIAS----------------------------------
#Endpoint para obtener subcategorias creadas en un rango de fechas
@router.get("/subcategories-date-range/{start_date}/{end_date}")
def get_subcategories_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return SubcategoriesController.get_subcategories_by_date_range(start_date, end_date)

#Endponit paara obtener subcategoria eliminadas en un rango de fechas
@router.get("/subcategories-deleted-date-range/{start_date}/{end_date}")
def get_deleted_subcategories_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return SubcategoriesController.get_deleted_subcategories_by_date_range(start_date, end_date)

#Endpoint para obtener todas las subcategorias existentes
@router.get("/all-subcategories")
def get_all_subcategories(
    #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
    ):
     return SubcategoriesController.get_all_subcategories()

# Endpoint para obtener todas las subcategorias deshabilitadas
@router.get("/disabled-subcategories/all")  
def get_disabled_subcategories(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return SubcategoriesController.get_disabled_subcategories()

#---------------------------------------------------------------------- 
#------------REPOTES DE GARANTIAS--------------------------------------

#Endpoint para obtener garantias creadas en un rango de fechas
@router.get("/guarantees-date-range/{start_date}/{end_date}")
def get_guarantees_by_date_range(   
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return GuaranteeController.get_guarantees_by_date_range(start_date, end_date)

#Endponit paara obtener garantias eliminadas en un rango de fechas
@router.get("/guarantees-deleted-date-range/{start_date}/{end_date}")
def get_deleted_guarantees_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return GuaranteeController.get_deleted_guarantees_by_date_range(start_date, end_date)

#Endpoint para obtener todas las garantias existentes
@router.get("/all-guarantees")
def get_all_guarantees(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return GuaranteeController.get_all_guarantees()

# Endpoint para obtener todas las garantias deshabilitadas
@router.get("/disabled-guarantees/all")
def get_disabled_guarantees(
    #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
    ):
     return GuaranteeController.get_disabled_guarantees()


#----------------------------------------------------------------------
#------------REPOTES DE PROVEEDORES------------------------------------
#Endpoint para obtener proveedores creados en un rango de fechas
@router.get("/suppliers-date-range/{start_date}/{end_date}")
def get_suppliers_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return SuppliersController.get_suppliers_by_date_range(start_date, end_date)

#Endponit paara obtener proveedores eliminados en un rango de fechas
@router.get("/suppliers-deleted-date-range/{start_date}/{end_date}")
def get_deleted_suppliers_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return SuppliersController.get_deleted_suppliers_by_date_range(start_date, end_date)

#Endpoint para obtener todas los proveedores existentes
@router.get("/all-suppliers")
def get_all_suppliers(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return SuppliersController.get_all_suppliers()

#-----------------------------------------------------------------------
#------------REPOTES DE TRANSFORMACIONES--------------------------------

#Endpoint para obtener transformaciones creadas en un rango de fechas
@router.get("/transformations-date-range/{start_date}/{end_date}")
def get_transformations_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return OutputDetailsController.get_transformations_by_date_range(start_date, end_date)

#Endponit paara obtener transformaciones eliminadas en un rango de fechas
@router.get("/transformations-deleted-date-range/{start_date}/{end_date}")
def get_deleted_transformations_by_date_range(
    start_date: str,
    end_date: str,
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return OutputDetailsController.get_deleted_transformations_by_date_range(start_date, end_date)


#Endpoint para obtener todas las transformaciones existentes
@router.get("/all-transformations")
def get_all_transformations(
    #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
    ):
     return OutputDetailsController.get_all_transformations()

# Endpoint para obtener todas las transformaciones completadas
@router.get("/completed-transformations/all")
def get_completed_transformations(
   #payload: dict = Depends(require_roles(["Admin", "Tecnico", "Almacen"]))
):
    return OutputDetailsController.get_completed_transformations()