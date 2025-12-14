import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { useState, useEffect } from "react";
import { useEditTransformation } from "../../hooks/useEditTransformation";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

export default function EditTransformationModal({ selectedTransformation, onClose, onEditSuccess }) {
  const [innerModal, setInnerModal] = useState(null);
  const [form, setForm] = useState({
    out_order_id: "",
    out_product_garanty: "",
    product_transformation: "",
    product_serial: "",
  });

  const { editTransformation, loading } = useEditTransformation();

  // Inicializa los valores del formulario al cargar el modal
  useEffect(() => {
    if (selectedTransformation) {
      setForm({
        output_details_id: selectedTransformation.output_details_id || "",
        out_order_id: selectedTransformation.out_order_id || "",
        out_product_garanty: selectedTransformation.out_product_garanty || "",
        product_transformation: selectedTransformation.product_transformation || "",
        product_serial: selectedTransformation.product_serial || "",
      });
    }
  }, [selectedTransformation]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedTransformation) return;

    const id = selectedTransformation.output_details_id; // 🔑 llave primaria correcta
   
    const response = await editTransformation(id, form);

    if (response.success) {
      setInnerModal("success");
    } else {
      setInnerModal("error");
    }
  };

  return (
    <section className="flex flex-col items-center">
      <form className="flex flex-col gap-1">
   
        <FormField
          value={form.out_order_id}
          labelText="Orden de salida"
          placeholder="XXX123"
          name="out_order_id"
          onChange={handleChange}
        />

        <FormField
          type="date"
          value={form.out_product_garanty}
          labelText="Finaliza garantía"
          name="out_product_garanty"
          onChange={handleChange}
        />

        <FormField
          value={form.product_transformation}
          labelText="Transformación"
          placeholder="Cambio de pieza X"
          name="product_transformation"
          onChange={handleChange}
        />

        <FormField
          value={form.product_serial}
          labelText="Serial del producto"
          placeholder="ABC123"
          name="product_serial"
          onChange={handleChange}
        />
      </form>

      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Actualizar"}
        cancelText="Cancelar"
        confirmButtonOnClick={handleSubmit}
        cancelButtonOnClick={onClose}
      />

      {innerModal === "success" && (
        <SuccessModal
          isOpen
          confirmTitle="¡Transformación actualizada!"
          confirmText="La transformación se ha modificado correctamente."
          confirmButtonText="Volver"
          onClose={() => {
            setInnerModal(null);
            onEditSuccess?.(); // refresca lista
            onClose?.();       // cierra modal
          }}
        />
      )}

      {innerModal === "error" && (
        <ErrorModal
          isOpen
          errorTitle="Error al actualizar la transformación"
          errorText="Verifica los datos e inténtalo nuevamente."
          confirmButtonText="Volver"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
