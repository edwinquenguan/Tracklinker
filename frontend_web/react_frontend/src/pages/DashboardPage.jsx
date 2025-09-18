import { dashboardIcons } from "../assets/icons/mainIcons";
import { actionsIcons } from "../assets/icons/mainIcons";
import Layout from "../components/Layout/Layout";
import ChartCard from "../components/ui/ChartCard";
import TopSection from "../components/ui/TopSection";

export default function DashBoardPage(){
    return(
        <Layout>
            <TopSection 
            sectionName={"Panel De Control"}
            addButtonIcon={actionsIcons.uploadIcon}
            addButtonText={"Descargar"}
            />
            {/* Container de los gráficos */}
            <section className="grid max-h-[95%] p-2 transition duration-300 ease-in-out
            xl:grid-cols-12 xl:grid-rows-5
            sm:grid-cols-1 sm:grid-rows-4 gap-5">
                {/* Primera Fila de Gráficos */}
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />
                <ChartCard
                rowSpan = {1}
                colSpan = {3}
                bgColor={''}
                textColor={'black'}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.firstChart}
                />

                {/* Segunda Fila de Gráficos */}
                <ChartCard
                rowSpan = {2}
                colSpan = {6}
                bgColor={''}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.waveChart2}
                />
                <ChartCard
                rowSpan = {2}
                colSpan = {3}
                bgColor={''}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.barChart2}
                />
                <ChartCard
                rowSpan = {4}
                colSpan = {3}
                bgColor={''}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.barChart}
                imageSize={"w-full h-[90%]"}
                />

                {/* Tercera fila de Gráficos */}
                <ChartCard
                rowSpan = {2}
                colSpan = {5}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.waveChart}
                imageSize={"w-full h-[80%]"}
                />
                <ChartCard
                rowSpan = {2}
                colSpan = {4}
                name = {"Chart"}
                metricValue = {"2.000"}
                percentValue={"2.1%"}
                chart={dashboardIcons.thirdChart}
                imageSize={"w-full h-[80%]"}
                />

            </section>
        </Layout>
    );
}