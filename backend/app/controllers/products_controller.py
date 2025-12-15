from app.repository.products_repository import ProductsRepository
from fastapi import HTTPException


class ProductsController:
    @staticmethod
    def get_all_products():
        error, products = ProductsRepository.find_all_products()

        if error:
            raise HTTPException(status_code=404, detail=error)

        return {
            "data": products
        }

    @staticmethod
    def get_all_and_new_products_ammount():
        error, data = ProductsRepository.find_all_and_new_products_ammount()

        if error:
            raise HTTPException(status_code=404, detail=error)

        return {
            "data": data
        }

    @staticmethod
    def get_products_added_by_date_range(start_date: str, end_date: str):
        error, products = ProductsRepository.find_products_added_by_date_range(
            start_date, end_date)

        if error:
            raise HTTPException(status_code=404, detail=error)

        return {
            "data": products
        }

    @staticmethod
    def get_products_deleted_by_date_range(start_date: str, end_date: str):
        error, products = ProductsRepository.find_products_deleted_by_date_range(
            start_date, end_date)

        if error:
            raise HTTPException(status_code=404, detail=error)

        return {
            "data": products
        }

    @staticmethod
    def get_products_out_of_stock():
        error, products = ProductsRepository.find_products_out_of_stock()

        if error:
            raise HTTPException(status_code=404, detail=error)

        return {
            "data": products
        }

    @staticmethod
    def create_product(product_garanty_input):
        error, success, message = ProductsRepository.create_product(product_garanty_input)

        if error:
            raise HTTPException(status_code=400, detail=error)
        return {
            "sucess": success,
            "message": message
        }
