import { Pie, PieChart, Tooltip, Cell, Legend } from "recharts";
import { usePieChart } from "../../hooks/usePieChart";
import ChartCard from "./ChartCard";

export default function SimplePieChart() {
  const { simplePieChartData, error } = usePieChart();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ChartCard rowSpan={4} colSpan={3} name={"Estados de garantías"}>
      <PieChart height="100%" width="100%" responsive>
        <Tooltip />
        <Pie
          data={simplePieChartData}
          dataKey={"value"}
          nameKey={"name"}
          cornerRadius="50%"
          innerRadius="80%"
          outerRadius="100%"
          paddingAngle={5}
        >
          {simplePieChartData.map((item, index) => (
            <Cell key={index} fill={item.color} />
          ))}
          <Legend />
        </Pie>
      </PieChart>
    </ChartCard>
  );
}
