// src/modules/warranties/components/modals/EditWarrantyModal.jsx
import React, { useState, useRef } from "react";
import { useEditWarranty } from "../../hooks/useEditWarranty";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";

export default function EditWarrantyModal({ selectedWarranty, onClose, onEditSuccess }) {
  const formRef = useRef(null);
  const { handleEdit, loading } = useEditWarranty();
  const [form, setForm] = useState({ ...selectedWarranty });
  const [innerModal, setInnerModal] = useState(null); // "success" o "error"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = selectedWarranty?.warranty_incidents_id; // 🔑 corregido typo
    if (!id) {
      setInnerModal("error");
      return;
    }

    const { success, error } = await handleEdit(id, form);
    if (success) {
      setInnerModal("success");
    } else {
      setInnerModal("error");
    }
  };

  const handleSubmitViaButton = () => formRef.current?.requestSubmit();

  return (
    <section className="flex flex-col items-center">
      <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-1 w-72">
        <label className="text-sm mt-1">Serial</label>
        <input
          type="text"
          name="product_serial"
          value={form.product_serial || ""}
          onChange={handleChange}
          className="border rounded-lg p-2 text-sm"
        />

        <label className="text-sm mt-1">Nombre del Cliente</label>
        <input
          type="text"
          name="warranty_customer"
          value={form.warranty_customer || ""}
          onChange={handleChange}
          className="border rounded-lg p-2 text-sm"
        />

        <label className="text-sm mt-1">Teléfono</label>
        <input
          type="text"
          name="warranty_phone"
          value={form.warranty_phone || ""}
          onChange={handleChange}
          className="border rounded-lg p-2 text-sm"
        />

        <label className="text-sm mt-1">Dirección</label>
        <input
          type="text"
          name="warranty_address"
          value={form.warranty_address || ""}
          onChange={handleChange}
          className="border rounded-lg p-2 text-sm"
        />

        <label className="text-sm mt-1">Ciudad</label>
        <input
          type="text"
          name="warranty_city"
          value={form.warranty_city || ""}
          onChange={handleChange}
          className="border rounded-lg p-2 text-sm"
        />

        <label className="text-sm mt-1">Requerimiento</label>
        <textarea
          name="warranty_description"
          value={form.warranty_description || ""}
          onChange={handleChange}
          className="h-20 w-full p-2 text-sm border rounded-lg"
        />

        {/* NUEVO SELECT PARA ESTADO */}
        <label className="text-sm mt-1">Estado</label>
        <select
          name="warranty_status"
          value={form.warranty_status || "0"}
          onChange={handleChange}
          className="border rounded-lg p-2 text-sm"
        >
          <option value="0">Incompleto</option>
          <option value="1">En proceso</option>
          <option value="2">Completado</option>
        </select>
      </form>

      <ConfirmCancelButtons
        confirmButtonOnClick={handleSubmitViaButton}
        cancelButtonOnClick={onClose}
        confirmLoading={loading}
      />

      {innerModal === "success" && (
        <SuccessModal
          isOpen
          confirmTitle="¡Garantía actualizada!"
          confirmText="La garantía se ha actualizado correctamente."
          confirmButtonText="Cerrar"
          onClose={() => {
            setInnerModal(null);
            if (onEditSuccess) onEditSuccess();
            onClose();
          }}
        />
      )}

      {innerModal === "error" && (
        <ErrorModal
          isOpen
          errorTitle="Error al actualizar"
          errorText="No se pudo actualizar la garantía. Intenta nuevamente."
          confirmButtonText="Cerrar"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
