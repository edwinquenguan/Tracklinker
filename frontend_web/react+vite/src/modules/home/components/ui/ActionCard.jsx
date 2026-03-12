import { NavLink } from "react-router-dom";

export default function ActionCard({ itemName, itemPath, itemIcon: Icon, itemAlt }) {
  return (
    <section>
      {/* Card de cada modulo */}
      <NavLink
        to={itemPath}
        key={itemName}
        className="flex flex-col h-36 w-28 place-items-center gap-2 transition duration-300
            hover:scale-[1.1]
            xl:h-40 xl:w-32 
            md:h-40 md:w-32"
      >
        <section
          className="h-28 w-28 rounded-xl bg-[#eae8eb] content-center justify-items-center
                dark:bg-[#101012]
                xl:h-40 xl:w-32 
                md:h-40 md:w-32"
        >
          <Icon aria-label={itemAlt} className="w-10 h-10 fill-[#75777E]"/>
        </section>
        <p className="text-base font-medium text-center dark:text-white">
          {itemName}
        </p>
      </NavLink>
    </section>
  );
}
