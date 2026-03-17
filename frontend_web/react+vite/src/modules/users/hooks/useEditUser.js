import { useState } from "react";
import { editUserService } from "../services/editUserService";

export function useEditUser(userId, formData) {
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

  async function handleSubmit(e, setInnerModal) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await editUserService(userId, form);
      if (response.success) {
        setInnerModal("success");
      } else {
        setInnerModal("error");
      }
      setData(response);
    } catch (error) {
      setInnerModal("error");
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { handleChange, data, handleSubmit, loading, error, form };
}
