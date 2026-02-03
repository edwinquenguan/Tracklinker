import { useState } from "react";
import { updateTransformation } from "../services/updateTransformation";

export function useEditTransformation() {
  const [loading, setLoading] = useState(false);

  const editTransformation = async (id, data) => {
    setLoading(true);

    try {
      const response = await updateTransformation(id, data);
      return response;
    } catch (error) {
      return {
        success: false,
        error,
      };
    } finally {
      setLoading(false);
    }
  };

  return { editTransformation, loading };
}
