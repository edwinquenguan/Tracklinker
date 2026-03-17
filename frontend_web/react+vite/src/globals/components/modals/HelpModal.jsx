import { actionsIcons } from "../../../assets/icons/mainIcons";
import ConfirmCancelButtons from "./ConfirmCancelButtons";

export default function HelpModal({ onClose }) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <span className="text-[#75777E]">
        Si te encontraste con algún error, necesitas ayuda con un registro o
        presentas un problema con la aplicación, puedes comunicarte con nosotros
        y te ayudaremos.
      </span>
      <textarea
        name=""
        id=""
        className="w-full h-40 px-3 py-4 border border-gray-500 text-black rounded-xl
        placeholder:text-gray-800"
        placeholder="Escribe aquí tu problema o sugerencia"
      />
      <ConfirmCancelButtons
        itemsPosition="end"
        confirmText="Enviar"
        confirmImageDisplay={true}
        confirmImage={actionsIcons.sendIcon}
        confirmButtonOnClick={onClose}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
