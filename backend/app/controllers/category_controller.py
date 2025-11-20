from app.repository.category_repository import CategoryRepository
from app.models.category_model import CategoryCreate, CategoryUpdate
from fastapi import HTTPException

class CategoryController:

    @staticmethod
    def get_all_categories():
        error, categories = CategoryRepository.find_all_categories()

        if error:
            raise HTTPException(status_code=400, detail=error)

        return {
            "message": "Categorías obtenidas correctamente",
            "data": categories
        }

    @staticmethod
    def get_category_by_id(category_id: int):
        error, category = CategoryRepository.find_by_id(category_id)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": category
        }

    @staticmethod
    def create_category(category_data: CategoryCreate):
        data_dict = category_data.dict()
        
        error, message, result = CategoryModel.create(data_dict)
        if error:
            raise HTTPException(status_code=400, detail=error)
        return {
            "success": True,
            "message": message,
            "data": result
        }

    @staticmethod
    def update_category(category_id: int, category_data: CategoryUpdate):
        error, message, category = CategoryRepository.update(category_id, category_data)
        if error:
            raise HTTPException(status_code=400, detail=error)
        return {
            "message": message,
            "data": category
        }

    @staticmethod
    def delete_category(category_id: int):
        error, success, message = CategoryRepository.delete(category_id)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "success": success,
            "message": message
        }