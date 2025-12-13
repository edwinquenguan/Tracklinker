import { useEffect, useState } from "react";
import { getCategoriesService } from "../services/getCategoriesService"

export function useCategories() {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Este effect llama al service getCategories para obtener las categorías
  useEffect(() => {
    async function fetchCategory() {
      try {
        const data = await getCategoriesService();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchCategory();
  }, []);

  return { categories, loading, error };
}
