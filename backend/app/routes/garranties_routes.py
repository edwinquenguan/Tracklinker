from fastapi import APIRouter
from app.controllers.garranties_controller import GuarantieeController
from fastapi import Depends
from app.models.garranties_model import Guarantee
from app.middlewares.roles_middleware import require_roles



router =APIRouter(
    prefix="/api/garranties",
    tags= ["Guarantee"]
)

@router.get("/")
def get_all_garranties(payload: dict=Depends(require_roles(["Admin"]))):
 return GuarantieeController.get_all_garranties()