// src/modules/warranties/services/updateWarranty.js
import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function updateWarranty(id, data) {
  if (!id) return { success: false, error: "No se proporcionó ID" };

  try {
    const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.warranties}/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const resData = await res.json();
      return { success: false, error: resData?.message || "Error al actualizar la garantía" };
    }

    return { success: true };
  } catch (error) {
    return { success: false, error: "Error de red o del servidor" };
  }
}
