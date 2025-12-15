from fastapi import APIRouter, Depends
from app.controllers.products_controller import ProductsController
from app.middlewares.roles_middleware import require_roles
from app.models.product_model import Product

router = APIRouter(
    prefix="/api/products",
    tags=["Products"]
)

# Endpoint para obtener todos los productos
@router.get("/")
def get_all_products():
    return ProductsController.get_all_products()

# Endpoint para obtener todos los productos y el numero de productos nuevos
@router.get("/all-and-new")
def get_old_and_new_products_ammount():
    return ProductsController.get_all_and_new_products_ammount()

# Endpoint para crear o agregar productos
@router.post("/create")
def create_product(product_data: Product):
    return ProductsController.create_product(product_data)
