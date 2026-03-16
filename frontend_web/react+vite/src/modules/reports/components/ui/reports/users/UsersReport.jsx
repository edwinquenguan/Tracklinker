// Components
import KpiCard from "../../KpiCard";
import ReportCard from "../../ReportCard";
import TableCard from "../../TableCard";
import UsersTable from "./UsersTable";
import UsersPieChart from "./UsersPieChart";
import UsersAreaChart from "./UsersAreaChart";
import ReturnButton from "../../ReturnButton";

export default function UsersReport({ setReport, setRangeDate, setTitle }) {
  setRangeDate("01 Feb - 08 Feb 2025");
  return (
    <section className="w-full h-full flex flex-col gap-2">
      <section className="flex items-center justify-between pl-3">
        <ReturnButton
          onClick={() => {
            setTitle("Informes");
            setReport("home");
            setRangeDate(false);
          }}
        />
        <div className="flex items-center justify-end gap-1.5 pr-3">
          <button className="px-4 py-1.5 bg-gray-100 rounded-xl shadow-xl">
            7d
          </button>
          <button className="px-4 py-1.5 border rounded-xl shadow-md">
            30d
          </button>
          <button className="px-4 py-1.5 border rounded-xl shadow-md">
            6m
          </button>
          <button className="px-4 py-1.5 border rounded-xl shadow-md">
            1a
          </button>
        </div>
      </section>
      <section
        className="h-[91%] w-full grid p-3 pt-2 animate-blurUp
              xl:grid-cols-12 xl:grid-rows-7
              gap-3"
      >
        {/* Cards o KPIs principales */}
        <KpiCard
          name={"Total usuarios"}
          metricValue={"4821"}
          percentValue={"+12%"}
        />
        <KpiCard name={"Activos"} metricValue={"3540"} percentValue={"+12%"} />
        <KpiCard
          name={"Deshabilitados"}
          metricValue={"892"}
          percentValue={"+12%"}
        />
        <KpiCard
          name={"Nuevos este mes"}
          metricValue={"389"}
          percentValue={"+12%"}
        />

        <ReportCard name={"Crecimiento Mensual"} colSpan={8}>
          <UsersAreaChart />
        </ReportCard>

        <ReportCard name={"Distribución"} colSpan={4}>
          <UsersPieChart />
        </ReportCard>

        <TableCard tableTitle={"Usuarios recientes"}>
          <UsersTable />
        </TableCard>
      </section>
    </section>
  );
}
