import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { loginIcons } from "../../../../assets/icons/loginIcons";

export default function RecoverPasswordModal({cancelButtonOnClick, confirmButtonOnClick}) {
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
        cancelButtonOnClick={cancelButtonOnClick}
        confirmText="Restablecer"
        confirmButtonOnClick={confirmButtonOnClick}
      />
    </section>
  );
}
