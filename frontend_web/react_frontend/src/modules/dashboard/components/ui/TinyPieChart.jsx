import ChartCard from "./ChartCard";
import { Pie, PieChart, Tooltip, Cell } from "recharts";
import { useTinyPieChart } from "../../hooks/useTinyPieChart";

export default function TinyPieChart() {
  const { tinyPieChartInfo, error } = useTinyPieChart();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <ChartCard
      rowSpan={1}
      colSpan={3}
      bgColor={""}
      textColor={"black"}
      name={"Usuarios"}
      metricValue={"1"}
    >
      <PieChart data={tinyPieChartInfo} height={"100%"} responsive>
        <Pie
          dataKey={"value"}
          nameKey={"name"}
          cornerRadius="50%"
          innerRadius="80%"
          outerRadius="100%"
          fill="#2f3ab5"
          paddingAngle={5}
        >
          {tinyPieChartInfo.map((item, index) => (
            <Cell key={index} fill={item.color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ChartCard>
  );
}
