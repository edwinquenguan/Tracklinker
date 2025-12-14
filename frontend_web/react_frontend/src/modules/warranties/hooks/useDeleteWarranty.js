// src/modules/warranties/hooks/useDeleteWarranty.js
import { useState } from "react";
import { deleteWarranty } from "../services/deleteWarranty";

export function useDeleteWarranty() {
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id) => {
    if (!id) return { success: false, error: "No se proporcionó ID" };

    setLoading(true);
    const result = await deleteWarranty(id);
    setLoading(false);

    return result;
  };

  return { handleDelete, loading };
}
