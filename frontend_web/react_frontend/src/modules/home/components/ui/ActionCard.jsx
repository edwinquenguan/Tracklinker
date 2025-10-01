import { NavLink } from "react-router-dom";

export default function ActionCard({itemName, itemPath, itemIcon, itemAlt}){
    return(
        <section>
            {/* Card de cada modulo */}
            <NavLink
            to={itemName}
            key={itemName}
            className="flex flex-col h-40 w-32 place-items-center gap-2 transition duration-300
            hover:scale-[1.1]"
            >
                <section className="h-32 w-32 rounded-xl bg-[#eae8eb] content-center justify-items-center
                dark:bg-[#101012]">
                    <img src={itemIcon} alt={itemAlt} className="w-12 dark:brightness-[.2] dark:invert"/>
                </section>
                <p className="text-base font-medium text-center dark:text-white">{itemName}</p>
            </NavLink>
        </section>
    );
}