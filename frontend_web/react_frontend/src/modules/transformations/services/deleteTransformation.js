
export async function deleteTransformation(id) {
  try {
    const res = await fetch(`/api/output_orders/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const errorResponse = await res.json().catch(() => null);
      throw new Error(errorResponse?.message || "Error al eliminar la transformación");
    }

    return true;
  } catch (err) {
    throw new Error(err.message);
  }
}
