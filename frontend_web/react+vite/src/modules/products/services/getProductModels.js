import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function getProductModels() {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.products}/models`, {
    method: "GET",
    headers: {
      Authorization: getToken(),
    },
  });

  if (!res.ok) {
    throw new Error("Error en la petición");
  }

  const data = await res.json();

  return data.data;
}
