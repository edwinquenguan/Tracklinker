import { useSubcategoriesChart } from "../../../hooks/useSubcategoriesChart";
import ChartCard from "../ChartCard";
import { AreaChart, Area, Tooltip, XAxis, YAxis } from "recharts";

export default function SubcategoriesWithStockChart() {
  const { subcategories, loading, error } = useSubcategoriesChart();
  return (
    <ChartCard rowSpan={2} colSpan={5} name={"Subcategorias con mas productos"}>
      <AreaChart
        responsive
        data={subcategories}
        width={"100%"}
        height={"100%"}
        margin={{ left: 60, right: 10 }}
      >
        <XAxis dataKey={"subcategory"} width={"100%"} fontSize={"10px"} />
        <Area
          dataKey={"stock"}
          fill="#152DD1"
          stroke="#3B5BFF"
          strokeWidth={2}
          type={"natural"}
        />
        <Tooltip />
      </AreaChart>
    </ChartCard>
  );
}
