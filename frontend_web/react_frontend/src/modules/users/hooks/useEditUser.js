import { useState } from "react";
import { editUserService } from "../services/editUserService";

export function useEditUser(userId, formData) {
  const [id, setId] = useState(userId)
  const [form, setForm] = useState(formData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true)

    try {
      const response = await editUserService(id, form)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }

  return {handleChange, handleSubmit, loading, error, form}
}
