import { apiRoutes } from "../../../../config/apiRoutes";
import { getToken } from "../../../../utils/auth";

export async function getUsersAreaChartService(period, signal) {
  const response = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.reports}/get_user_growth/${period}`,
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
