// Hooks
// Components
import KpisContainer from "../../KpisContainer";
import ReportsContainer from "../../ReportsContainer";
import ReportsTopSection from "../../ReportsTopSection";
import TableCard from "../../TableCard";
import ReportCard from "../../ReportCard";

export default function SuppliersReport({ setReport }) {
  return (
    <section className="w-full h-full flex flex-col gap-2 animate-blurUp">
      <ReportsTopSection setReport={setReport} />

      <ReportsContainer
        reportsName={"Productos"}
        reportsDate={"16 De Marzo - 23 De Marzo 2025"}
      >
        {/* Cards o KPIs principales */}
        <KpisContainer
          firstKpiName={""}
          firstKpiValue={""}
          secondKpiName={""}
          secondKpiValue={""}
          thirdKpiName={""}
          thirdKpiValue={""}
          fourthKpiName={""}
          fourthKpiValue={""}
        />

        <ReportCard name={"Crecimiento Mensual"} colSpan={12}></ReportCard>

        <ReportCard name={"Distribución"} colSpan={4}></ReportCard>

        <TableCard tableTitle={"Productos recientes"}></TableCard>
      </ReportsContainer>
    </section>
  );
}
