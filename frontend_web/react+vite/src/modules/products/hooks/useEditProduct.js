import { useState } from "react";
import { deleteProductService } from "../services/deleteProductService";

export function useEditProduct(product_id) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(setInnerModal) {
    setLoading(true);
    try {
      const response = await deleteProductService(product_id);
      if (response.success) {
        setInnerModal("success");
      }
      setLoading(false);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { loading, error, handleSubmit };
}
