import ReturnButton from "./ReturnButton";
import ExportButton from "./ExportButton";

export default function ReportsTopSection({
  setReport,
  sevenDaysOnclick,
  thirtyDaysOnclick,
  sixMonthsOnClick,
  oneYearOnClick,
}) {
  return (
    <section className="flex items-center justify-between pl-3 dark:text-white">
      <ReturnButton onClick={() => setReport("home")} />
      <div className="flex items-center justify-end gap-1.5 pr-3">
        <div
          className="flex gap-1 py-0.5 px-1 border rounded-xl text-sm font-medium bg-gray-200 
                  dark:bg-gray-950 dark:border-neutral-800 "
        >
          <button
            onClick={sevenDaysOnclick}
            className="px-4 py-1.5 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            7d
          </button>
          <button
            onClick={thirtyDaysOnclick}
            className="px-4 py-1.5 rounded-xl bg-white shadow-md dark:text-black"
          >
            30d
          </button>
          <button
            onClick={sixMonthsOnClick}
            className="px-4 py-1.5 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            6m
          </button>
          <button
            onClick={oneYearOnClick}
            className="px-4 py-1.5 rounded-lg hover:bg-gray-300 transition duration-300"
          >
            1a
          </button>
        </div>
        <ExportButton />
      </div>
    </section>
  );
}
