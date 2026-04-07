// Hooks
import { useUsersData } from "../../../../hooks/users/useUsersData";
// Components
import UsersTable from "./UsersTable";
import TableCard from "../../TableCard";
import ReportCard from "../../ReportCard";
import UsersPieChart from "./UsersPieChart";
import UsersAreaChart from "./UsersAreaChart";
import KpisContainer from "../../KpisContainer";
import ReportsContainer from "../../ReportsContainer";
import ReportsTopSection from "../../ReportsTopSection";

export default function UsersReport({ setReport }) {
  const { usersData } = useUsersData();
  return (
    <section className="w-full h-full flex flex-col gap-2 animate-blurUp">
      <ReportsTopSection setReport={setReport} />

      {usersData.map((item) => (
        <ReportsContainer
          reportsName={"usuarios"}
          reportsDate={"16 De Marzo - 23 De Marzo 2025"}
        >
          {/* Cards o KPIs principales */}
          <KpisContainer
            firstKpiName={"Total usuarios"}
            firstKpiValue={item.total_users}
            secondKpiName={"Activos"}
            secondKpiValue={item.active_users}
            thirdKpiName={"Deshabilitados"}
            thirdKpiValue={item.inactive_users}
            fourthKpiName={"Nuevos este mes"}
            fourthKpiValue={item.recent_users}
          />

          <ReportCard name={"Crecimiento Mensual"} colSpan={12}>
            <UsersAreaChart />
          </ReportCard>

          <ReportCard name={"Distribución"} colSpan={4}>
            <UsersPieChart />
          </ReportCard>

          <TableCard tableTitle={"Usuarios recientes"}>
            <UsersTable />
          </TableCard>
        </ReportsContainer>
      ))}
    </section>
  );
}
