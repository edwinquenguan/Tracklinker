import { NavLink } from "react-router-dom";

export default function ChartCard({name, percentValue, metricValue, chart, rowSpan, colSpan, bgColor, textColor, imageSize}){
    return(
        <section className={`row-span-${rowSpan} col-span-${colSpan} bg-${bgColor} text-${textColor} dark:text-white
        flex flex-col p-3 shadow-xl border border-gray-200 rounded-xl transition duration-500
        hover:bg-gray-200 hover:scale-105
        `}>
            <div className="flex items-start justify-between">
                <div>
                    <p className="font-medium text-base"> {name} </p>
                    <div className="flex items-center gap-2">
                        <p className="text-xl font-bold">{metricValue}</p>
                        <p>{percentValue}</p>
                    </div>
                </div>
                <NavLink
                to="/reports"
                className="p-2 rounded-lg text-sm border transition duration-500 hover:bg-gray-300"
                >
                    Ver Informe
                </NavLink>
            </div>
            <img src={chart} alt="" className={`${imageSize}`}/>
        </section>
    );
}