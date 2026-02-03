import { useState } from "react";
import { createSupplierService } from "../services/createSupplierService";

export function useCreateSupplier(supplier_data) {
  const [form, setForm] = useState(supplier_data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e, setInnerModal) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await createSupplierService(form);
      if (response.success) {
        setInnerModal("success");
      }
    } catch (error) {
      setInnerModal("error");
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { form, loading, error, handleChange, handleSubmit };
}
