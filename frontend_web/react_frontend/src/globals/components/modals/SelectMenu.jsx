export default function SelectMenu({
  id,
  name,
  onChange,
  value,
  width,
  defaultValue,
  spanText,
  children,
}) {
  return (
    <section className={`flex flex-col px-2 gap-1 w-${width}`}>
      <span className="text-sm dark:text-white">{spanText}</span>
      <select
        defaultValue={defaultValue}
        value={value}
        onChange={onChange}
        name={name}
        id={id}
        className="h-12 p-2 border outline-none
            dark:bg-[#2020226c] dark:border-[#101012] dark:text-white"
      >
        {children}
      </select>
    </section>
  );
}
