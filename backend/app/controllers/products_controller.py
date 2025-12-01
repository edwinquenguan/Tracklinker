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
    
    @staticmethod
    def get_all_and_new_products_ammount():
        error, data = ProductsRepository.find_all_and_new_products_ammount()

        if error:
            raise HTTPException(status_code=404, detail=error)
        
        return{
            "data": data
        }