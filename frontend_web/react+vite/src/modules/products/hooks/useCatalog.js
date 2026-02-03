import { useState, useEffect } from "react";
import { getProducts } from "../services/getProducts";
import { getCategoriesService } from "../../categories/services/getCategoriesService";
import { getSubcategories } from "../../subcategories/services/getSubcategoriesService";
import { getProductBrands } from "../services/getProductBrands";

export function useCatalog() {
  // Definir los estados y sus valores por defecto
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [brands, setBrands] = useState([]);
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
        const categoryData = await getCategoriesService();
        setCategories(categoryData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchCategories();

    async function fetchSubcategories() {
      try {
        const subcategoryData = await getSubcategories();
        setSubcategories(subcategoryData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchSubcategories();

    async function fetchBrands() {
      try {
        const brandsData = await getProductBrands();
        setBrands(brandsData);
      } catch (error) {
        setError(error.message);
      }
    }
    fetchBrands();
  }, []);

  return { products, categories, subcategories, brands, loading, error };
}
