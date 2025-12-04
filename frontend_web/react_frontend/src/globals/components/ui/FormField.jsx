export default function FormField({
  value,
  labelText,
  inputIcon,
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
      <div
        className="flex justify-between border pl-1.5 
            dark:bg-[#2020226c] dark:border-[#101012]"
      >
        <img
          src={inputIcon}
          alt=""
          className="invert brightness-200 dark:brightness-0"
        />
        <input
          name={name}
          onChange={onChange}
          value={value}
          type={type}
          placeholder={placeholder}
          id={id}
          className="px-6 py-3 text-sm rounded-md outline-none
                dark:bg-transparent dark:border-[#101012] dark:text-white"
          autoComplete={autoComplete}
        />
      </div>
    </div>
  );
}
