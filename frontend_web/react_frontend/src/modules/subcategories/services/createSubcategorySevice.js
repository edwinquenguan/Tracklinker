import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createSubcategory(subcategory_data) {
  console.log(JSON.stringify(subcategory_data))
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.subcategories}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: getToken(),
    },
    body: JSON.stringify(subcategory_data),
  });   
    // Validamos si la respuesta no fue OK
    if (!res.ok) {
        throw new Error("Error al crear la subcategoría");  
    }

  return await res.json();
}   