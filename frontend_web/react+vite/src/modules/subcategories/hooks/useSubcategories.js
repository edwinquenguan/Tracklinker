import { useEffect, useState } from "react";
import { getSubcategories } from "../services/getSubcategoriesService";

export function useSubcategories() {
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Esta función llama al service getAllSubcategories y espera a obtener todos los datos y los almacena en "data"
  async function fetchSubcategories() {
    try {
      const data = await getSubcategories();
      setSubcategories(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }
  useEffect(() => {
    fetchSubcategories();
  }, []);

  return { subcategories, loading, error, fetchSubcategories };
}
