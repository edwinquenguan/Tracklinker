import { NavLink } from "react-router-dom";
import {
  avatarItem,
  firstSectionItems,
  extendedSectionItems,
  secondSectionItems,
} from "../../../constants/asideMenuItems";
import { useUser } from "../../hooks/useUser";

// Menú lateral principal de opciones
export default function Aside({ avatarOnClick }) {
  const { user } = useUser();
  return (
    <aside
      className="flex px-2 py-3 order-2 overflow-hidden
        dark:bg-black
        md:flex-col md:order-1 md:px-5 md:py-5
        xl:flex-col xl:row-span-2 xl:px-5 xl:py-5 xl:order-1
        "
    >
      {/* Menús de opciones */}
      <section className="flex flex-col gap-1 order-1">
        {/* Primera Sección */}
        <nav className="flex p-0">
          <ul
            className="min-w-full flex gap-[3px]
                    md:flex-col
                    xl:flex-col"
          >
            <li className="dark:hover:bg-gray-950">
              <button
                onClick={avatarOnClick}
                className="w-full flex items-center justify-center py-1.5 px-4 gap-2.5 rounded-xl transition duration-300
              hover:bg-gray-200 dark:text-gray-50
              md:justify-start
              xl:justify-start
              "
              >
                <img
                  src={avatarItem.icon}
                  alt={avatarItem.alt}
                  className="w-8 h-8"
                />
                <section className="hidden xl:block text-center">
                  <span className="text-[#4a4a4d] font-medium dark:text-[#7E8088]">
                    {user.name} {user.first_surname}
                  </span> 
                </section>
              </button>
            </li>
            {/* Esto lo que hace es recorrer la constante y traer los datos uno a uno e ir creando un li para cada uno */}
            {firstSectionItems.map((item) => (
              <li key={item.name} className="rounded-xl dark:hover:bg-gray-950">
                <NavLink to={item.path}>
                  {({ isActive }) => (
                    <section
                      className={`w-auto h-14 flex flex-col py-2.5 px-5 items-center justify-center subpixel-antialiased rounded-xl transition duration-300 group
                                md:w-full md:h-full md:py-3 md:px-7
                                xl:w-full xl:h-full xl:flex-row xl:py-2.5 xl:px-5 xl:gap-2.5 xl:justify-start
                                    ${
                                      isActive
                                        ? `bg-black font-medium shadow-[0px_0px_32px_-9px_#000000] text-white fill-white
                                    dark:bg-white dark:text-black dark:shadow-[0px_0px_32px_-11px_#ffffff] animate-clickEffect`
                                        : `text-[#75777E] 
                                    hover:bg-gray-200
                                    dark:text-[7E8088] font-normal`
                                    }`}
                    >
                      <item.icon
                        className={`group-hover:stroke-black
                          ${
                            isActive
                              ? "fill-white scale-105 stroke-none animate-iconFill dark:fill-black"
                              : "stroke-[60] stroke-[#75777E] fill-none group-hover:stroke-[70]"
                          }`}
                      />
                      <div
                        className={`flex gap-1 text-center font-medium
                        ${isActive ? "" : "group-hover:text-black"}
                        `}
                      >
                        <span
                          className="text-nowrap text-xs  
                                      md:hidden 
                                      xl:block xl:text-base"
                        >
                          {item.name}
                        </span>
                        <span
                          className="text-nowrap text-xs hidden
                                        xl:block xl:text-base"
                        >
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
        <section
          className="hidden
                md:block
                lg:block
                xl:block"
        >
          {/* Segunda sección extendida */}
          <nav>
            <ul>
              {extendedSectionItems.map((item) => (
                <NavLink to={item.path} key={item.name}>
                  {({ isActive }) => (
                    <section
                      className={`w-20 h-14 flex flex-col py-2.5 px-5 items-center justify-center subpixel-antialiased rounded-xl transition duration-300 group
                                md:w-full md:h-full md:py-3 md:px-7
                                xl:w-full xl:h-full xl:flex-row xl:py-2.5 xl:px-5 xl:gap-2.5 xl:justify-start
                                    ${
                                      isActive
                                        ? `bg-black shadow-[0px_0px_32px_-9px_#000000] text-white
                                    dark:bg-white dark:text-black dark:shadow-[0px_0px_32px_-11px_#ffffff] animate-clickEffect`
                                        : `text-[#75777E] 
                                    hover:bg-gray-200
                                    dark:text-[7E8088] font-normal`
                                    }`}
                    >
                      <item.icon
                        className={`group-hover:stroke-black
                          ${
                            isActive
                              ? "fill-white scale-105 stroke-none animate-iconFill dark:fill-black"
                              : "stroke-[60] stroke-[#75777E] fill-none group-hover:stroke-[70]"
                          }`}
                      />
                      <div
                        className={`flex gap-1 font-medium
                        ${isActive ? "" : "group-hover:text-black"}
                        `}
                      >
                        <span
                          className="text-center text-nowrap text-xs
                                        md:hidden 
                                        xl:block xl:text-base"
                        >
                          {item.name}
                        </span>
                        <span
                          className="text-center text-nowrap text-xs hidden
                                        xl:block xl:text-base"
                        >
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
          <nav
            className="p-0 order-2
                    md:py-4
                    xl:py-4"
          >
            <p
              className="text-sm py-1 pl-3 text-gray-300 hidden
                        xl:block
                        md:block"
            >
              Otros
            </p>
            <ul className="flex flex-col gap-[3px]">
              {secondSectionItems.map((item) => (
                <li
                  key={item.name}
                  className="rounded-xl hover:bg-gray-200 transition duration-300 dark:hover:bg-gray-950"
                >
                  <NavLink to={item.path} onClick={item.onClick}>
                    {({ isActive }) => (
                      <section
                        className={`w-20 h-14 py-2.5 px-5 flex gap-2.5 items-center justify-center subpixel-antialiased rounded-xl group
                          xl:justify-start xl:w-full xl:h-auto
                          ${
                            isActive
                              ? "bg-black rounded-xl font-semibold shadow-[0px_0px_32px_-9px_#000000] text-white dark:bg-white dark:text-black dark:shadow-[0px_0px_32px_-11px_#ffffff] animate-clickEffect"
                              : "text-[#75777E] dark:text-[7E8088]"
                          }`}
                      >
                        <item.icon
                          className={`
                            ${
                              isActive
                                ? "fill-white scale-105 stroke-none animate-iconFill dark:fill-black"
                                : "stroke-[60] stroke-[#75777E] fill-none group-hover:stroke-black group-hover:stroke-[70]"
                            }`}
                        />
                        <span
                          className={`hidden text-base xl:block font-medium
                          ${isActive ? "" : "group-hover:text-black"}
                          `}
                        >
                          {item.name}
                        </span>
                      </section>
                    )}
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
