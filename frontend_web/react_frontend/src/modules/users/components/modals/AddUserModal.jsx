// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Hooks
import { useState } from "react";
import { useRoles } from "../../hooks/useRoles";
import { useCreateUser } from "../../hooks/useCreateUser";
// Modales
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

export default function AddUserModal({ onClose, fetch }) {
  // Estado para las modales se abren encima de esta
  const [innerModal, setInnerModal] = useState(null);
  const { roles } = useRoles();
  const { form, loading, handleSubmit, handleChange } = useCreateUser({
    rol_id: "",
    user_name: "",
    user_first_surname: "",
    user_second_surname: "",
    user_address: "",
    user_city: "",
    user_password: "",
    user_email: "",
    user_phone: "",
  });

  return (
    <section className="flex flex-col items-center">
      {/* Formulario para la informacion del nuevo usuario */}
      <form action="" className="flex flex-col gap-1">
        {/* Menú de roles */}
        <SelectMenu
          value={form.rol_id}
          id={"user_rol_menu"}
          name={"rol_id"}
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
          value={form.user_name}
          labelText={"Nombre"}
          placeholder={"Felipe"}
          id={"name"}
          name={"user_name"}
          onChange={handleChange}
          autoComplete="given-name"
        />

        <FormField
          value={form.user_first_surname}
          labelText={"Primer Apellido"}
          placeholder={"Contreras"}
          id={"first_surname"}
          name={"user_first_surname"}
          onChange={handleChange}
          autoComplete="family-name"
        />

        <FormField
          value={form.user_second_surname}
          labelText={"Segundo Apellido"}
          placeholder={"Aguilar"}
          id={"second_surname"}
          name={"user_second_surname"}
          onChange={handleChange}
          autoComplete="name"
        />

        <FormField
          value={form.user_password}
          labelText={"Contraseña"}
          type="password"
          placeholder={"********"}
          id={"password"}
          name={"user_password"}
          onChange={handleChange}
          autoComplete="pass"
        />

        <FormField
          value={form.user_city}
          labelText={"Ciudad"}
          placeholder={"Bogotá"}
          id={"city"}
          name={"user_city"}
          onChange={handleChange}
          autoComplete="address-level2"
        />

        <FormField
          value={form.user_phone}
          labelText={"Número"}
          placeholder={"300012124"}
          id={"phone"}
          name={"user_phone"}
          onChange={handleChange}
          autoComplete="tel"
        />

        <FormField
          value={form.user_email}
          labelText={"Email"}
          placeholder={"pepito@gmail.com"}
          id={"email"}
          name={"user_email"}
          onChange={handleChange}
          autoComplete="email"
        />

        <FormField
          value={form.user_address}
          labelText={"Dirección"}
          placeholder={"KR 124 # 12-124"}
          id={"address"}
          name={"user_address"}
          onChange={handleChange}
          autoComplete="street-address"
        />
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Crear"}
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
            fetch();
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
