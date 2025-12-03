import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function EditUserInfoModal({
  user_name,
  user_first_surname,
  user_second_surname,
  user_phone,
  user_email,
  user_address,
  onClose,
}) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-2">
        <FormField labelText={"Nombre"} placeholder={user_name} id={"name"} />
        <FormField
          labelText={"Apellidos"}
          placeholder={`${user_first_surname} ${user_second_surname}`}
          id={"surname"}
        />
        <FormField labelText={"Número"} placeholder={user_phone} id={"phone"} />
        <FormField
          labelText={"Correo Electrónico"}
          placeholder={user_email}
          id={"email"}
        />
        <FormField
          labelText={"Dirección"}
          placeholder={user_address}
          id={"address"}
        />
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={"Confirmar"}
        cancelText={"Cancelar"}
        confirmButtonOnClick={onClose}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
