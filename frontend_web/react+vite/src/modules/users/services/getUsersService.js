import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

let controlador;
// Esta función obtiene todos los usuarios y los almacena en data
export async function getUsers() {
  // Cancela la peticion anterior si existe
  controlador?.abort();

  controlador = new AbortController();
  const signal = controlador.signal;

  try {
    // Consumimos el endpoint y lo almacenamos en res, le pasamos el metodo y el jwt que necesita para traer los datos
    const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.users}/`, {
      signal,
      method: "GET",
      headers: {
        Authorization: getToken(),
      },
    });

    // Validamos si la respuesta fue OK
    if (!res.ok) {
      throw new Error("Error en la petición");
    }

    // Convertimos la respuesta a json y la almacenamos en data
    const data = await res.json();
    controlador = null;

    // Devolvemos el objeto data dentro de la respuesta
    return data.data;
  } catch (error) {
    error.name === "AbortError"
      ? console.warn("Solicitud Cancelada")
      : console.error("Error al hacer el fetch", error);
      return [];
  }
}
