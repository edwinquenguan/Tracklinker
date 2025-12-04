import { apiRoutes } from "../../../config/apiRoutes";

// ✅ Exportar la función createWarranty
export async function createWarranty(formData) {
  try {
    const res = await fetch(`${apiRoutes.apiUrl}/warranties`, {
      method: "POST",
      body: formData, // NO enviar headers cuando hay archivos
    });

    if (!res.ok) {
      const errorText = await res.text();
      throw new Error(errorText || "Error al crear la garantía");
    }

    const data = await res.json();
    return { error: null, data };

  } catch (error) {
    console.error("Error creando garantía:", error);
    return { error };
  }
}
