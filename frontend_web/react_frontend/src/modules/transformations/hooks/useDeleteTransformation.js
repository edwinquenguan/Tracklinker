// src/modules/transformations/hooks/useDeleteTransformation.js
import { useState } from "react";
import { deleteTransformation } from "../services/deleteTransformation";

export function useDeleteTransformation(onSuccess, onError) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    if (!id) {
      onError?.("No se proporcionó ID");
      return;
    }

    setLoading(true);
    try {
      const result = await deleteTransformation(id);

      if (result.success) {
        onSuccess?.();
      } else {
        onError?.(result.error);
      }
    } catch (error) {
      onError?.("Error de red o del servidor");
    } finally {
      setLoading(false);
    }
  };

  return { handleDelete, loading };
}
