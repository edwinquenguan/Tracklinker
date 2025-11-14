import { NavLink } from "react-router-dom";

export default function ChartCard({
  name,
  percentValue,
  metricValue,
  chart,
  rowSpan,
  colSpan,
  bgColor,
  textColor,
  imageSize,
  children,
}) {
  return (
    <section
      className={`row-span-${rowSpan} col-span-${colSpan} bg-${bgColor} text-${textColor} dark:text-white
        flex flex-col p-3 shadow-xl border border-gray-200 rounded-xl transition duration-500
        hover:bg-gray-200 hover:scale-105
        dark:bg-[#0f0f11] dark:border-transparent dark:shadow-[0px_0px_10px_2px_#0f0f11] dark:hover:bg-[#2c2c2e]
        `}
    >
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
          className="p-2 rounded-lg text-sm border transition duration-500 
                hover:bg-gray-300
                dark:shadow-[0px_0px_10px_2px_#0f0f11] dark:border-transparent dark:hover:bg-[#0f0f11]"
        >
          Ver Informe
        </NavLink>
      </div>
      <img src={chart} alt="" className={`${imageSize}`} />
      {children}
    </section>
  );
}
