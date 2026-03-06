import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function getSuppliersService() {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.suppliers}/`, {
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
