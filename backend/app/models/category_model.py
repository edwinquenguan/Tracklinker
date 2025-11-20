from pydantic import BaseModel
from typing import Optional

from pydantic import BaseModel
from typing import Optional
from app.core.database import get_connection

class CategoryCreate(BaseModel):
    name: str

class CategoryUpdate(BaseModel):
    name: str