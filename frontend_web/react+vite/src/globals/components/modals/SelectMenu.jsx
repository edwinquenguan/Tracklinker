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
  addButtonInvisible = true
}) {
  return (
    <section className={`flex flex-col gap-1 w-full`}>
      <span className="text-sm dark:text-white">{spanText}</span>
      <div className="w-full flex items-center gap-1.5">
        <select
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          name={name}
          id={id}
          className="h-12 w-full px-4 border outline-none rounded-xl bg-slate-50
              dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"
        >
          {children}
        </select>
        <button
          onClick={(e) => {
            e.stopPropagation();
            if (addIconFunction) addIconFunction(e);
          }}
          disabled={addButtonInvisible}
          type="button"
          className={`w-6 h-6 invert dark:invert-0 ${addButtonInvisible ? "hidden" : "opacity-100"}`}
        >
          <img src={addIcon} />
        </button>
      </div>
    </section>
  );
}
