import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function deleteCategoryService(id) {
  const res = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.categories}/delete/${id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: getToken(),
      }
    }
  );

  // Validamos si la petición falló
  if (!res.ok) {
    throw new Error("Error al eliminar la categoría");
  }

  const data = await res.json();

  // Retornamos solo la categoría eliminada o confirmación
  return data;
}
