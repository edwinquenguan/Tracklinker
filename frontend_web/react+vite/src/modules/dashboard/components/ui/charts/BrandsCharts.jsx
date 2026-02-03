import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { useBrandsChart } from "../../../hooks/useBrandsChart";
import ChartCard from "../ChartCard";

export default function BrandsChart() {
  const { brandChartInfo, error } = useBrandsChart();

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <ChartCard
      rowSpan={2}
      colSpan={3}
      name={"Marcas con más unidades"}
    >
      <BarChart height={"90%"} width={"100%"} responsive data={brandChartInfo}>
        <YAxis width="auto"/>
        <XAxis dataKey={"brand"} fontSize={"8px"}/>
        <Bar dataKey={"products"} fill="#152DD1" background={"#000"} radius={[8, 8, 0, 0]} />
        <Tooltip />
      </BarChart>
    </ChartCard>
  );
}
