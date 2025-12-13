import { useEffect, useState } from "react";
import { getCategory } from "../services/getCategory";

export function useCategory() {
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Este effect llama al service getCategory para obtener la categoría
  useEffect(() => {
    async function fetchCategory() {
      try {
        const data = await getCategory();
        setCategory(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchCategory();
  }, []);

  return { category, loading, error };
}
