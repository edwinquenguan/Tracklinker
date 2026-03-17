import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function getRoles() {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.users}/roles`, {
    method: "GET",
    headers: {
      Authorization: getToken(),
    },
  });
  // Validamos si la respuesta fue OK
  if (!res.ok) {
    throw new Error("Error al obtener los usuarios");
  }
  // Convertimos la respuesta a json y la almacenamos en data
  const data = await res.json();

  return data.data;
}
