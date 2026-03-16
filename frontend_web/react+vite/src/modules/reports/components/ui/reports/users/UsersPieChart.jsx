import { useUsersPieData } from "../../../../hooks/users/useUsersPieData";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
} from "recharts";

export default function UsersPieChart() {
  const { usersData } = useUsersPieData();
  return (
    <ResponsiveContainer width={"100%"} height={280}>
      <PieChart width={"100%"} height={"100%"}>
        <Tooltip />
        <Pie
          data={usersData}
          cy={"85%"}
          dataKey={"value"}
          nameKey={"name"}
          startAngle={180}
          endAngle={0}
          cornerRadius={"10%"}
          paddingAngle={1}
          innerRadius="100"
          outerRadius="150"
        >
          {usersData.map((item, index) => (
            <Cell key={index} fill={item.color} stroke="#1447e6" />
          ))}
        </Pie>
        <Legend
          layout="vertical"
          formatter={(value, entry) => {
            return `${value}: ${entry.payload.value}`;
          }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
}
