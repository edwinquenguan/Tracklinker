// Hooks
import { useState } from "react";
import { useDeleteSubcategory } from "../../hooks/useDeleteSubcategory";
// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

export default function DeleteSubcategoryModal({ subcategory, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { handleSubmit, loading } = useDeleteSubcategory(
    subcategory.subcategory_id
  );
  return (
    <section className="flex flex-col justify-center items-center dark:text-white">
      <p>
        ¿Seguro que deseas eliminar la subcategoria
        <span className="font-medium"> {subcategory.subcategory_name}</span>?
      </p>
      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Eliminar"}
        confirmBgColor="red-600"
        confirmDarkBgColor=""
        cancelText={"Cancelar"}
        confirmButtonOnClick={(e) => handleSubmit(e, setInnerModal)}
        cancelButtonOnClick={onClose}
      />

      {/* Modales Internas */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          confirmTitle={"Subcategoria eliminada con éxito!"}
          confirmText={
            "Se ha creado correctamente la subcategoria, toca el botón de volver a la pagina de subcategorias"
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
          errorTitle="¡No se puedo eliminar la subcategoria!"
          errorText="No pudimos completar tu petición, por favor vuelve a intentarlo"
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
