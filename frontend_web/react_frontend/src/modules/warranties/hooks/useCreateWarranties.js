import { useState } from "react";
import { createWarranty } from "../services/warrantyService";

export function useCreateWarranty(onSuccess, onError) {
  const [loading, setLoading] = useState(false);

  const handleCreateWarranty = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const { error, data } = await createWarranty(formData);

    setLoading(false);

    if (error) {
      if (onError) onError(error);
    } else {
      if (onSuccess) onSuccess(data);
    }
  };

  return { handleCreateWarranty, loading };
}
