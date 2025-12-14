import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function createTransformation(transformationData) {
  try {
    const res = await fetch(
      `${apiRoutes.apiUrl}${apiRoutes.transformations}/create`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
        body: JSON.stringify(transformationData),
      }
    );

    const data = await res.json();

    // Normalizamos la respuesta
    if (!res.ok) {
      return {
        success: false,
        error: data?.message || "Error al crear la transformación",
      };
    }

    return {
      success: true,
      data,
    };
  } catch (error) {
    return {
      success: false,
      error: "Error de red o del servidor",
    };
  }
}
