// Componentes
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import DisabledFormField from "../../../../globals/components/ui/DisabledFormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import Loader from "../../../../globals/components/ui/Loader";
// Hooks
import { useEditUser } from "../../hooks/useEditUser";
import { useRoles } from "../../hooks/useRoles";
import { useState } from "react";
// Modales
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";

export default function EditUserInfoModal({ user, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { roles } = useRoles();
  const { handleChange, handleSubmit, loading, form } = useEditUser(
    user.user_id,
    {
      rol_id: user.rol_id || "",
      user_name: user.user_name || "",
      user_first_surname: user.user_first_surname || "",
      user_second_surname: user.user_second_surname || "",
      user_address: user.user_address || "",
      user_city: user.user_city || "",
      user_email: user.user_email || "",
      user_phone: user.user_phone || "",
    }
  );

  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-2">
        {/* ID del usuario */}
        <DisabledFormField
          hidden={"hidden"}
          id={"user_id"}
          value={user.user_id}
        />
        <SelectMenu
          name={"rol_id"}
          value={form.rol_id}
          id={"user_rol_menu"}
          spanText={"Rol"}
          onChange={handleChange}
        >
          <option> Seleccionar </option>
          {roles.map((rol) => (
            <option value={rol.id} key={rol.id}>
              {rol.name}
            </option>
          ))}
          <option value="add-rol"> Agregar rol</option>
        </SelectMenu>
        <FormField
          name={"user_name"}
          value={form.user_name}
          labelText={"Nombre"}
          onChange={handleChange}
          id={"name"}
          autoComplete="given-name"
        />
        <FormField
          name={"user_first_surname"}
          value={form.user_first_surname}
          labelText={"Primer Apellido"}
          id={"first_surname"}
          onChange={handleChange}
          autoComplete="family-name"
        />
        <FormField
          name={"user_second_surname"}
          value={form.user_second_surname}
          labelText={"Segundo Apellido"}
          id={"second_surname"}
          onChange={handleChange}
          autoComplete="family-name"
        />
        <FormField
          name={"user_phone"}
          value={form.user_phone}
          labelText={"Número"}
          id={"phone"}
          onChange={handleChange}
          autoComplete="tel"
        />
        <FormField
          name={"user_email"}
          value={form.user_email}
          labelText={"Correo Electrónico"}
          id={"email"}
          onChange={handleChange}
          autoComplete="email"
        />
        <FormField
          name={"user_address"}
          value={form.user_address}
          labelText={"Dirección"}
          id={"address"}
          onChange={handleChange}
          autoComplete="street-address"
        />
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Confirmar"}
        cancelText={"Cancelar"}
        confirmButtonOnClick={(e) => handleSubmit(e, setInnerModal)}
        cancelButtonOnClick={onClose}
      />

      {/* Modales Internas */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          confirmTitle={"Usuario creado con éxito!"}
          confirmText={
            "Se ha creado correctamente el usuario, toca el botón de volver a la pagina para verlo, ¡Bienvenido!"
          }
          confirmButtonText={"Volver a la pagina"}
          onClose={() => {
            setInnerModal(null);
            onClose();
          }}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
          isOpen={true}
          errorTitle="No se puedo completar el registro!"
          errorText="Verfica que todos los campos esten completos y que el correo electronico no este registrado"
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
