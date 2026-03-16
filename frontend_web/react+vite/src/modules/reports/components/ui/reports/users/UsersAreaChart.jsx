import {
  ResponsiveContainer,
  AreaChart,
  Area,
  Tooltip,
  YAxis,
  XAxis,
} from "recharts";
import { useUsersAreaData } from "../../../../hooks/users/useUsersAreaData";

export default function UsersAreaChart() {
  const { usersData } = useUsersAreaData();
  return (
    <ResponsiveContainer width={"100%"} height={290}>
      <AreaChart
        data={usersData}
        height={"70%"}
        width={"100%"}
        responsive
        margin={{ left: 10, right: 5 }}
      >
        <YAxis width="auto" fontSize={"10px"} />
        <XAxis fontSize={"10px"} dataKey={"month"} />
        <Tooltip />
        <Area
          type={"natural"}
          dataKey={"users"}
          stroke="#152DD1"
          fill="#152DD1"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
