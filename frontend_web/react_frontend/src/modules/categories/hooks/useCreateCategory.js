import { useState } from "react";
import { createCategoryService } from "../services/createCategoryService";

export function useCreateCategory(formData) {
  const [form, setForm] = useState(formData);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  // Función que pasa los parámetros al service y valida la respuesta
  async function handleSubmit(e, setInnerModal) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await createCategoryService(form);
      if (response.success) {
        setInnerModal("success");
      }
      setData(response);
    } catch (error) {
      setInnerModal("error");
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { form, data, loading, error, handleSubmit, handleChange };
}
