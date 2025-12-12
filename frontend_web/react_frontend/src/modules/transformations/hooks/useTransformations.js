import { useState, useEffect } from "react";
import { getTransformations } from "../services/getTransformations"; 

export function useTransformations() {
  const [transformations, setTransformations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTransformations() {
      try {
        setLoading(true);
        const data = await getTransformations(); 
        console.log("Transformations fetched:", data);
        setTransformations(data);
      } catch (err) {
        setError(err.message || "Error al obtener transformaciones");
      } finally {
        setLoading(false);
      }
    }

    fetchTransformations()
  }, []);

  return { transformations, loading, error };
}
