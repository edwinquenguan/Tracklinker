import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createProductService(product_data) {
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.products}/create`, {
    method: "POST",
    headers: {
      Authorization: getToken(),
    },
    body: JSON.stringify(product_data),
  });

  if (!res.ok) {
    throw new Error("Error al intentar crear el producto");
  }

  const data = res.json();

  return data;
}
