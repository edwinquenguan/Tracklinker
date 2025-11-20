from fastapi import APIRouter
from app.controllers.subcategories_controller import SubcategoriesController
from fastapi import Depends
from app.middlewares.roles_middleware import require_roles


router = APIRouter(
    prefix="/api/subcategories",
    tags=["subcategories"]
)
#1 Endpoint para obtener todas las subcategorías
@router.get("/")
def get_all_subcategories():
    return SubcategoriesController.get_all_subcategories()


#2 Endpoint para obtener una subcategoría mediante el id
@router.get("/{subcategory_id}")
def get_subcategory_by_id(subcategory_id: int):
    return SubcategoriesController.get_subcategory_by_id(subcategory_id) 


#3 Endpoint para crear o registrar una subcategoría
@router.post("/create")
def create_subcategory(
    subcategory_data: dict,
    payload: dict = Depends(require_roles(["Admin"]))):
    return SubcategoriesController.create_subcategory(subcategory_data)


#4 Endpoint para actualizar la información de una subcategoría existente mediante su id
@router.put("/update/{subcategory_id}")
def update_subcategory(
    subcategory_id: int,
    subcategory_data: dict,
    payload: dict = Depends(require_roles(["Admin"]))):
    return SubcategoriesController.update_subcategory(subcategory_id, subcategory_data)


#5 Endpoint para eliminar una subcategoría mediante su id
@router.delete("/delete/{subcategory_id}")
def delete_subcategory(
    subcategory_id: int,
    payload: dict = Depends(require_roles(["Admin"]))):
    return SubcategoriesController.delete_subcategory(subcategory_id) 

     



