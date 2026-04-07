import { useEffect, useRef, useState } from "react";
import { monthNames } from "../../../../constants/dateConstants";
import { getProductsAreaChartService } from "../../services/products/getProductsAreaChartService";

export function useProductsAreaData() {
  const [productsData, setProductsData] = useState([]);
  const [error, setError] = useState(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    async function fetchProductsData() {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();

      try {
        const response = await getProductsAreaChartService(
          controllerRef.current.signal,
        );
        const data = response.map((row) => ({
          month: monthNames[row.month_num - 1],
          products: row.products,
        }));
        setProductsData(data);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
      }
    }

    fetchProductsData();
    return () => controllerRef.current?.abort();
  }, []);

  return { productsData, error };
}
