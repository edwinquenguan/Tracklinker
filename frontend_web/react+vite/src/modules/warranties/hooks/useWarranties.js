import { useState, useEffect } from "react";
import { getWarranties } from "../services/getWarranties";

export function useWarranties() {
  const [warranties, setWarranties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Esto llama a la función getWarranties y espera a obtener toda los datos y los almacena en "data"
  useEffect(() => {
    async function fetchWarranties() {
      try {
        setLoading(true);
        const data = await getWarranties();
        setWarranties(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchWarranties();
  }, []);

  return { warranties, loading, error };
}
