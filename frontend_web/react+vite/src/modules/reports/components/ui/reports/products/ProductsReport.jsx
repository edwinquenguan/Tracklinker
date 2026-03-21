import ReturnButton from "../../ReturnButton";

export default function ProductsReport({ setReport, setTopSectionVisiblity }) {
  setTopSectionVisiblity(false);
  return (
    <section className="w-full h-full flex flex-col gap-2 animate-blurUp">
      <section className="flex items-center justify-between pl-3">
        <ReturnButton onClick={() => setReport("home")} />
        <div className="flex items-center justify-end gap-1.5 pr-3">
          <button className="px-4 py-1.5 bg-gray-100 rounded-xl shadow-xl">
            7d
          </button>
          <button className="px-4 py-1.5 border rounded-xl shadow-md">
            30d
          </button>
          <button className="px-4 py-1.5 border rounded-xl shadow-md">
            6m
          </button>
          <button className="px-4 py-1.5 border rounded-xl shadow-md">
            1a
          </button>
        </div>
      </section>
      <section
        className="h-[91%] w-full grid p-3 pt-2 gap-3
                      xl:grid-cols-12 xl:grid-rows-7"
      ></section>
    </section>
  );
}
