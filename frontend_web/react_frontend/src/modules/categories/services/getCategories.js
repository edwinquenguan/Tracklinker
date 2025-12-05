import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

// Esta función obtiene todas las categorías y las almacena en data
export async function getCategories() {
  // Consumimos el endpoint para obtener categorías y enviamos el JWT en los headers
  const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.categories}/`, {
    method: "GET",
    headers: {
      Authorization: getToken(),
    },
  });

  // Validamos si la petición fue exitosa
  if (!res.ok) {
    throw new Error("Error en la petición");
  }

  // Convertimos la respuesta a JSON
  const data = await res.json();

  // Devolvemos únicamente el arreglo de categorías
  return data.data;
}
