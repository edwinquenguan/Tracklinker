import { useState } from "react";
import { updateCurrentUserInfoService } from "../services/updateCurrentUserInfoService";

export function useUpdateCurrentUserInfo(user_data) {
  const [userData, setUserData] = useState(user_data);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleChange(e) {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  async function handleSubmit(e, setInnerModal) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await updateCurrentUserInfoService(userData);
      if (response.success) {
        setInnerModal("success");
      } else {
        setInnerModal("error");
      }
    } catch (error) {
      setInnerModal("error");
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { handleSubmit, handleChange, userData, loading, error };
}
