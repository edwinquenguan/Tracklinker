import { apiRoutes } from "../../../config/apiRoutes";
import getToken from "../../../utils/auth";

export async function editProductService(product_id, data) {
  const response = await fetch(
    `${apiRoutes.apiUrl}${apiRoutes.products}/edit/${product_id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(data),
    },
  );
  
  return response.json();
}
