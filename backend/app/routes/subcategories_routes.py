from fastapi import APIRouter
from app.controllers.subcategories_controller import SubcategoriesController

router = APIRouter(
    prefix="/api/subcategories",
    tags=["Auth"]
)

@router.post("/")
def get_all_subcategories():
    return SubcategoriesController.get_all_subcategories()