import { Pie, PieChart, Tooltip } from "recharts";
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
          dataKey={"total"}
          nameKey={"status"}
          cornerRadius="50%"
          innerRadius="80%"
          outerRadius="100%"
          fill="#2f3ab5"
          paddingAngle={5}
        />
      </PieChart>
    </ChartCard>
  );
}
