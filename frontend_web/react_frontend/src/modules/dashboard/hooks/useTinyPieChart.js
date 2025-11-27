import { useState, useEffect } from "react";
import { tinyPieChartData } from "../services/tinyPieChartData";

export function useTinyPieChart() {
  const [tinyPieChartInfo, setTinyPieChartInfo] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función para almacenar la informacion del graficó en forma de pie
    async function fetchPieChartData() {
      try {
        const data = await tinyPieChartData();
        setTinyPieChartInfo(data);
      } catch (error) {
        setError(error);
      }
    }

    fetchPieChartData();
  }, []);
  return { tinyPieChartInfo, error };
}
