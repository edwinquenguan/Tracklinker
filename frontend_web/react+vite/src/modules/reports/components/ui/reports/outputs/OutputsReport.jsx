// Hooks
import { useState } from "react";
import { useOutputsData } from "../../../../hooks/outputs/useOutputsData";
// Components
import KpisContainer from "../../KpisContainer";
import ReportsContainer from "../../ReportsContainer";
import ReportsTopSection from "../../ReportsTopSection";
import TableCard from "../../TableCard";
import ReportCard from "../../ReportCard";
import OutputsAreaChart from "./OutputsAreaChart";
import OutputsPieChart from "./OutputsPieChart";
import OutputsTable from "./OutputsTable";

export default function OutputsReport({ setReport }) {
  const { outputsData } = useOutputsData();
  const [period, setPeriod] = useState("1a");
  return (
    <section className="w-full h-full flex flex-col gap-2 animate-blurUp">
      <ReportsTopSection
        setReport={setReport}
        periods={["7d", "30d", "6m", "1a"]}
        setPeriod={setPeriod}
        currentPeriod={period}
      />
      {outputsData.map((item) => (
        <ReportsContainer
          reportsName={"Salidas"}
          reportsDate={"16 De Marzo - 23 De Marzo 2025"}
        >
          {/* Cards o KPIs principales */}
          <KpisContainer
            firstKpiName={"Total"}
            firstKpiValue={item.total_outputs}
            secondKpiName={"Recientes"}
            secondKpiValue={item.recent_outputs}
            thirdKpiName={"Inactivas"}
            thirdKpiValue={item.inactive_outputs}
            fourthKpiName={"Activas"}
            fourthKpiValue={item.active_outputs}
          />

          <ReportCard name={"Crecimiento"} colSpan={12}>
            <OutputsAreaChart period={period} />
          </ReportCard>

          <ReportCard name={"Distribución"} colSpan={4}>
            <OutputsPieChart period={period} />
          </ReportCard>

          <TableCard tableTitle={"Salidas recientes"}>
            <OutputsTable />
          </TableCard>
        </ReportsContainer>
      ))}
    </section>
  );
}
