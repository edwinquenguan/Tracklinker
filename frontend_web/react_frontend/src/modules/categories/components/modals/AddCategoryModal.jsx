import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function AddCategoryModal({ onClose }) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-1">
        <FormField
          labelText={"Nombre de la Categoría"}
          placeholder={"Electrodomésticos / Accesorios / Tecnología"}
          id={"category_name"}
          autoComplete="off"
        />

        <FormField
          labelText={"Descripción"}
          placeholder={"Categoría destinada a productos de tecnología"}
          id={"category_description"}
          autoComplete="off"
        />

        <SelectMenu
          id={"category_status"}
          name={"category_status"}
          spanText={"Estado"}
        >
          <option value="active"> Activa </option>
          <option value="inactive"> Inactiva </option>
        </SelectMenu>
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
