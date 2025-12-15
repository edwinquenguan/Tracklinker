import { getToken } from "../../../utils/auth";
import { apiRoutes } from "../../../config/apiRoutes";

export async function editSupplierService(supplier_id, supplier_data) {
  const res = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.suppliers}/update/${supplier_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(supplier_data),
    }
  );

  // Validamos si la respuesta no fue OK
  if (!res.ok) {
    throw new Error("Error al editar el proveedor");
  }

  const data = await res.json();

  return data;
}
