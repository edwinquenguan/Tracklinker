// src/modules/transformations/hooks/useEditTransformation.js
import { useState } from "react";
import { updateTransformation } from "../services/updateTransformation";

export function useEditTransformation(onSuccess = () => {}, onError = () => {}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const editTransformation = async (id, data) => {
    setLoading(true);
    setError(null);

    try {
      await updateTransformation(id, data);
      onSuccess();
    } catch (err) {
      setError(err);
      onError(err);
    } finally {
      setLoading(false);
    }
  };

  return { editTransformation, loading, error };
}
