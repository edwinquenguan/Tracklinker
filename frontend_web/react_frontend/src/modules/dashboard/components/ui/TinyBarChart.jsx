import { BarChart, Bar, XAxis } from "recharts";
import useBarChart from "../../hooks/useBarChart";
import ChartCard from "./ChartCard";

// Grafico de barras
export default function TinyBarChart() {
  const { barChartData, error } = useBarChart();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    // Contenedor del gráfico
    <ChartCard
      colSpan={4}
      rowSpan={2}
      name={"Entradas Mensuales de cada proveedor"}
    >
      {/* Gráfico */}
      <BarChart width="100%" height="100%" responsive data={barChartData}>
        {/* Eje x donde salen los nombres */}
        <XAxis dataKey={"supplier_name"} fontSize={"6px"} fontWeight={800} />
        {/* Barras del gráfico */}
        <Bar dataKey="orders" fill="#4050e7" />
      </BarChart>
    </ChartCard>
  );
}
