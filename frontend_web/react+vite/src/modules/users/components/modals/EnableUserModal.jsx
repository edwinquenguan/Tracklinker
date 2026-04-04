// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
// Hooks
import { useEnableUser } from "../../hooks/useEnableUser.js";
import { useState } from "react";

export default function EnableUserModal({ user, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { handleSubmit, loading} = useEnableUser(user.id);
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro/a que deseas habilitar a{" "}
        <span className="font-medium">
          {user.name} {user.first_surname}
        </span>
        ?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Habilitar"}
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={(e) => handleSubmit(e, setInnerModal)}
        cancelButtonOnClick={onClose}
      />
      {innerModal === "success" && (
        <SuccessModal
        isOpen={true}
        confirmButtonText={"Volver a la página"}
        confirmTitle={"¡Usuario habilitado correctamente!"}
        confirmText={"El usuario ha sido habilitado correctamente."}
        onClose={() => {
            setInnerModal(null);
            onClose();
        }}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
        isOpen={true}
        confirmButtonText={"Volver a intentarlo"}
        errorTitle={"¡No se pudo habilitar el usuario!"}
        errorText={"Intenta nuevamente habilitar el usuario y si el problema persiste comunicate ccon soporte"}
        onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
