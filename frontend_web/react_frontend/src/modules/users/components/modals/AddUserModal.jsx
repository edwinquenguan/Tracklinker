import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function AddUserModal({ onClose }) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-1">
        <SelectMenu
          id={"user_rol_menu"}
          name={"user_rol_menu"}
          spanText={"Rol"}
        >
          <option value="admin"> Administrador </option>
          <option value="almacen"> Almacén </option>
          <option value="tecnico"> Técnico </option>
        </SelectMenu>

        <FormField
          labelText={"Nombre Completo"}
          placeholder={"Felipe Contreras Aguilar"}
          id={"name"}
          autoComplete="name"
        />

        <FormField
          labelText={"Número"}
          placeholder={"300012124"}
          id={"phone"}
          autoComplete="tel"
        />

        <FormField
          labelText={"Email"}
          placeholder={"pepito@gmail.com"}
          id={"email"}
          autoComplete="email"
        />

        <FormField
          labelText={"Dirección"}
          placeholder={"KR 124 # 12-124"}
          id={"address"}
          autoComplete="address"
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
