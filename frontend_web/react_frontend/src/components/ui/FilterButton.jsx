import { actionsIcons } from "../../assets/icons/mainIcons";

export default function FilterButton(){
    return(
        <button className="flex items-center px-5 py-2.5 gap-2 shadow-[0px_0px_32px_5px_#efedf0] rounded-3xl bg-[#efedf0] transition duration-500
        dark:bg-[#202022] dark:shadow-none dark:hover:shadow-[10px_0px_32px_-5px_#202022]
        hover:shadow-2xl">
            <img src={actionsIcons.filterIcon} alt="" className="w-6 h-6 dark:invert-[.7]"/>
                <p className="text-base font-medium dark:text-gray-300"> Filtrar </p> 
        </button>
    );
}