import { actionsIcons } from "../../../../assets/icons/mainIcons";

export default function ReturnButton({ onClick }) {
  return (
    <button
      className="flex items-center gap-1 px-3.5 py-1.5 border rounded-md shadow-md
      dark:text-white dark:border-[#9490902d]"
      onClick={onClick}
    >
      <img
        src={actionsIcons.arrowBack}
        alt=""
        className="w-5 h-5 dark:invert"
      />
      <span className="text-sm">Volver</span>
    </button>
  );
}
