// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
// Hooks
import { useDisableUser } from "../../hooks/useDisableUser";
import { useState } from "react";

export default function DisableUserModal({ user, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { handleSubmit, loading} = useDisableUser(user.id);
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro/a que deseas deshabilitar a{" "}
        <span className="font-medium">
          {user.name} {user.first_surname}
        </span>
        ?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Deshabilitar"}
        confirmBgColor="red-600"
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={(e) => handleSubmit(e, setInnerModal)}
        cancelButtonOnClick={onClose}
      />
      {innerModal === "success" && (
        <SuccessModal
        isOpen={true}
        confirmButtonText={"Volver a la página"}
        confirmTitle={"¡Usuario deshabilitado correctamente!"}
        confirmText={"El usuario ha sido deshabilitado correctamente."}
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
        errorTitle={"¡No se pudo borrar el usuario!"}
        errorText={"Intenta nuevamente eliminar el usuario y si el problema persiste comunicate ccon soporte"}
        onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
