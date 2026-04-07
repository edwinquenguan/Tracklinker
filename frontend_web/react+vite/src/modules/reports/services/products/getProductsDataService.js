import { apiRoutes } from "../../../../config/apiRoutes";
import { getToken } from "../../../../utils/auth";

export async function getProductsDataService(signal) {
  const response = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.reports}/get_products_by_status`,
    {
      method: "GET",
      credentials: "include",
      headers: {
        Authorization: getToken(),
      },
      signal,
    },
  );

  if (!response.ok) {
    throw new Error("Error en la petición");
  }
  const data = await response.json();

  return data.data;
}
