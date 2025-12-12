// hooks/useCreateTransformation.js
import { useState } from "react";
import { createTransformation } from "../services/createTransformation";

// Convierte FormData → Objeto plano
function formDataToObject(formData) {
  const object = {};
  formData.forEach((value, key) => {
    if (!Reflect.has(object, key)) {
      object[key] = value;
      return;
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]];
    }
    object[key].push(value);
  });
  return object;
}

export function useCreateTransformation(onSuccess, onError) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCreateTransformation = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData(e.target);
      const transformationData = formDataToObject(formData);

      const { error: serviceError, data } =
        await createTransformation(transformationData);

      if (serviceError) throw new Error(serviceError);

      if (onSuccess) onSuccess(data);

      return data;

    } catch (err) {
      setError(err);
      if (onError) onError(err.message);
      return null;

    } finally {
      setLoading(false);
    }
  };

  return { handleCreateTransformation, loading, error };
}
