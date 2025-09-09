import { NavLink } from "react-router-dom";
import { items } from "../../constants/homeCards";

export default function ActionCard(){
    return(
        <section className="grid grid-cols-4 grid-rows-2 p-[100px_350px_200px_350px] min-h-full gap-[20px_12px]">
            {items.map(item => (
            <NavLink
            to={item.path}
            className="flex flex-col h-40 w-32 place-items-center gap-2"
            >
                <section className="h-32 w-32 rounded-xl bg-stone-200 content-center justify-items-center">
                    <img src={item.icon} alt={item.alt} className="w-12"/>
                </section>
                <p className="text-base font-medium text-center">{item.name}</p>
            </NavLink>
            ))}
        </section>
    );
}