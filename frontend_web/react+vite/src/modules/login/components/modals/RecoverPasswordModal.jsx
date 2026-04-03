// Hooks
import { useState } from "react";
// Icons
import { loginIcons } from "../../../../assets/icons/loginIcons";
// Components
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modals
import EmailSentModal from "./EmailSentModal";

export default function RecoverPasswordModal({ onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  return (
    <section className="flex flex-col items-center">
      <FormField
        labelText={"Email"}
        inputIcon={loginIcons.emailIcon}
        type="email"
        placeholder={"Escribe tu correo aquí"}
      />
      <ConfirmCancelButtons
        cancelText="Cancelar"
        cancelButtonOnClick={onClose}
        confirmText="Restablecer"
        confirmButtonOnClick={() => setInnerModal("sendEmail")}
      />
      {innerModal === "sendEmail" && (
        <EmailSentModal isOpen={true} onClose={() => setInnerModal(null)} />
      )}
    </section>
  );
}
