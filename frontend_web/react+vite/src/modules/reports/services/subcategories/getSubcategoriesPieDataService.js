import { apiRoutes } from "../../../../config/apiRoutes";
import { getToken } from "../../../../utils/auth";

export async function getSubcategoriesPieDataService(period, signal) {
  const response = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.reports}/get_subcategories_by_category/${period}`,
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
