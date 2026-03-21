export default function SelectMenu({
  id,
  name,
  onChange,
  value,
  defaultValue,
  spanText,
  children,
  addIcon,
  addIconFunction,
  addButtonInvisible = true,
}) {
  return (
    <section className={`w-full flex flex-col gap-1`}>
      <span className="text-sm dark:text-white">{spanText}</span>
      <div className="w-full flex items-center gap-1.5">
        <div
          className="w-full h-11 px-2 border border-[#a1a1a131] bg-[#e5e5e527] rounded-lg
        dark:border-[#ffffff15] dark:bg-[#ffffff10] dark:text-[#a1a1a1]"
        >
          <select
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            name={name}
            id={id}
            className="h-full w-full outline-none bg-transparent"
          >
            {children}
          </select>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (addIconFunction) addIconFunction(e);
          }}
          disabled={addButtonInvisible}
          type="button"
          className={`${addButtonInvisible ? "hidden" : "opacity-100"} w-12 h-11 flex items-center justify-center border rounded-xl
              dark:invert`}
        >
          <img src={addIcon} className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}
