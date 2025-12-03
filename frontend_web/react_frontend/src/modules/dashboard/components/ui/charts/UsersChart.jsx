import TopChartsCard from "../TopChartsCard";
import SeeReportButton from "../SeeReportButton";
import { useUsersChart } from "../../../hooks/useUsersChart";

export default function UsersChart() {
  const { usersChartInfo, loading, error } = useUsersChart();

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <TopChartsCard background={"users-background"}>
      <section>
        <section className="flex items-center justify-between">
          {/* Nombre del Grafico */}
          <span className="font-medium text-xl">Usuarios</span>
          <SeeReportButton />
        </section>
        {usersChartInfo.map((item) => (
          <div className="flex items-center gap-1" key={item.users}>
            {/* Usuarios existentes */}
            <span className="font-semibold text-2xl">{item.users}</span>
            {/* Usuarios creados en el mes actual */}
            <span className="font-medium text-base text-[#00a86b]">
              +{item.new_users}
            </span>
          </div>
        ))}
      </section>
    </TopChartsCard>
  );
}
