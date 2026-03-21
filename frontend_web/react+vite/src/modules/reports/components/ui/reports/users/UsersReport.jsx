// Hooks
import { useUsersData } from "../../../../hooks/users/useUsersData";
// Icons
import { actionsIcons } from "../../../../../../assets/icons/mainIcons";
// Components
import KpiCard from "../../KpiCard";
import ReportCard from "../../ReportCard";
import TableCard from "../../TableCard";
import UsersTable from "./UsersTable";
import UsersPieChart from "./UsersPieChart";
import UsersAreaChart from "./UsersAreaChart";
import ReturnButton from "../../ReturnButton";

export default function UsersReport({ setReport, setTopSectionVisiblity }) {
  const { usersData } = useUsersData();
  setTopSectionVisiblity(false);
  return (
    <section className="w-full h-full flex flex-col gap-2 animate-blurUp">
      <section className="flex items-center justify-between pl-3 dark:text-white">
        <ReturnButton onClick={() => setReport("home")} />
        <div className="flex items-center justify-end gap-1.5 pr-3">
          <div className="flex gap-1 py-0.5 border rounded-xl text-sm font-medium bg-gray-200 
          dark:bg-gray-950 dark:border-neutral-800 ">
            <button className="px-4 py-1.5 rounded-lg">7d</button>
            <button className="px-4 py-1.5 rounded-xl bg-white shadow-md dark:text-black">
              30d
            </button>
            <button className="px-4 py-1.5 rounded-lg">6m</button>
            <button className="px-4 py-1.5 rounded-lg">1a</button>
          </div>
          <button
            className="flex items-center px-4 py-2 gap-2 border rounded-xl shadow-md text-sm 
          dark:text-white dark:border-neutral-800"
          >
            <img
              src={actionsIcons.uploadIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <span>Exportar</span>
          </button>
        </div>
      </section>
      {usersData.map((item) => (
        <section
          className="h-full w-full grid p-3 pt-2
              xl:grid-cols-[repeat(16,_1fr)] xl:grid-rows-7
              gap-3"
        >
          <section className="col-span-4 row-span-1 flex flex-col justify-center items-start dark:text-white">
            <span className="text-2xl font-medium">Reporte de Usuarios</span>
            <span className="text-sm">16 De Marzo - 23 De Marzo 2025</span>
          </section>
          {/* Cards o KPIs principales */}
          <KpiCard
            name={"Total usuarios"}
            metricValue={item.total_users}
            percentValue={"+12%"}
          />
          <KpiCard
            name={"Activos"}
            metricValue={item.active_users}
            percentValue={"+12%"}
          />
          <KpiCard
            name={"Deshabilitados"}
            metricValue={item.inactive_users}
            percentValue={"+12%"}
          />
          <KpiCard
            name={"Nuevos este mes"}
            metricValue={item.recent_users}
            percentValue={"+12%"}
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
        </section>
      ))}
    </section>
  );
}
