import { getToken } from "../../../utils/auth";
import { apiRoutes } from "../../../config/apiRoutes";

export async function getInputOrdersService() {
  const response = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.products}/input-orders`,
    {
      method: "GET",
      headers: {
        Authorization: getToken(),
      },
    },
  );

  if (!response.ok) {
    throw new Error("Error al obtener las órdenes de entrada");
  }

  const data = await response.json();

  return data.data;
}
