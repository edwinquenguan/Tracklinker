import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function deleteSupplierService(supplier_id) {
  const res = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.suppliers}/delete/${supplier_id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: getToken(),
      },
    }
  );

  // Validar si la respuesta no fue ok
  if (!res.ok) {
    throw new Error("Error al intentar eliminar el usuario");
  }

  const data = await res.json();

  return data;
}
