export default function TableCard({ tableTitle, children }) {
  return (
    <section
      className="row-span-3 col-span-12 bg-white dark:text-white
        flex flex-col p-5 shadow-sm border border-gray-200 rounded-xl transition duration-500
        hover:bg-gray-200 hover:scale-[1.02]
        dark:bg-[#0f0f11] dark:border-transparent dark:shadow-[0px_0px_10px_2px_#0f0f11] dark:hover:bg-[#2c2c2e]"
    >
      <p className="pb-2">{tableTitle}</p>
      {children}
    </section>
  );
}