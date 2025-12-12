// src/modules/transformations/services/createTransformation.js
export async function createTransformation(data) {
  try {
    const res = await fetch("/api/output_orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (!res.ok) {
      return { error: response?.message || "Error al crear la transformación" };
    }

    return { data: response };
  } catch (err) {
    return { error: err.message };
  }
}
