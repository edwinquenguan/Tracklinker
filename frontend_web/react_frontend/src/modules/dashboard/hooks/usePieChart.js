import { useState, useEffect } from "react";
import { pieChartData } from "../services/pieChartData";

export function usePieChart() {
  const [simplePieChartData, setSimplePieChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para almacenar la informacion del graficó en forma de pie
    async function fetchPieChartData() {
      try {
        const data = await pieChartData();
        setSimplePieChartData(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchPieChartData();
  }, []);
  return { simplePieChartData, error };
}
