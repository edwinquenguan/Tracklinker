from fastapi import APIRouter, Depends
from app.models.suppliers_model import Supplier
from app.controllers.suppliers_controller import SuppliersController

router = APIRouter(
    prefix="/api/suppliers",
    tags=["Suppliers"]
)

# Endpoint para obtener todos los proveedores
@router.get("/")
def get_all_suppliers():
    return SuppliersController.get_all_suppliers()

# Endpoint para obtener un proveedor mediante el id
@router.get("/{supplier_id}")
def get_supplier_by_id(supplier_id: int):
    return SuppliersController.get_supplier_by_id(supplier_id)

# Endpoint para crear un proveedor
@router.post("/create")
def create_supplier(supplier_data: Supplier):
    return SuppliersController.create_supplier(supplier_data)

# Endpoint para actualizar un proveedor mediante el id
@router.put("/update/{supplier_id}")
def update_supplier(supplier_id: int, supplier_data: dict):
    return SuppliersController.update_supplier(supplier_id, supplier_data)

# Endpoint para eliminar un proveedor mediante el id
@router.delete("/delete/{supplier_id}")
def delete_supplier(supplier_id: int):
    return SuppliersController.delete_supplier(supplier_id)