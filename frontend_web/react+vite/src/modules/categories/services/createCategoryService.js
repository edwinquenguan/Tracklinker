import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createCategoryService(category_data) {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.categories}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify(category_data),
  });

  // Validamos si la petición falló
  if (!res.ok) {
    throw new Error("Error al crear la categoría");
  }

  const data = await res.json();

  // Retornamos solo la categoría creada
  return data;
}
