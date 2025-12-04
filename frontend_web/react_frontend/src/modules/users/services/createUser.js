import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createUser(user_data) {
  console.log(JSON.stringify(user_data))
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.users}/create`, {
    method: "POST",
    headers: {
      Authorization: getToken(),
    },
    body: JSON.stringify(user_data),
  });

  // Validamos si la respuesta no fue OK
  if (!res.ok) {
    throw new Error("Error al crear el usuario");
  }

  return await res.json();
}
