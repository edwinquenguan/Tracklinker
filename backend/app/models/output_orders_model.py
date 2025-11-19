from pydantic import BaseModel
from typing import Optional
from datetime import datetime

class OutputOrder(BaseModel):
    output_order_id: Optional[int] = None
    order_date: Optional[datetime] = None
    client_id: int
    user_id: int