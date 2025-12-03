import { useEffect, useState } from "react";
import { getUsers } from "../services/getSubcategories";

export function useSubcategories() {
  const [subcategories, getSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Este effect llama al service getAllUsers y espera a obtener todos los datos y los almacena en "data"
  useEffect(() => {
    async function fetchSubcategories() {
      try {
        const data = await getSubcategories();
        setSubcategories(data);
        setLoading(false)
      } catch (error) {
        setError(error.message);
      }
    }

    fetchSubcategories();
  }, []);

  return { subcategories, loading, error };
}
