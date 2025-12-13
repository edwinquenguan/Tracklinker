import { useState } from "react";
import { editCategory } from "../services/editCategory";

export function useEditCategory(initialData) {
  const [form, setForm] = useState(initialData);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  // Función que envía los datos al service y maneja la respuesta
  async function handleSubmit(e) {
    e.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await editCategory(form);
      setData(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { form, data, loading, error, handleSubmit, handleChange };
}
