import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function AddSubcategoriesModal({ onClose }) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-1">
            <SelectMenu
                id={"subcategoria_status_menu"}
                name={"subcategory_status_menu"}
                spanText={"Estado"}
            >
                <option value="active"> Activa </option>
                <option value="inactive"> Inactiva </option>
                
            </SelectMenu>

            <FormField
                labelText={"Nombre de la Subcategoria"}
                placeholder={"portatiles,all in one,etc"}
                id={"subcategory_name"}
                autoComplete="off"
            />

            <FormField
                labelText={"description"}
                placeholder={"descripcion de la subcategoria"}
                id={"subcategory_description"}
                autoComplete="off"
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
