import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

// Servicio para obtener una sola categoría por ID
export async function getCategoryService(id) {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.categories}/${id}`, {
    method: "GET",
    headers: {
      Authorization: getToken(),
    },
  });

  if (!res.ok) {
    throw new Error("Error al obtener la categoría");
  }

  const data = await res.json();

  // Retornamos solo los datos de la categoría
  return data.data;
}
