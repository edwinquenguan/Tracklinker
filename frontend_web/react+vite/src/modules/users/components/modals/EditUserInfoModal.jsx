// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Hooks
import { useState } from "react";
import { useRoles } from "../../hooks/useRoles";
import { useEditUser } from "../../hooks/useEditUser";
// Modales
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

export default function EditUserInfoModal({ user, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { roles } = useRoles();
  const { handleChange, handleSubmit, loading, form } = useEditUser(user.id, {
    rol_id: user.rol_id || "",
    user_name: user.name || "",
    user_first_surname: user.first_surname || "",
    user_second_surname: user.second_surname || "",
    user_address: user.address || "",
    user_city: user.city || "",
    user_email: user.email || "",
    user_phone: user.phone || "",
  },);

  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-2">
        <SelectMenu
          name={"rol_id"}
          value={form.rol_id}
          id={"user_rol_menu"}
          spanText={"Rol"}
          onChange={handleChange}
        >
          {roles.map((rol) => (
            <option value={rol.id} key={rol.id}>
              {rol.name}
            </option>
          ))}
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
          isRequired={true}
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
          confirmTitle={"Información editada con éxito!"}
          confirmText={
            "Se ha editado correctamente el usuario, toca el botón de volver a la pagina para verlo"
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
          errorTitle="¡No se pudo completar el registro!"
          errorText="Verfica que todos los campos esten completos y que el correo electronico es el correcto"
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
