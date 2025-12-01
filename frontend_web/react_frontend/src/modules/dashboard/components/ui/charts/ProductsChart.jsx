import TopChartsCard from "../TopChartsCard";
import SeeReportButton from "../SeeReportButton";
import { useProductChart } from "../../../hooks/useProductChart";

export default function ProductsChart() {
  const { productChartInfo, loading, error } = useProductChart();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <TopChartsCard background={"products-background"}>
      <section>
        <section className="flex items-center justify-between">
          <span className="font-medium text-xl">Productos Totales</span>
          <SeeReportButton />
        </section>
        {productChartInfo.map((item) => (
          <div className="flex items-center gap-1" key={item.products}>
            {/* Productos Totales */}
            <span className="font-semibold text-2xl">{item.products}</span>
            {/* Products que entraton en el mes actual */}
            <span className="font-medium text-base text-[#00a86b]">
              +{item.new_products}
            </span>
          </div>
        ))}
      </section>
    </TopChartsCard>
  );
}
