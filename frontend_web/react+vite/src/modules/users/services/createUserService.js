import { apiRoutes } from "../../../config/apiRoutes";

export async function createUser(user_data) {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.users}/create`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user_data),
  });

  // Validamos si la respuesta no fue OK
  if (!res.ok) {
    throw new Error("Error al crear el usuario");
  }

  return await res.json();
}
