from fastapi import APIRouter
from app.controllers.output_details_controller import OutputDetailsController #Pendiente crear los archivos relacionados
from fastapi import Depends
from app.models.output_details_model import OutputDetails #Pendiente crear los archivos relacionados
from app.middlewares.roles_middleware import require_roles

router =APIRouter(
    prefix="/api/outputDetails",
    tags=["Output details"]
)

# Endpoint para obtener todos los detalles de salida

@router.get("/")
def get_all_outputDetails(
   payload: dict= Depends(require_roles(["Admin"]))
):
    return  OutputDetailsController.get_all_outputDetails()



@router.get("/{output_details_id}")
def get_outputDetails_by_id(output_details_id:int):
    return OutputDetailsController.get_outputDetails_by_id(output_details_id)
