import { useEffect, useState } from "react";
import { getCategoriesService } from "../services/getCategoriesService"

export function useCategories() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Esta función llama al service getCategories para obtener las categorías
  async function fetchCategories() {
    try {
      const data = await getCategoriesService();
      setCategories(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchCategories();
  }, []);

  return { fetchCategories, categories, loading, error };
}
