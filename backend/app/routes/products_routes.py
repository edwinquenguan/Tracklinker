from fastapi import APIRouter, Depends
from app.controllers.products_controller import ProductsController
from app.middlewares.roles_middleware import require_roles

router = APIRouter(
    prefix="/api/products",
    tags=["Products"]
)

@router.get("/")
def get_all_products():
    return ProductsController.get_all_products()

@router.get("/all-and-new")
def get_old_and_new_products_ammount():
    return ProductsController.get_all_and_new_products_ammount()