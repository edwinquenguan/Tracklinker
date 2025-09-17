import { NavLink } from "react-router-dom";

export default function ChartCard({name, percentValue, metricValue, chart, rowSpan, colSpan, bgColor, textColor}){
    return(
        <section className={`row-span-${rowSpan} col-span-${colSpan} bg-${bgColor} text-${textColor}
        p-2 shadow-xl border border-gray-200 rounded-xl`}>
            <p className="font-medium text-base "> {name} </p>
            <p className="text-xl font-bold">{metricValue}</p>
            <p>{percentValue}</p>
            <img src={chart} alt="" />
            <NavLink
            to="/reports">
                See report
            </NavLink>
        </section>
    );
}