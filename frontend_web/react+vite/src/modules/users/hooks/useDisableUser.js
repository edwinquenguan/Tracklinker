import { useState } from "react";
import { disableUserService } from "../services/disableUserService";

export function useDisableUser(userId) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleSubmit(e, setInnerModal) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await disableUserService(userId);
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

  return { handleSubmit, loading, error };
}
