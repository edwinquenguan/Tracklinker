import { modalIcons } from "../../assets/icons/modalIcons";

export default function FilterModal({title, isOpen, onClose, children}){
    return(
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0000002c]
                ${isOpen 
                ? "opacity-100" 
                : "opacity-0 pointer-events-none"}
            `}
            onClick={onClose}>
                {/* stopPropagation sirve para que al momento de seleccionar la modal no la cierre */}
                <div 
                className={`bg-white rounded-xl shadow-lg w-[90%] max-w-xl p-6 relative
                    ${isOpen 
                    ? "animate-modalFadeIn" 
                    : "animate-modalFadeOut"}
                `}
                onClick={(e) => e.stopPropagation()}
                >
                    {/* Cabecera de la modal donde esta el titúlo y el icono para cerrarla */}
                    <header className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-medium">{title}</h2>
                        {/* Icono "x" para cerrar la modal */}
                        <button
                            onClick={onClose}
                        >
                            <img src={modalIcons.closeIcon} alt="" className="p-1.5 rounded-3xl invert brightness-200 transition duration-300 hover:bg-[#111111]" />
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