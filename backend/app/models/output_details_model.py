from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime

class OutputDetails(BaseModel):
    out_order_id: Optional[int]
    product_serial: str 
    output_details_id: Optional[int] = None
    out_product_garanty: Optional[datetime]
    product_transformation: str 	


   