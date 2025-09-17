import { headerIcons } from "../../assets/icons/headerIcons";

export default function SearchBar(){
    return(
        <div className="flex px-2 py-2 w-[40%] border border-gray-300 rounded-3xl dark:border-gray-800">
            <input 
            id="search-text"
            type="text" 
            placeholder="Buscar" 
            className="w-[95%] py-2 px-5 rounded-xl outline-none
            placeholder:text-[15px] placeholder:text-gray-500
            dark:bg-black dark:placeholder-white dark:text-white"/>
            <button>
                <img src={headerIcons.searchIcon} alt="Lens Icon" className="dark:brightness-200" />
            </button>
        </div>
    );
}