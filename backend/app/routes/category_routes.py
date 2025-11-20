from fastapi import APIRouter, Depends
from app.middlewares.roles_middleware import require_roles
from app.controllers.category_controller import CategoryController
from app.models.category_model import CategoryModel, CategoryCreate, CategoryUpdate

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
async def create_category(category_data: CategoryCreate):
    data_dict = category_data.dict()
    error, message, result = CategoryModel.create(data_dict)  
    if error:
        return {"detail": error}
    return {"message": message, "data": result}

@router.put("/update/{category_id}")
async def update_category(category_id: int, category_data: dict):
    error, message, result = CategoryModel.update(category_id, category_data)
    if error:
        return {"detail": error}
    return {"message": message, "data": result}

# Endpoint para eliminar una categoría mediante su id
@router.delete("/delete/{category_id}")
def delete_category(
    category_id: int
):
    return CategoryController.delete_category(category_id)