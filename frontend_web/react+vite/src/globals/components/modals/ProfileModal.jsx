import { asideIcons } from "../../../assets/icons/asideIcons";
import { useUser } from "../../hooks/useUser";
import { modalIcons } from "../../../assets/icons/modalIcons";
import { actionsIcons } from "../../../assets/icons/mainIcons";
import { useState } from "react";

export default function ProfileModal({ onClose }) {
  const { user } = useUser();
  const [activeSection, setActiveSection] = useState("general");
  return (
    <section className="flex h-96 gap-5">
      <aside className="w-56 border-gray-300 dark:border-[#3a3d43]">
        {/* Lista de opciones */}
        <ul className="flex flex-col gap-1">
          <li>
            <button
              className={`w-full flex items-center pl-3 py-2.5 rounded-xl gap-2 transition duration-300 text-[#686767]
              hover:bg-[#efedf0]
              ${
                activeSection === "general"
                  ? "bg-gray-200 dark:bg-[#202022] text-black"
                  : "hover:bg-[#efedf0] dark:hover:bg-[#202022]"
              }`}
              onClick={() => setActiveSection("general")}
            >
              <img
                src={modalIcons.settingsIcon}
                alt=""
                className={`transition-all duration-300 dark:invert
                ${activeSection === "general" ? "invert brightness-200" : ""}
                `}
              />
              <span className="text-sm"> General </span>
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center py-3 pl-3 gap-2 rounded-xl transition duration-300 text-[#888888] 
                        hover:bg-[#efedf0]
                        dark:text-white dark:hover:bg-[#202022]
                        ${
                          activeSection === "appearance"
                            ? "bg-gray-200 dark:bg-[#202022] text-black"
                            : "hover:bg-[#efedf0] dark:hover:bg-[#202022]"
                        }`}
              onClick={() => setActiveSection("appearance")}
            >
              <asideIcons.themesIcon
                className={`transition-all duration-300 dark:invert
                ${activeSection === "appearance" ? "fill-black" : "fill-[#75777E]"}
                `}
              />
              <span className="text-sm"> Apariencia </span>
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center py-3 pl-3 gap-2 rounded-xl transition duration-300 text-[#888888] 
                        hover:bg-[#efedf0]
                        dark:text-white dark:hover:bg-[#202022]
                        ${
                          activeSection === "credits"
                            ? "bg-gray-200 dark:bg-[#202022] text-black"
                            : "hover:bg-[#efedf0] dark:hover:bg-[#202022]"
                        }`}
              onClick={() => setActiveSection("credits")}
            >
              <img
                src={modalIcons.menIcon}
                alt=""
                className={`transition-all duration-300 dark:invert
                ${activeSection === "credits" ? "invert brightness-200" : ""}
                `}
              />
              <span className="text-sm"> Creditos </span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Contenido de la sección seleccionada */}
      {activeSection === "general" && (
        <section className="flex flex-col w-full pl-3 pb-10 gap-7 animate-blurUp">
          {/* Información general del usuario */}
          <section className="flex flex-col">
            <span className="font-medium text-sm pl-1">Perfil</span>
            <section className="flex gap-4 items-center mt-4">
              <img src={asideIcons.avatarIcon} alt="" className="h-14 w-14" />
              <article className="flex flex-col justify-center">
                <span className="font-medium">
                  {user.name} {user.first_surname}
                </span>
                <span className="font-light text-sm">{user.email}</span>
              </article>
            </section>
          </section>

          <section className="flex items-center justify-between">
            <div className="flex flex-col items-start gap-1">
              <span className="font-medium text-sm">Cuenta</span>
              <span className="text-xs font-light">
                Gestiona la informacion de tu cuenta
              </span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-black text-white">
              <img
                src={actionsIcons.editInfoIcon}
                alt="Editar"
                className="w-5 h-5 invert"
              />
              <span className="text-sm font-medium">Editar</span>
            </button>
          </section>

          <section className="flex justify-between">
            <section className="flex flex-col gap-1">
              <span className="font-medium text-sm">Cerrar Sesion</span>
              <span className="text-xs font-light">
                Cerrar sesion en este dispositivo
              </span>
            </section>
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-black text-sm bg-blacktransition text-white
                    dark:bg-[#2020226c] dark:text-white dark:hover:text-gray-800"
            >
              <asideIcons.logoutIcon
                alt="Cerrar sesión"
                className="w-5 h-5 fill-white"
              />
              <span className="font-medium">Cerrar Sesion</span>
            </button>
          </section>
        </section>
      )}
      {activeSection === "appearance" && (
        <section className="flex flex-col w-full pb-10 gap-7 animate-blurUp">
          {/* Opciones de apariencia */}
          <section className="flex flex-col gap-2">
            <span className="font-medium text-sm pl-1">Apariencia</span>
            <section className="flex gap-2">
              {/* Sistema */}
              <button className="flex flex-col items-start gap-1.5 py-2.5 pl-3 pr-20 border rounded-xl focus:outline focus:outline-2">
                <div className="flex items-center">
                  <img
                    src={modalIcons.whiteCircle}
                    alt=""
                    className="border rounded-xl h-4"
                  />
                  <img src={modalIcons.blackCircle} alt="" className="h-5" />
                </div>
                <span className="font-medium text-sm">Sistema</span>
              </button>
              {/* Claro */}
              <button className="flex flex-col items-start gap-2 py-2.5 pl-3 pr-20 border rounded-xl focus:outline focus:outline-2">
                <img
                  src={modalIcons.whiteCircle}
                  alt=""
                  className="border rounded-xl h-4"
                />
                <span className="font-medium text-sm">Claro</span>
              </button>
              {/* Oscuro */}
              <button className="flex flex-col items-start gap-2 py-2.5 pl-3 pr-20 border rounded-xl focus:outline focus:outline-1.5">
                <img
                  src={modalIcons.blackCircle}
                  alt=""
                  className="border rounded-xl h-4"
                />
                <span className="font-medium text-sm">Oscuro</span>
              </button>
            </section>
          </section>

          <section className="flex items-center justify-between">
            <div className="flex flex-col gap-1">
              <span className="font-medium text-sm">Lenguaje</span>
              <span className="text-xs font-light">Español</span>
            </div>
            <button className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-black text-white">
              <img
                src={modalIcons.languageIcon}
                alt="Lenguaje"
                className="w-5 h-5"
              />
              <span className="text-sm font-medium">Cambiar</span>
            </button>
          </section>
        </section>
      )}
      {activeSection === "credits" && (
        <section className="flex flex-col w-full pl-3 pb-10 gap-7 animate-blurUp">
          {/* Creditos */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <div className="flex flex-col gap-1">
                <span className="font-medium text-sm">Creditos</span>
                <span className="text-xs">Repositorio de github</span>
              </div>
              <button
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-black text-white"
                onClick={() =>
                  window.open(
                    "https://github.com/DevJuan001/tracklinker",
                    "_blank",
                  )
                }
              >
                <img
                  src={modalIcons.githubIcon}
                  alt="Github"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium">Github</span>
              </button>
            </div>
          </section>
        </section>
      )}
    </section>
  );
}
