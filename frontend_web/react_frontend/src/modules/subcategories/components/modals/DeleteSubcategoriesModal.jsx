import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { useDeleteSubcategories } from "../../hooks/useDeleteSubcategories";

export default function DeleteSubcategoriesModal({ user, onClose }) {
  const { handleSubmit, loading, error } = useDeleteSubcategories(subcategories.subcategories_id);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro que deseas eliminar a{" "}
        <span className="font-medium">
          {subcategories.subcategories_name} {subcategories.subcategories_first_surname}
        </span>
        ?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={"Eliminar"}
        confirmBgColor="red-600"
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={handleSubmit}
        cancelButtonOnClick={onClose}
      />
    </section>
  );
}
