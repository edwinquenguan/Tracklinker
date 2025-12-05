import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { useCreateUser } from "../../hooks/useCreateUser";
import { useRoles } from "../../hooks/useRoles";

export default function AddUserModal({ onClose }) {
  const { roles } = useRoles();
  const { form, loading, error, handleSubmit, handleChange } = useCreateUser({
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

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
          value={form.user_password}
          labelText={"contras"}
          placeholder={"********"}
          id={"name"}
          name={"user_password"}
          onChange={handleChange}
          autoComplete="pass"
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
        confirmText={"Crear"}
        cancelText={"Cancelar"}
        confirmButtonOnClick={(e) => handleSubmit(e)}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
