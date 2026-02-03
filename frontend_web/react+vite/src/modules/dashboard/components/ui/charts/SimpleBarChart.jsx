import { BarChart, Bar, XAxis, Tooltip, YAxis } from "recharts";
import useBarChart from "../../../hooks/useBarChart";
import ChartCard from "../ChartCard";

// Grafico de barras
export default function SimpleBarChart() {
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
      imageDisplay={"hidden"}
    >
      {/* Gráfico */}
      <BarChart width="100%" height="90%" responsive data={barChartData}>
        {/* Eje Y */}
        <YAxis width="auto" />
        {/* Eje x donde salen los nombres */}
        <XAxis dataKey={"supplier_name"} fontSize={"6px"} fontWeight={800} />
        <Tooltip />
        {/* Barras del gráfico */}
        <Bar dataKey="orders" fill="#152DD1" />
      </BarChart>
    </ChartCard>
  );
}
