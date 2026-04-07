// Hooks
import { useProductsData } from "../../../../hooks/products/useProductsData";
// Components
import KpisContainer from "../../KpisContainer";
import ReportsContainer from "../../ReportsContainer";
import ReportsTopSection from "../../ReportsTopSection";
import TableCard from "../../TableCard";
import ReportCard from "../../ReportCard";
import ProductsTable from "./ProductsTable";
import ProductsPieChart from "./ProductsPieChart";
import ProductsAreaChart from "./ProductsAreaChart";

export default function ProductsReport({ setReport }) {
  const { productsData } = useProductsData();
  return (
    <section className="w-full h-full flex flex-col gap-2 animate-blurUp">
      <ReportsTopSection setReport={setReport} />

      {productsData.map((item) => (
        <ReportsContainer
          reportsName={"Productos"}
          reportsDate={"16 De Marzo - 23 De Marzo 2025"}
        >
          {/* Cards o KPIs principales */}
          <KpisContainer
            firstKpiName={"Total productos"}
            firstKpiValue={item.total_products}
            secondKpiName={"Recientes"}
            secondKpiValue={item.recent_products}
            thirdKpiName={"En garantía"}
            thirdKpiValue={item.warranties_products}
            fourthKpiName={"En salidas"}
            fourthKpiValue={item.transformations_products}
          />

          <ReportCard name={"Crecimiento Mensual"} colSpan={12}>
            <ProductsAreaChart />
          </ReportCard>

          <ReportCard name={"Distribución"} colSpan={4}>
            <ProductsPieChart />
          </ReportCard>

          <TableCard tableTitle={"Productos recientes"}>
            <ProductsTable />
          </TableCard>
        </ReportsContainer>
      ))}
    </section>
  );
}
