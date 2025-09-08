import { headerIcons } from "../assets/icons/headerIcons";

export default function SearchBar(){
    return(
        <div className="flex px-2 py-2 w-[40%] border border-gray-300 rounded-3xl">
            <input 
            id="search-text"
            type="text" 
            placeholder="Buscar" 
            className="w-[95%] py-2 px-5 rounded-xl outline-none
            placeholder:text-[15px] placeholder:text-gray-500"/>
            <button>
                <img src={headerIcons.searchIcon} alt="Lens Icon" />
            </button>
        </div>
    );
}