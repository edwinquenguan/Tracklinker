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
        // Almacenamos cada item de data dentro de un array de objetos para que sea usable con recharts
        const pieData = [
          { name: "Usuarios", value: data[0].users, color: "#2f3ab5" },
          { name: "Nuevos usuarios", value: data[1].new_users, color: "#12e396" },
        ];
        setTinyPieChartInfo(pieData);
      } catch (error) {
        setError(error);
      }
    }

    fetchPieChartData();
  }, []);
  return { tinyPieChartInfo, error };
}
