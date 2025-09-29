import { NavLink } from "react-router-dom";
import { items } from "../../constants/homeCards";

export default function ActionCard(){
    return(
        <section className="min-h-full grid grid-cols-4 grid-rows-2 p-[100px_200px_200px_200px] gap-[20px_12px] place-items-center
        xl:p-[100px_250px_200px_300px]
        lg:p-[100px_150px_200px_150px]
        md:p-[50px]">
            {/* Card de cada modulo */}
            {items.map(item => (
            <NavLink
            to={item.path}
            key={item.name}
            className="flex flex-col h-40 w-32 place-items-center gap-2 transition duration-300
            hover:scale-[1.1]"
            >
                <section className="h-32 w-32 rounded-xl bg-[#eae8eb] content-center justify-items-center
                dark:bg-[#101012]">
                    <img src={item.icon} alt={item.alt} className="w-12 dark:brightness-[.2] dark:invert"/>
                </section>
                <p className="text-base font-medium text-center dark:text-white">{item.name}</p>
            </NavLink>
            ))}
        </section>
    );
}