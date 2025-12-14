// src/modules/warranties/hooks/useEditWarranty.js
import { useState } from "react";
import { updateWarranty } from "../services/updateWarranty";

export function useEditWarranty() {
  const [loading, setLoading] = useState(false);

  const handleEdit = async (id, data) => {
    if (!id) return { success: false, error: "No se proporcionó ID" };

    setLoading(true);
    const result = await updateWarranty(id, data);
    setLoading(false);

    return result;
  };

  return { handleEdit, loading };
}
