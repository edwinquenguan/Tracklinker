import {
  Area,
  AreaChart,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import { useAreaChart } from "../../../hooks/useAreaChart";
import ChartCard from "../ChartCard";

export default function SimpleAreaChart() {
  const { areaChartInfo, error } = useAreaChart();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ChartCard
      rowSpan={2}
      colSpan={6}
      bgColor={""}
      name={"Salidas Mensuales del año"}
    >
      {/* Grafico en forma de ola */}
      <AreaChart width="100%" height="95%" responsive data={areaChartInfo}>
        {/* Número de ordenes de salidas que sale a la izquierda */}
        <YAxis width="auto" fontSize={"11px"} />
        {/* Nombres o meses que salen debajo del gráfico */}
        <XAxis dataKey={"month"} fontSize={"10px"} width={"100%"} />
        {/* Eje Y */}
        <Tooltip />
        <CartesianGrid vertical={false} stroke="#e5e7eb" />
        {/* Ola que va dentro del gráfico */}
        <Area
          type={"natural"}
          dataKey={"output_orders"}
          stroke="#152DD1"
          fill="#152DD1"
        />
      </AreaChart>
    </ChartCard>
  );
}
