// Hooks
import { useState } from "react";
import { useCreateProductBrand } from "../../hooks/useCreateProductBrand";
// Components
import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modals
import AddInnerModal from "../../../../globals/components/modals/AddInnerModal";

export default function AddProductBrandModal({ isOpen, onClose }) {
  const [innerModal, setInnerModal] = useState(null);
  const { loading, handleChange, handleSubmit } = useCreateProductBrand({
    product_brand_name: "",
  });
  return (
    <AddInnerModal isOpen={isOpen} onClose={onClose} title={"Crear Marca"}>
      <section className="flex flex-col items-center">
        <form className="flex flex-col gap-1">
          <FormField
            name={"product_brand_name"}
            labelText={"Nombre de la marca"}
            placeholder={"Asus"}
            onChange={handleChange}
          />
        </form>
        <ConfirmCancelButtons
          confirmText={loading ? <Loader /> : "Crear"}
          confirmOnClick={handleSubmit}
          cancelHandler={onClose}
        />
      </section>

      {/* Modales internas */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          onClose={() => setInnerModal(null)}
          confirmTitle={"Marca creada correctamente"}
          confirmButtonText={"Volver"}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
          isOpen={true}
          onClose={() => setInnerModal(null)}
          confirmButtonText={"Volver a intentarlo"}
          errorTitle={"!No se pudo crear la marca!"}
          errorText={"Revisa que el campo tenga datos y vuelve a intentarlo"}
        />
      )}
    </AddInnerModal>
  );
}
