import { actionsIcons } from "../../assets/icons/mainIcons";

export default function FilterButton(){
    return(
        <button className="flex items-center px-5 py-2.5 gap-2 bg-gray-200 shadow-md rounded-3xl">
            <img src={actionsIcons.filterIcon} alt="" className="w-6 h-6"/>
                <p className="text-base font-medium"> Filtrar </p> 
        </button>
    );
}