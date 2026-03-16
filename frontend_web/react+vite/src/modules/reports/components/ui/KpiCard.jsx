export default function KpiCard({ name, metricValue, percentValue }) {
  return (
    <section
      className="flex flex-col pt-2 pl-4 row-span-1 col-span-3 bg-[#eff6ff81]
        shadow-md border border-gray-200 rounded-xl transition duration-500
        hover:bg-gray-200 hover:scale-[1.02]
        dark:bg-[#0f0f11] dark:border-transparent dark:shadow-[0px_0px_10px_2px_#0f0f11] dark:hover:bg-[#2c2c2e] dark:text-white"
    >
      <section className="flex flex-col items-start justify-between">
        <span className="text-sm"> {name} </span>
        <span className="pt-1 text-5xl font-medium">{metricValue}</span>
        <span>{percentValue}</span>
      </section>
    </section>
  );
}
