// Hooks
import { useState } from "react";
import { useUser } from "../../../hooks/useUser";
// Icons
import { modalIcons } from "../../../../assets/icons/modalIcons";
import { asideIcons } from "../../../../assets/icons/asideIcons";
// Components
import GeneralContent from "./GeneralContent";
import CreditsContent from "./CreditsContent";
import AppearanceContent from "./AppearanceContent";
// Modals
import EditInfoModal from "./EditInfoModal";
import ChangePasswordModal from "./ChangePasswordModal";

export default function ProfileModal() {
  const { user, fetchCurrentUser } = useUser();
  const [activeSection, setActiveSection] = useState("general");
  const [innerModal, setInnerModal] = useState(null);
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
                  ? "bg-gray-200 dark:bg-[#202022] text-black dark:text-white"
                  : "hover:bg-[#efedf0] dark:hover:bg-[#202022]"
              }`}
              onClick={() => setActiveSection("general")}
            >
              <img
                src={modalIcons.settingsIcon}
                alt=""
                className={`transition-all duration-300 dark:invert
                ${activeSection === "general" ? "brightness-0" : ""}
                `}
              />
              <span className="text-sm"> General </span>
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center py-3 pl-3 gap-2 rounded-xl transition duration-300 text-[#888888] 
                        hover:bg-[#efedf0]
                        dark:hover:bg-[#202022]
                        ${
                          activeSection === "appearance"
                            ? "bg-gray-200 dark:bg-[#202022] text-black dark:text-white"
                            : "hover:bg-[#efedf0] dark:hover:bg-[#202022]"
                        }`}
              onClick={() => setActiveSection("appearance")}
            >
              <asideIcons.themesIcon
                className={`transition-all duration-300 dark:invert
                ${activeSection === "appearance" ? "fill-black" : "fill-[#d5d5d7]"}
                `}
              />
              <span className="text-sm"> Apariencia </span>
            </button>
          </li>
          <li>
            <button
              className={`w-full flex items-center py-3 pl-3 gap-2 rounded-xl transition duration-300 text-[#888888] 
                        hover:bg-[#efedf0]
                       dark:hover:bg-[#202022]
                        ${
                          activeSection === "credits"
                            ? "bg-gray-200 dark:bg-[#202022] text-black dark:text-white"
                            : "hover:bg-[#efedf0] dark:hover:bg-[#202022]"
                        }`}
              onClick={() => setActiveSection("credits")}
            >
              <img
                src={modalIcons.menIcon}
                alt=""
                className={`transition-all duration-300 dark:invert
                ${activeSection === "credits" ? "invert brightness-200 dark:brightness-0" : ""}
                `}
              />
              <span className="text-sm"> Creditos </span>
            </button>
          </li>
        </ul>
      </aside>

      {/* Contenido de la sección seleccionada */}
      {activeSection === "general" && (
        <GeneralContent user={user} setInnerModal={setInnerModal} />
      )}
      {activeSection === "appearance" && <AppearanceContent />}
      {activeSection === "credits" && <CreditsContent />}

      {/* Modales Internas */}
      {innerModal === "editInfo" && (
        <EditInfoModal
          isOpen={true}
          onClose={() => {
            fetchCurrentUser();
            setInnerModal(null);
          }}
          user={user}
        />
      )}
      {innerModal === "changePassword" && (
        <ChangePasswordModal
          isOpen={true}
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
