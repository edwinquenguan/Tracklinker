// src/modules/transformations/hooks/useDeleteTransformation.js
import { useState } from "react";
import { deleteTransformation } from "../services/deleteTransformation";

export function useDeleteTransformation(onSuccess, onError) {
  const [loading, setLoading] = useState(false);

  const handleDeleteTransformation = async (id) => {
    if (!id) {
      if (onError) onError("Se requiere el ID de la transformación para eliminar.");
      return;
    }

    setLoading(true);
    try {
      await deleteTransformation(id);
      if (onSuccess) onSuccess();
    } catch (err) {
      if (onError) onError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { handleDeleteTransformation, loading };
}
