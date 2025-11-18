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

# Endpoint para obtener los detalles de salida por id

@router.get("/{output_details_id}")
def get_outputDetails_by_id(output_details_id:int,
    payload: dict= Depends(require_roles(["Admin"])) 
    ):
    return OutputDetailsController.get_outputDetails_by_id(output_details_id)


# Endpoint para crear un detalle de salida

@router.post("/create")
def create_outputDetails(
    outputDetails_data: OutputDetails,
    payload: dict= Depends(require_roles(["Admin"]))
):
    return OutputDetailsController.create_outputDetails(outputDetails_data)

# Endpoint para actualizar detalles de salida

@router.put("/update{output_details_id}")
def update_outputDetails(
    output_details_id: int,
    outputDetails_data: dict,
    payload: dict= Depends(require_roles(["Admin"]))
):
    return OutputDetailsController.update_outputDetails(output_details_id, outputDetails_data)

# Endpoint para eliminar registro de detalles de salida

@router.delete("/delete{output_details_id}")
def delete_outputDetails(
    output_details_id:int,
    payload: dict= Depends(require_roles(["Admin"]))
):
    return OutputDetailsController.delete_outputDetails(output_details_id)