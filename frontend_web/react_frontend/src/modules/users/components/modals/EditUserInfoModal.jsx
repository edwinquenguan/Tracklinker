import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import DisabledFormField from "../../../../globals/components/ui/DisabledFormField";

export default function EditUserInfoModal({
  user_id,
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
        {/* ID del usuario */}
        <DisabledFormField hidden={"hidden"} id={"user_id"} value={user_id}/>
        <FormField
          labelText={"Nombre"}
          placeholder={user_name}
          id={"name"}
          autoComplete="name"
        />
        <FormField
          labelText={"Apellidos"}
          placeholder={`${user_first_surname} ${user_second_surname}`}
          id={"first_surname"}
          autoComplete="family-name"
        />
        <FormField
          labelText={"Número"}
          placeholder={user_phone}
          id={"phone"}
          autoComplete="tel"
        />
        <FormField
          labelText={"Correo Electrónico"}
          placeholder={user_email}
          id={"email"}
          autoComplete="email"
        />
        <FormField
          labelText={"Dirección"}
          placeholder={user_address}
          id={"address"}
          autoComplete="street-address"
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
