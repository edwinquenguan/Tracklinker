import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createWarranty(warrantyData) {
  const res = await fetch(`${apiRoutes.apiUrl}/warranty_incidents/create`, {
    method: "POST",
    headers: {

      'Content-Type': 'application/json',
      Authorization: getToken(),

    },
    body: JSON.stringify(warrantyData),
  });

  // Validamos si la respuesta no fue OK
  if (!res.ok) {
    throw new Error("Error al crear el usuario");
  }

  return await res.json();
}

