import { apiRoutes } from "../../../config/apiRoutes";

export async function enableUserService(userId) {
  const res = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.users}/enable/${userId}`,
    {
      method: "PUT",
      credentials: "include",
    },
  );

  if (!res.ok) {
    throw new Error("Error al intentar habilitar el usuario");
  }

  return await res.json();
}
