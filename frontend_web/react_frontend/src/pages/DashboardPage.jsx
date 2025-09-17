import { dashboardIcons } from "../assets/icons/mainIcons";
import Layout from "../components/Layout/Layout";
import ChartCard from "../components/ui/ChartCard";

export default function DashBoardPage(){
    return(
        <Layout>
            <h1 className="font-medium"> Panel De Control </h1>
            {/* Container de los gráficos */}
            <section className="grid min-h-full max-h-full p-2 transition duration-300 ease-in-out
            xl:grid-cols-12 xl:grid-rows-5
            sm:grid-cols-1 sm:grid-rows-4 gap-5">
                {/* Primera Fila de Gráficos */}
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={'#434341'}
                textColor={'white'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={'#434341'}
                textColor={'white'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={'#434341'}
                textColor={'white'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={'#434341'}
                textColor={'white'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />

                {/* Segunda Fila de Gráficos */}
                <ChartCard
                rowSpan = {2}
                colSpan = {6}
                bgColor={'[#434341]'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.secondChart}
                />
                <ChartCard
                rowSpan = {2}
                colSpan = {6}
                bgColor={'[#f3eef5]'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.secondChart}
                />

                {/* Tercera fila de Gráficos */}
                <ChartCard
                rowSpan = {2}
                colSpan = {4}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.thirdChart}
                />
                <ChartCard
                rowSpan = {2}
                colSpan = {4}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.thirdChart}
                />
                <ChartCard
                rowSpan = {2}
                colSpan = {4}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.thirdChart}
                />

            </section>
        </Layout>
    );
}