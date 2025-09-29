import { NavLink } from "react-router-dom";
import { avatarItem, firstSectionItems, secondSectionItems } from "../../../constants/asideMenuItems";

// Menú lateral principal de opciones
export default function Aside({avatarOnClick}){
    return(
        <aside className="px-5 py-5 dark:bg-black
        xl:row-span-2">
            {/* Primera Sección */}
            <header className="flex min-w-max gap-3 p-[0_1rem] justify-center items-center dark:text-white">
                <button 
                onClick={avatarOnClick}
                className="w-[50px] h-[50px]">
                    <img 
                    src={avatarItem.icon} 
                    alt={avatarItem.alt} 
                    className="w-full h-full" />
                </button>
                <section className="hidden xl:block text-center">
                    <p className="font-medium"> Agustín Perez </p>
                    <p className="font-normal"> Administrador </p>
                </section>
            </header>
            {/* Segunda Sección */}
            <nav className="py-4">
                <ul className="flex flex-col gap-[3px]">
                    {/* Esto lo que hace es recorrer la constante y traer los datos uno a uno e ir creando un li para cada uno */}
                    {firstSectionItems.map((item) => (
                    <li 
                    key={item.name} 
                    className="rounded-xl hover:bg-gray-200 transition duration-300 dark:hover:bg-gray-950">
                        <NavLink
                            to={item.path}
                            className={({isActive}) => 
                                `py-2.5 px-5 flex gap-3.5 items-center justify-center xl:justify-start subpixel-antialiased rounded-2xl
                                ${isActive
                                ? "bg-black font-medium shadow-[0px_0px_32px_-9px_#000000] text-white dark:bg-white dark:text-black dark:shadow-[0px_0px_32px_-11px_#ffffff] animate-slideIn"
                                : "text-[#7e8088] dark:text-gray-500 font-normal"
                            }`}
                        >
                            <img
                            src={item.icon}
                            alt={item.alt}
                            className="w-[25px] h-[25px]"/>
                            <span className="hidden text-base xl:block">{item.name}</span>
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </nav>
            {/* Tercera Sección */}
            <nav className="py-4 px-0">
                <p className="text-base py-1 pl-3 text-gray-500">
                    Otros
                </p>
                <ul className="flex flex-col gap-[3px]">
                    {secondSectionItems.map((item) => (
                    <li 
                    key={item.name} 
                    className="rounded-xl hover:bg-gray-200 transition duration-300 dark:hover:bg-gray-950">
                        <NavLink
                            to={item.path}
                            className={({isActive}) => 
                                `py-2.5 px-5 flex gap-3.5 items-center justify-center xl:justify-start subpixel-antialiased rounded-2xl
                                ${isActive
                                ? "bg-black rounded-xl font-semibold shadow-[0px_0px_32px_-9px_#000000] text-white dark:bg-white dark:text-black dark:shadow-[0px_0px_32px_-11px_#ffffff] animate-slideIn"
                                : "text-gray-400 dark:text-gray-500"
                            }`}
                        >
                            <img 
                            src={item.icon} 
                            alt={item.alt} 
                            className="w-[25px] h-[25px]"/>
                            <span 
                            className="hidden text-base xl:block">{item.name}</span>
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}