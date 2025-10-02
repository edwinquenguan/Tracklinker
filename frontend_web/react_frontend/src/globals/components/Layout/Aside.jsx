import { NavLink } from "react-router-dom";
import { avatarItem, firstSectionItems, extendedSectionItems, secondSectionItems } from "../../../constants/asideMenuItems";

// Menú lateral principal de opciones
export default function Aside({avatarOnClick}){
    return(
        <aside className="flex px-2 py-3 order-2 overflow-hidden
        dark:bg-black
        md:flex-col md:order-1 md:px-5 md:py-5
        xl:flex-col xl:row-span-2 xl:px-5 xl:py-5 xl:order-1
        ">
            {/* Primera Sección */}
            <header className="min-w-max flex justify-center items-center gap-3 p-[0_1rem] order-3 dark:text-white
            xl:order-1 md:order-1">
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
            {/* Menús de opciones */}
            <section className="flex flex-col gap-1 order-1">
                {/* Segunda Sección */}
                <nav className="flex p-0
                md:pt-4
                xl:pt-4">
                    <ul className="min-w-full flex gap-[3px]
                    md:flex-col
                    xl:flex-col">
                        {/* Esto lo que hace es recorrer la constante y traer los datos uno a uno e ir creando un li para cada uno */}
                        {firstSectionItems.map((item) => (
                        <li 
                        key={item.name} 
                        className="rounded-xl dark:hover:bg-gray-950">
                            <NavLink
                                to={item.path}
                            >
                            {({isActive}) => (
                                <section className={`w-auto h-14 flex flex-col py-2.5 px-5 items-center justify-center subpixel-antialiased rounded-xl transition duration-300
                                md:w-full md:h-full md:py-3 md:px-7
                                xl:w-full xl:h-full xl:flex-row xl:py-2.5 xl:px-5 xl:gap-3.5 xl:justify-start
                                    ${isActive
                                    ? `bg-black font-medium shadow-[0px_0px_32px_-9px_#000000] text-white
                                    dark:bg-white dark:text-black dark:shadow-[0px_0px_32px_-11px_#ffffff] animate-slideIn`
                                    : `text-[#7e8088] 
                                    hover:bg-gray-200
                                    dark:text-gray-500 font-normal`}`}>
                                    <img
                                    src={item.icon}
                                    alt={item.alt}
                                    className={` w-[25px] h-[25px]
                                        ${isActive
                                            ? "invert brightness-0 stroke-none"
                                            : ""
                                        }`}/>
                                    <div className="flex gap-1">
                                        <span className="text-center text-nowrap text-xs
                                        md:hidden 
                                        xl:block xl:text-base">
                                            {item.name}
                                        </span>
                                        <span className="text-center text-nowrap text-xs hidden
                                        xl:block xl:text-base">
                                            {item.nameTwo}
                                        </span>
                                    </div>
                                </section>
                            )}
                            </NavLink>
                        </li>
                        ))}
                    </ul>
                </nav>
                <section className="hidden
                md:block
                lg:block
                xl:block">
                    {/* Segunda sección extendida */}
                    <nav>
                        <ul>
                        {extendedSectionItems.map((item) => (
                            <NavLink
                                to={item.path}
                            >
                            {({isActive}) => (
                                <section className={`w-20 h-14 flex flex-col py-2.5 px-5 items-center justify-center subpixel-antialiased rounded-xl transition duration-300
                                md:w-full md:h-full md:py-3 md:px-7
                                xl:w-full xl:h-full xl:flex-row xl:py-2.5 xl:px-5 xl:gap-3.5 xl:justify-start
                                    ${isActive
                                    ? `bg-black font-medium shadow-[0px_0px_32px_-9px_#000000] text-white
                                    dark:bg-white dark:text-black dark:shadow-[0px_0px_32px_-11px_#ffffff] animate-slideIn`
                                    : `text-[#7e8088] 
                                    hover:bg-gray-200
                                    dark:text-gray-500 font-normal`}`}>
                                    <img
                                    src={item.icon}
                                    alt={item.alt}
                                    className={` w-[25px] h-[25px]
                                        ${isActive
                                            ? "invert brightness-0 stroke-none"
                                            : ""
                                        }`}/>
                                    <div className="flex gap-1">
                                        <span className="text-center text-nowrap text-xs
                                        md:hidden 
                                        xl:block xl:text-base">
                                            {item.name}
                                        </span>
                                        <span className="text-center text-nowrap text-xs hidden
                                        xl:block xl:text-base">
                                            {item.nameTwo}
                                        </span>
                                    </div>
                                </section>
                            )}
                            </NavLink>
                        ))}
                        </ul>
                    </nav>

                    {/* Tercera Sección */}
                    <nav className="p-0 order-2
                    md:py-4
                    xl:py-4">
                        <p className="text-base py-1 pl-3 text-gray-500 hidden
                        xl:block
                        md:block">
                            Otros
                        </p>
                        <ul className="flex flex-col gap-[3px]">
                            {secondSectionItems.map((item) => (
                            <li 
                            key={item.name} 
                            className="rounded-xl hover:bg-gray-200 transition duration-300 dark:hover:bg-gray-950">
                                <NavLink
                                    to={item.path}
                                    onClick={item.onClick}
                                    className={({isActive}) => 
                                        `w-20 h-14 py-2.5 px-5 flex gap-3.5 items-center justify-center subpixel-antialiased rounded-xl
                                        xl:justify-start xl:w-full xl:h-auto
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
                </section>
            </section>
        </aside>
    );
}