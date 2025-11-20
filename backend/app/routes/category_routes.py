from fastapi import APIRouter, Depends
from app.middlewares.roles_middleware import require_roles
from app.controllers.category_controller import CategoryController
from app.models.category_model import CategoryCreate, CategoryUpdate

router = APIRouter(
    prefix="/api/categories",
    tags=["Categorías"]
)

@router.get("/")
def get_all_categories():
    return CategoryController.get_all_categories()

@router.get("/{category_id}")
def get_category_by_id(category_id: int):
    return CategoryController.get_category_by_id(category_id)

@router.post("/create")
def create_category(category_data: CategoryCreate):
    return CategoryController.create_category(category_data)

@router.put("/update/{category_id}")
def update_category(category_id: int, category_data: dict):
    return CategoryController.update_category(category_id, category_data)

# Endpoint para eliminar una categoría mediante su id
@router.delete("/delete/{category_id}")
def delete_category(category_id: int):
    return CategoryController.delete_category(category_id)