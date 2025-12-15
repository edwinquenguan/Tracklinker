import { useState } from "react";
import { deleteSupplierService } from "../services/deleteSupplierService";

export function useDeleteSupplier(supplier_id) {
  const [id, setId] = useState(supplier_id);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(setInnerModal) {
    setLoading(true);
    try {
      const response = await deleteSupplierService(id);
      if (response.success) {
        setInnerModal("success");
      }
    } catch (error) {
      setInnerModal("error");
      setError(error);
    } finally {
      setLoading(false)
    }
  }

  return { loading, error, handleSubmit };
}
