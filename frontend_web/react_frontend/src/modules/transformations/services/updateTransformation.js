// src/modules/transformations/services/updateTransformation.js
export async function updateTransformation(id, data) {
  try {
    const res = await fetch(`/api/output_orders/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const errorResponse = await res.json().catch(() => null);
      throw new Error(errorResponse?.message || "Error al actualizar la transformación");
    }

    return true;
  } catch (err) {
    throw new Error(err.message);
  }
}
