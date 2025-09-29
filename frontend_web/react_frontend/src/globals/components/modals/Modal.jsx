import { modalIcons } from "../../assets/icons/modalIcons";

export default function Modal({ isOpen, title, children, onClose, type }) {
  return (
    <div 
    className={
        `fixed z-50 inset-0 bg-[#0000002c]
            ${type === "filter"
                ? "flex justify-end items-start pr-[260px] pt-4 bg-[#00000013]"
                : type === "download" 
                ? "flex justify-end items-end p-4 bg-[#0000001e]"
                : "flex items-center justify-center"
            }
            ${isOpen 
                ? "opacity-100" 
                : "opacity-0 pointer-events-none"}
        `}
    onClick={onClose}>
        {/* stopPropagation sirve para que al momento de seleccionar la modal no la cierre */}
        <div 
        className={`bg-white rounded-xl shadow-lg w-[90%] p-6 relative
            dark:bg-black dark:shadow-[0px_0px_0px_1px_#101012]
            ${isOpen 
            ? "animate-modalFadeIn" 
            : "animate-modalFadeOut"}
            ${type === "filter" 
                ? "max-w-sm"
                : type === "user" 
                ? "max-w-2xl"
                : type === "download"
                ? "max-w-sm"
                : "max-w-xl"
            }
        `}
        onClick={(e) => e.stopPropagation()}
        >
            {/* Cabecera de la modal donde esta el titúlo y el icono para cerrarla */}
            <header className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-medium dark:text-white">{title}</h2>
                {/* Icono "x" para cerrar la modal */}
                <button
                    onClick={onClose}
                    className="p-1.5 rounded-3xl transition
                    hover:bg-[#efedf0]
                     dark:hover:bg-[#c5c6ce27]"
                >
                    <img src={modalIcons.closeIcon} alt="" className="invert brightness-200 transition duration-300
                    dark:brightness-0 dark:hover:bg-transparent" />
                </button>
            </header>
        {/* Contenido principal de la modal o cuerpo de la modal */}
        <div>
            {children}
        </div>
      </div>
    </div>
  );
}
