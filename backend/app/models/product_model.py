from pydantic import BaseModel
from datetime import datetime

class Product(BaseModel):
    input_order_id: int
    subcategory_id: int
    product_model: str
    product_serial: str
    product_brand: str
    product_model: str
    product_stock: int
    product_garanty_input: datetime