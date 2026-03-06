import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createProductService(product_data) {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.products}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify(product_data),
  });

  if (!res.ok) {
    throw new Error("Error al intentar crear el producto");
  }

  return await res.json()
}
