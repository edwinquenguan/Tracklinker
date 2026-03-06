import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createInputOrderService(form) {
  const response = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.products}/create-input-order`,
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
    throw new Error("Error al crear la orden de entrada");
  }

  return await response.json();
}
