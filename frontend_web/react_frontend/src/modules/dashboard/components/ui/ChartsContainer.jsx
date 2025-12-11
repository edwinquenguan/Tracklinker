// Iconos
import { dashboardIcons } from "../../../../assets/icons/mainIcons";
// Gráficos
import UsersChart from "./charts/UsersChart";
import SimpleAreaChart from "./charts/SimpleAreaChart";
import ChartCard from "./ChartCard";
import SimpleBarChart from "./charts/SimpleBarChart";
import SimplePieChart from "./charts/SimplePieChart";
import ProductsChart from "./charts/ProductsChart";
import BrandsChart from "./charts/BrandsCharts";

export default function ChartsContainer() {
  return (
    <section
      className="grid max-h-[95%] p-2 transition duration-300 ease-in-out
            xl:grid-cols-12 xl:grid-rows-5
            sm:grid-cols-1 sm:grid-rows-4 gap-5"
    >
      {/* Primera Fila de Gráficos */}
      <UsersChart />
      <ProductsChart />
      <ChartCard
        rowSpan={1}
        colSpan={3}
        bgColor={""}
        textColor={"black"}
        name={"Chart"}
        metricValue={"2.000"}
        percentValue={"2.1%"}
        chart={dashboardIcons.firstChart}
      />
      <ChartCard
        rowSpan={1}
        colSpan={3}
        bgColor={""}
        textColor={"black"}
        name={"Chart"}
        metricValue={"2.000"}
        percentValue={"2.1%"}
        chart={dashboardIcons.firstChart}
      />
      {/* Segunda Fila de Gráficos */}
      <SimpleAreaChart />
      <BrandsChart />
      <SimplePieChart />
      {/* Tercera fila de Gráficos */}
      <ChartCard
        rowSpan={2}
        colSpan={5}
        name={"Chart"}
        metricValue={"2.000"}
        percentValue={"2.1%"}
        chart={dashboardIcons.waveChart}
        imageSize={"w-full h-[80%]"}
      />
      <SimpleBarChart />
    </section>
  );
}
