from pydantic import BaseModel
from datetime import datetime
from typing import Optional

from pydantic import BaseModel
from typing import Optional
from app.core.database import get_connection

class CategoryCreate(BaseModel):
    name: str
    description: str

class CategoryUpdate(BaseModel):
    name: str
    description: str