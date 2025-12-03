import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function DeleteUserModal({
  user_name,
  user_first_surname,
  onClose,
}) {
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
        confirmButtonOnClick={onClose}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
