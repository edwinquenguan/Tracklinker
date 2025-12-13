import { useState } from "react";
import { createCategory } from "../services/createCategoryService";

export function useCreateCategory(formData) {
  const [form, setForm] = useState(formData);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  // Función que pasa los parámetros al service y valida la respuesta
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await createCategory(form);
      setData(response);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { form, data, loading, error, handleSubmit, handleChange };
}
