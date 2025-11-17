import { useState, useEffect } from "react";
import { areaChartData } from "../services/areaChartData";

export function useAreaChart() {
  const [areaChartData, setareaChartData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAreaChartData() {
      try {
        const data = await areaChartData();
        setareaChartData(data);
      } catch (error) {
        setError(error)
      }
    }

    fetchAreaChartData();
  });

  return { areaChartData, error }
}
