export default function CreateButton({
  icon,
  text,
  onClick,
  createButtonVisibility = true,
}) {
  return (
    <button
      className={`flex items-center px-5 py-2.5 gap-2 bg-black rounded-3xl transition duration-500 ${createButtonVisibility ? "block" : "hidden"}
        dark:bg-white shadow-[0px_0px_32px_-12px_#000000]
        hover:shadow-[0px_0px_32px_-6px_#000000]
        dark:hover:shadow-[0px_0px_32px_-11px_#ffffff]`}
      onClick={onClick}
    >
      <img
        src={icon}
        alt=""
        className="w-6 h-6 invert brightness-0 dark:brightness-200 dark:invert-0"
      />
      <p className="text-base text-white font-medium dark:text-black">
        {" "}
        {text}{" "}
      </p>
    </button>
  );
}
