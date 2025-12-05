import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function EditCategoryInfoModal({
  category_name,
  category_description,
  onClose,
}) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-2">
        <FormField
          labelText={"Nombre de la Categoría"}
          placeholder={category_name}
          id={"category_name"}
        />

        <FormField
          labelText={"Descripción"}
          placeholder={category_description}
          id={"category_description"}
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
