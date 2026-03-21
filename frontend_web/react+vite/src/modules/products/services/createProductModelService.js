import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createProductModelService(form) {
  const response = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.products}/create-model`,
    {
      method: "POST",
      headers: {
        Authorization: getToken(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    },
  );

  if (!response.ok) {
    throw new Error("Error al crear el modelo de producto");
  }

  return await response.json();
}
