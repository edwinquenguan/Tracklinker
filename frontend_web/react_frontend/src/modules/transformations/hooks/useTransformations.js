import { useState, useEffect } from "react";
import { getTransformations } from "../services/getTransformations"; 

export function useTransformations() {
  const [transformations, setTransformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await getTransformations(); 
        setTransformations(data);
      } catch (err) {
        setError(err.message || "Error al obtener transformaciones");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return { transformations, loading, error };
}
