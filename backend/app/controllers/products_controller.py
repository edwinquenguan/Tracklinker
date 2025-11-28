from app.repository.products_repository import ProductsRepository
from fastapi import HTTPException

class ProductsController:
    @staticmethod
    def get_all_products():
        error, products = ProductsRepository.find_all_products()

        if error:
            raise HTTPException(status_code=404, detail=error)
        
        return{
            "data": products
        }