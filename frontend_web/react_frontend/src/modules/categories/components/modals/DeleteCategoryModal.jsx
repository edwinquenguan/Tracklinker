import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function DeleteCategoryModal({ category_name, onClose }) {
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro que deseas eliminar la categoría{" "}
        <span className="font-medium">{category_name}</span>?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={"Eliminar"}
        confirmBgColor="red-600"
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={onClose}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
