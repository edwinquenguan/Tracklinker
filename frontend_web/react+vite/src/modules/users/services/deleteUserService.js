import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function deleteUserService(userId) {
  const res = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.users}/delete/${userId}`,
    {
      method: "DELETE",
      headers: {
        Authorization: getToken(),
      },
    },
  );

  if (!res.ok) {
    throw new Error("Error al intentar eliminar el usuario");
  }

  return await res.json();
}
