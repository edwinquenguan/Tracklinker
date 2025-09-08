import { headerIcons } from "../../assets/icons/headerIcons";
import SearchBar from "../SearchBar";

export default function Header(){
    return(
        <header className="flex justify-between content-center p-4 border-b-[1px]">
            <SearchBar />
            <button>
                <img src={headerIcons.bellIcon} alt="" className="w-[23px] h-full" />
            </button>
        </header>
    );
}