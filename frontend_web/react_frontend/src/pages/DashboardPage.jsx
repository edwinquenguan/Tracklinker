import Layout from "../components/Layout/Layout";
import { NavLink } from "react-router-dom";
import { dashboardIcons } from "../assets/icons/mainIcons";

export default function DashBoardPage(){
    return(
        <Layout>
            <h1 className="font-medium"> Panel  De Control </h1>
            {/* Container de los gráficos */}
            <section className="grid min-h-full max-h-full p-1 pt-6 overflow-x-auto overflow-y-auto xl:grid-cols-[55%_45%] xl:grid-rows-2
            sm:grid-cols-1 sm:grid-rows-4">

                {/* Primer Gráfico */}
                <section className="pr-5 border-b border-r border-gray-300">
                    <section className="flex justify-between">
                        <p className="font-medium"> Ganancias </p>
                        <NavLink
                        to="/reports"
                        className="p-2 rounded-md border text-blue-600 text-sm">
                            Ver Informe
                        </NavLink>
                    </section>
                    <p className="text-2xl font-bold"> COP $7.852.000 </p>
                    <section className="flex gap-2">
                        <img src={dashboardIcons.arrowUp} alt="" />
                        <p> 
                            2.1% vs Semana Pasada
                        </p>
                    </section>
                    <p className="pt-5">
                        Ventas Desde 1-12 Dic, 2025
                    </p>
                    <img src={dashboardIcons.firstChart} alt="" className="pt-5" />
                    <section className="flex gap-5 pt-4">
                        <p className="flex gap-2">
                            <img src={dashboardIcons.grayCircle} alt="" />
                            Últimos 6 días
                        </p>
                        <p className="flex gap-2"> 
                            <img src={dashboardIcons.purpleCircle} alt="" />
                            Semana Pasada
                        </p>
                    </section>
                </section>

                {/* Segundo Gráfico */}
                <section className="pl-10 p-2 border-b border-gray-300">
                    <section className="flex justify-between">
                        <p className="font-medium"> Tiempos de Entrega </p>
                        <NavLink 
                        to="/reports"
                        className="p-2 rounded-md border text-blue-600 text-sm">
                            Ver Informe
                        </NavLink>
                    </section>
                    <p> Desde 1-16 Dic, 2025 </p>
                    <img src={dashboardIcons.secondChart} alt="" className="pt-10 place-self-center" />
                    <section className="flex justify-between pt-5">
                        <p className="flex text-center gap-2">
                            <img src={dashboardIcons.purpleCircle} alt="" />
                            Tarde
                            <br />
                            40%
                        </p>
                        <p className="flex gap-2">
                            <img src={dashboardIcons.lightPurpleCircle} alt="" />
                            Noche
                            <br />
                            32%
                        </p>
                        <p className="flex gap-2">
                            <img src={dashboardIcons.grayCircle} alt="" />
                            Mañana
                            <br />
                            28%
                        </p>
                    </section>
                </section>

                {/* Tercer Gráfico */}
                <section className="p-5 border-r border-gray-300">
                    <section className="flex justify-between">
                        <p className="font-medium"> Contenido </p>
                        <NavLink
                        to="/reports"
                        className="p-2 rounded-md border text-blue-600 text-sm">
                            Ver Informe
                        </NavLink>
                    </section>
                    <p className="text-3xl font-bold"> 0.000 </p>
                    <section className="flex gap-2">
                        <img src={dashboardIcons.arrowUp} alt="" />
                        <p> 
                            2.1% Contenido
                        </p>
                    </section>
                    <p>
                        Contenido
                    </p>
                    <img src={dashboardIcons.thirdChart} alt="" className="place-self-center" />
                    <section className="flex gap-5 pt-8">
                        <p className="flex gap-2">
                            <img src={dashboardIcons.grayCircle} alt="" />
                            Contenido
                        </p>
                        <p className="flex gap-2"> 
                            <img src={dashboardIcons.purpleCircle} alt="" />
                            Contenido
                        </p>
                    </section>
                </section>

                {/* Cuarto Gráfico */}
                <section className="pl-10 p-5">
                    <section className="flex justify-between">
                        <p className="font-medium"> Ordenes </p>
                        <NavLink
                        to="/reports"
                        className="p-2 rounded-md border text-blue-600 text-sm">
                            Ver Informe
                        </NavLink>
                    </section>
                    <p className="text-3xl font-bold"> 2.568 </p>
                    <section className="flex gap-2">
                        <img src={dashboardIcons.arrowDown} alt="" />
                        <p> 2.1% vs Semana Pasada </p>
                    </section>
                    <p> Ventas Desde 1-6 Dic, 2025 </p>
                    <img src={dashboardIcons.fourthChart} alt="" />
                    <section className="flex gap-5 pt-8">
                        <p className="flex gap-2">
                            <img src={dashboardIcons.grayCircle} alt="" />
                            Últimos 6 días
                        </p>
                        <p className="flex gap-2"> 
                            <img src={dashboardIcons.purpleCircle} alt="" />
                            Semana Pasada
                        </p>
                    </section>
                </section>
            </section>
        </Layout>
    );
}