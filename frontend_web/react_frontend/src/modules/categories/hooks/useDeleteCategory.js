import { useState } from "react";
import { deleteCategoryService } from "../services/deleteCategoryService";

export function useDeleteCategory() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Función que envía el ID al service y maneja la respuesta
  async function handleDelete(id) {
    setLoading(true);
    setError(null);

    try {
      const response = await deleteCategoryService(id);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, handleDelete };
}
