import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function updateTransformation(id, data) {
  try {
    const res = await fetch(
      `${apiRoutes.apiUrl}${apiRoutes.transformations}/update${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
        body: JSON.stringify(data),
      }
    );

    const responseData = await res.json();

    if (!res.ok) {
      return {
        success: false,
        error:
          responseData?.message ||
          "Error al actualizar la transformación",
      };
    }

    return {
      success: true,
      data: responseData,
    };
  } catch (error) {
    return {
      success: false,
      error: "Error de red o del servidor",
    };
  }
}
