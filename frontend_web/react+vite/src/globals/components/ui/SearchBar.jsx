import { headerIcons } from "../../../assets/icons/headerIcons";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="flex px-2 w-[40%] border border-gray-300 rounded-3xl dark:border-[#37415173]">
      <input
        id="search-text"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar"
        className="w-[95%] py-2.5 px-5 rounded-xl outline-none
            placeholder:text-[15px] placeholder:text-gray-500
            dark:bg-black dark:placeholder-text-gray-700 dark:text-white"
      />
      <button>
        <img
          src={headerIcons.searchIcon}
          alt="Lens Icon"
          className="dark:brightness-200"
        />
      </button>
    </div>
  );
}
