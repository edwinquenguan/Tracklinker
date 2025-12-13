// Hooks
import { useCategories } from "../../hooks/useCategories";
import { useEditSubcategory } from "../../hooks/useEditSubcategory";
// Componentes
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import Loader from "../../../../globals/components/ui/Loader";

export default function EditSubcategoryInfoModal({ subcategory, onClose }) {
  const { categories } = useCategories();
  const { form, loading, error, handleChange, handleSubmit } =
    useEditSubcategory({
      category_id: "",
      subcategory_id: "",
      subcategory_name: "",
    });
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-2">
        {/* Menú para elegir la categoria a la cúal pertenecera la subcategoria */}
        <SelectMenu
          value={form.category_id}
          id={"subcategory_id_menu"}
          name={"category_id"}
          spanText={"Categoria"}
          onChange={handleChange}
        >
          <option> Seleccionar </option>
          {categories.map((category) => (
            <option value={category.category_id} key={category.category_id}>
              {category.category_name}
            </option>
          ))}
          <option value="add-subcategory"> Agregar categoria</option>
        </SelectMenu>
        <FormField
          labelText={"Nombre"}
          placeholder={subcategory.subcategory_name}
          id={"name"}
        />
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Confirmar"}
        cancelText={"Cancelar"}
        confirmButtonOnClick={onClose}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
