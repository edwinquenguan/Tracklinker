import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function editCategoryService(category_data) {
  const res = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.categories}/edit/${category_data.id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(category_data),
    }
  );

  // Validamos si la petición falló
  if (!res.ok) {
    throw new Error("Error al editar la categoría");
  }

  const data = await res.json();

  // Retornamos únicamente la categoría editada
  return data.data;
}
