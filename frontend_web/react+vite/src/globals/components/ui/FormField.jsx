export default function FormField({
  value,
  labelText,
  defaultValue,
  id,
  type = "text",
  placeholder,
  onChange,
  name,
  autoComplete = "",
}) {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor={id} className="self-start text-sm dark:text-white">
        {labelText}
      </label>
      <input
        name={name}
        onChange={onChange}
        value={value}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        id={id}
        className="w-full px-6 py-3 text-sm rounded-xl outline-none border bg-slate-50
              dark:bg-transparent dark:border-[#101012] dark:text-white"
        autoComplete={autoComplete}
      />
    </div>
  );
}
