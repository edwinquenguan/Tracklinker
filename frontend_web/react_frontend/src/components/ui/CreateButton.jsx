export default function CreateButton({icon, text}){
    return(
        <button className="flex items-center px-6 py-3 gap-2 bg-black rounded-3xl 
        dark:bg-white shadow-md"> 
            <img src={icon} alt="" className="w-6 h-6 brightness-100"/>
            <p className="text-base text-white font-medium dark:text-black"> {text} </p>
        </button>
    );
}