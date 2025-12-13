import { useState } from "react";
import { editCategoryService } from "../services/editCategoryService";

export function useEditCategory(id, initialData) {
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
  async function handleSubmit(e, setInnerModal) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await editCategoryService(id, form);
      if (response) {
        setInnerModal("success")
      }
      setData(response);
    } catch (err) {
      setInnerModal("error")
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return { form, data, loading, error, handleSubmit, handleChange };
}
