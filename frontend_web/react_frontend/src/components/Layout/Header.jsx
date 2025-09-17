import { headerIcons } from "../../assets/icons/headerIcons";
import SearchBar from "../ui/SearchBar";

export default function Header(){
    return(
        <header className="flex justify-between content-center p-[6px_20px_5px_150px] border-b-[1px] 
        dark:bg-black dark:border-0">
            <SearchBar />
            <button>
                <img src={headerIcons.bellIcon} alt="" className="w-[23px] h-[23px] transition duration-300
            hover:scale-[1.2]"/>
            </button>
        </header>
    );
}