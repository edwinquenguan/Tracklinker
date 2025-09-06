import { NavLink } from "react-router-dom";
import { firstSectionItems, secondSectionItems } from "../../constants/asideMenuItems";

// Menú lateral principal de opciones
export default function Aside(){
    return(
        <aside className="row-span-2">
            {/* Primera Sección */}
            <section className="p-4">
                <img src="../../assets/images/aside/avatar.svg" alt="" />
                <section>
                    <p className="font-medium"> Agustín Perez </p>
                    <p className="text-lg font-semibold"> Administrador </p>
                </section>
            </section>
            {/* Segunda Sección */}
            <section className="p-4">
                <p className="text-3xl">
                    Menú
                </p>
                <ul>
                    {/* Esto lo que hace es recorrer la constante y traer los datos uno a uno e ir creando un li para cada uno */}
                    {firstSectionItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className="flex"
                        >
                            <img src={item.icon} alt={item.alt} className="w-[25px] h-[25px]"/>
                            <p className="text-gray-500 text-base">{item.name}</p>
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </section>
            {/* Tercera Sección */}
            <section className="p-4">
                <p className="text-3xl">
                    Otros
                </p>
                <ul>
                    {secondSectionItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.path}
                            className="flex"
                        >
                            <img src={item.icon} alt={item.alt} className="w-[25px] h-[25px]"/>
                            <span className="text-gray-500">{item.name}</span>
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </section>
        </aside>
    );
}