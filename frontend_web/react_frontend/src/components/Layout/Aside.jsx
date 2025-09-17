import { NavLink } from "react-router-dom";
import { avatarItem, firstSectionItems, secondSectionItems } from "../../constants/asideMenuItems";

// Menú lateral principal de opciones
export default function Aside(){
    return(
        <aside className="row-span-2 px-5 py-5">
            {/* Primera Sección */}
            <header className="flex min-w-max gap-3 p-[0_1rem] justify-center items-center">
                <button className="w-[50px] h-[50px]">
                    <img 
                    src={avatarItem.icon} 
                    alt={avatarItem.alt} 
                    className="w-full h-full" />
                </button>
                <section className="hidden xl:block text-center">
                    <p className="font-bold"> Agustín Perez </p>
                    <p className="font-medium"> Administrador </p>
                </section>
            </header>
            {/* Segunda Sección */}
            <nav className="py-4">
                <ul className="flex flex-col gap-[3px] overflow-hidden">
                    {/* Esto lo que hace es recorrer la constante y traer los datos uno a uno e ir creando un li para cada uno */}
                    {firstSectionItems.map((item) => (
                    <li 
                    key={item.name} 
                    className="rounded-xl hover:bg-gray-200 transition duration-400">
                        <NavLink
                            to={item.path}
                            className={({isActive}) =>
                                isActive
                                ? "py-2.5 px-5 flex gap-3.5 items-center justify-center xl:justify-start brightness-200 bg-black rounded-xl text-gray-400 font-medium shadow-[0px_0px_32px_-9px_#000000]"
                                : "py-2.5 px-5 flex gap-3.5 items-center justify-center xl:justify-start text-gray-400 "
                            }
                        >
                            <img
                            src={item.icon}
                            alt={item.alt}
                            className="w-[25px] h-[25px]"/>
                            <p className="hidden text-base xl:block">{item.name}</p>
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
                    {secondSectionItems.map((item, index) => (
                    <li 
                    key={index} 
                    className="rounded-lg hover:bg-gray-300 transition duration-300">
                        <NavLink
                            to={item.path}
                            className={({isActive}) =>
                                isActive
                                ? "py-2.5 px-5 flex gap-3.5 items-center justify-center xl:justify-start brightness-200 bg-black rounded-xl text-gray-400 font-medium shadow-[0px_0px_32px_-9px_#000000]"
                                : "py-2.5 px-5 flex gap-3.5 items-center justify-center xl:justify-start text-gray-400"
                            }
                        >
                            <img 
                            src={item.icon} 
                            alt={item.alt} 
                            className="w-[25px] h-[25px]"/>
                            <span 
                            className="hidden text-gray-400 text-base xl:block">{item.name}</span>
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </nav>
        </aside>
    );
}