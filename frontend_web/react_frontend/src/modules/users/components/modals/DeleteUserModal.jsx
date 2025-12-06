import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { useDeleteUser } from "../../hooks/useDeleteUser";

export default function DeleteUserModal({
  user_id,
  user_name,
  user_first_surname,
  onClose,
}) {
  const { handleSubmit, loading, error } = useDeleteUser(user_id);

  if (loading) {
    return <div>Cargando...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro que deseas eliminar a{" "}
        <span className="font-medium">
          {user_name} {user_first_surname}
        </span>
        ?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={"Eliminar"}
        confirmBgColor="red-600"
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={handleSubmit}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
