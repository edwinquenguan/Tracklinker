import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createWarranty(data) {
  try {
    const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.warranties}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: getToken(),
      },
      body: JSON.stringify(data),
    });

    const responseData = await res.json();

    if (!res.ok) {
      return { success: false, error: responseData?.message || "Error al crear la garantía" };
    }

    return { success: true, data: responseData };
  } catch (error) {
    return { success: false, error: "Error de red o del servidor" };
  }
}
