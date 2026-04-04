import { apiRoutes } from "../../../config/apiRoutes";

export async function disableUserService(userId) {
  const res = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.users}/disable/${userId}`,
    {
      method: "PUT",
      credentials: "include",
    },
  );

  if (!res.ok) {
    throw new Error("Error al intentar eliminar el usuario");
  }

  return await res.json();
}
