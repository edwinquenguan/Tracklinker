import TopChartsCard from "../TopChartsCard";
import SeeReportButton from "../SeeReportButton";
import { useOutputOrdersChart } from "../../../hooks/useOutputOrdersChart";

export default function OutputOrdersChart() {
  const { orders, loading, error } = useOutputOrdersChart();
  return (
    <TopChartsCard background={"output-orders-background"}>
      <section>
        <section className="flex items-center justify-between">
          {/* Nombre del Grafico */}
          <span className="font-medium text-xl">Ordenes de salida</span>
          <SeeReportButton />
        </section>
        {orders.map((item) => (
          <div className="flex items-center gap-1" key={item.orders}>
            {/* Usuarios existentes */}
            <span className="font-semibold text-2xl">{item.orders}</span>
            {/* Usuarios creados en el mes actual */}
            <span className="font-medium text-base text-[#00a86b]">
              +{item.new_orders}
            </span>
          </div>
        ))}
      </section>
    </TopChartsCard>
  );
}
