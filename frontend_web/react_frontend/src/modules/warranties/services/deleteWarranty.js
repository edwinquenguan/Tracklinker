import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

/**
 * Servicio para eliminar una garantía por su ID.
 * @param {string | number} warrantyId - El ID de la garantía a eliminar.
 * @returns {Promise<object>} Objeto de respuesta (generalmente un mensaje de éxito o un objeto vacío).
 */
export async function deleteWarranty(warrantyId) {
    
  const res = await fetch(`${apiRoutes.apiUrl}/warranty_incidents/delete/${warrantyId}`, {
    method: "DELETE",
    headers: {
         Authorization: getToken(),
    },
    
  });

  // Validamos si la respuesta no fue OK
  if (!res.ok) {
    // Intentamos obtener más detalles del error si la respuesta tiene cuerpo
    let errorDetail = "Error al eliminar la garantía";
    try {
        const errorData = await res.json();
        errorDetail = errorData.message || errorDetail;
    } catch (e) {
        // No hay cuerpo JSON, usamos el error por defecto
    }
    throw new Error(errorDetail);
  }

  // Las operaciones DELETE a menudo responden con un estado 204 No Content
  // sin un cuerpo JSON. Manejamos esto para evitar errores al intentar parsear.
  if (res.status === 204) {
      return { message: "Garantía eliminada con éxito" };
  }
  
  // Si la API devuelve un cuerpo JSON (por ejemplo, un mensaje de éxito)
  return await res.json();
}