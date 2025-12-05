import { useEffect, useState } from "react";
import { getCategories } from "../services/getCategories";

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Este effect llama al service getCategories para obtener todas las categorías
  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchCategories();
  }, []);

  return { categories, loading, error };
}
