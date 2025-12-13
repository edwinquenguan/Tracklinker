// Hooks
import { useState } from "react";
import { useDeleteCategory } from "../../hooks/useDeleteCategory";
// Componentes
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

export default function DeleteCategoryModal({ category, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { handleDelete } = useDeleteCategory(category.category_id);
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro que deseas eliminar la categoría{" "}
        <span className="font-medium">{category.category_name}</span>?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={"Eliminar"}
        confirmBgColor="red-600"
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={() => handleDelete(setInnerModal)}
        cancelButtonOnClick={onClose}
      />

      {/* Modales Internas */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          confirmTitle={"Categoría eliminada con éxito!"}
          confirmText={
            "La categoría fue eliminada correctamente. Toca el botón para volver."
          }
          confirmButtonText={"Volver a la página"}
          onClose={() => {
            setInnerModal(null);
            onClose();
          }}
        />
      )}

      {innerModal === "error" && (
        <ErrorModal
          isOpen={true}
          errorTitle="¡No se pudo completar está acción!"
          errorText="Vuelve a intentar esta acción, si el error sigue comunicate con servicio al cliente"
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
