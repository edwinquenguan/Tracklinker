import FilterButton from "./FilterButton";
import CreateButton from "./CreateButton";

export default function TopSection({
  sectionName,
  rangeDate = false,
  addButtonIcon,
  addButtonText,
  children,
  filterOnClick,
  filterButton = true,
  createOnClick,
}) {
  return (
    <section className="flex items-center justify-between px-2 pb-3">
      <div className="flex flex-col">
        <h1 className="font-medium dark:text-white">{sectionName}</h1>
        <span className={`${rangeDate ? "block" : "hidden"} text-xs animate-blurUp`}>
          {rangeDate}
        </span>
      </div>
      <section className="flex gap-4">
        {children}
        <FilterButton
          onClick={filterOnClick}
          filterButtonVisibility={filterButton}
        />
        <CreateButton
          icon={addButtonIcon}
          text={addButtonText}
          onClick={createOnClick}
        />
      </section>
    </section>
  );
}
