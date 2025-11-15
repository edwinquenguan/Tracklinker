from fastapi import APIRouter
from app.controllers.subcategories_controller import SubcategoriesController
from fastapi import Depends
from app.middlewares.roles_middleware import require_roles


router = APIRouter(
    prefix="/api/subcategories",
    tags=["subcategories"]
)

@router.get("/")
def get_all_subcategories():
    return SubcategoriesController.get_all_subcategories()

@router.get("/{subcategory_id}")
def get_subcategory_by_id(subcategory_id: int):
    return SubcategoriesController.get_subcategory_by_id(subcategory_id)    