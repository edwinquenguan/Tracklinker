import { useState, useEffect } from "react";
import { getProducts } from "../services/getProducts";
import { getAllCategories } from "../../../services/getAllCategories";
import { getSubcategoriesWithCategory } from "../../../services/getSubcategoriesWithCategory";

export function useCatalog() {
  // Definir los estados y sus valores por defecto
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();

    async function fetchCategories() {
      try {
        const categoryData = await getAllCategories();
        setCategories(categoryData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchCategories();

    async function fetchSubcategories() {
      try {
        const subcategoryData = await getSubcategoriesWithCategory();
        setSubcategories(subcategoryData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchSubcategories();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return { products, categories, subcategories, loading, error };
}
