// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
// Hooks
import { useDeleteUser } from "../../hooks/useDeleteUser";
import { useState } from "react";

export default function DeleteUserModal({ user, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { handleSubmit, loading} = useDeleteUser(user.user_id);
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro que deseas eliminar a{" "}
        <span className="font-medium">
          {user.user_name} {user.user_first_surname}
        </span>
        ?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Eliminar"}
        confirmBgColor="red-600"
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={(e) => handleSubmit(e, setInnerModal)}
        cancelButtonOnClick={onClose}
      />
      {innerModal === "success" && (
        <SuccessModal
        isOpen={true}
        confirmTitle={"¡Usuario eliminado correctamente!"}
        confirmText={"Todos los datos de este usuarios han sido eliminados exitosamente."}
        onClose={() => {
            setInnerModal(null);
            onClose();
        }}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
        isOpen={true}
        errorTitle={"¡No se pudo borrar el usuario!"}
        errorText={"Intenta nuevamente eliminar el usuario y si el problema persiste comunicate ccon soporte"}
        onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
