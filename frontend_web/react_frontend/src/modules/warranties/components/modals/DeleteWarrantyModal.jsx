// src/modules/warranties/components/modals/DeleteWarrantyModal.jsx
import React, { useState } from "react";
import { useDeleteWarranty } from "../../hooks/useDeleteWarranty";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";

export default function DeleteWarrantyModal({ selectedWarranty, onClose, onDeleteSuccess }) {
  const { handleDelete, loading } = useDeleteWarranty();
  const [innerModal, setInnerModal] = useState(null); // "success" o "error"

  const handleDeleteClick = async () => {
    const id = selectedWarranty?.warranty_incidents_id; // Ajusta según tu modelo

    if (!id) {
      setInnerModal("error");
      return;
    }

    const { success, error } = await handleDelete(id);

    if (success) {
      setInnerModal("success");
    } else {
      setInnerModal("error");
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <p className="text-lg mb-6 text-center">
        ¿Estás seguro de que deseas <strong>eliminar</strong> permanentemente la garantía con ID{" "}
        <span className="font-bold">{selectedWarranty?.warranty_incidents_id}</span>?
      </p>

      <p className="text-red-500 font-bold mb-4">¡Esta acción es irreversible!</p>

      <div className="flex gap-4 pt-5">
        <button
          className="bg-red-600 text-white px-5 py-2 rounded-xl shadow-xl text-sm transition duration-300 hover:bg-red-700"
          onClick={handleDeleteClick}
          disabled={loading}
        >
          {loading ? "Eliminando..." : "Eliminar"}
        </button>

        <button
          className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200"
          onClick={onClose}
          disabled={loading}
        >
          Cancelar
        </button>
      </div>

      {/* Modales internos de éxito o error */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen
          confirmTitle="¡Garantía eliminada!"
          confirmText="La garantía se eliminó correctamente."
          confirmButtonText="Cerrar"
          onClose={() => {
            setInnerModal(null);
            if (onDeleteSuccess) onDeleteSuccess();
            onClose();
          }}
        />
      )}

      {innerModal === "error" && (
        <ErrorModal
          isOpen
          errorTitle="Error al eliminar"
          errorText="No se pudo eliminar la garantía. Intenta nuevamente."
          confirmButtonText="Cerrar"
          onClose={() => setInnerModal(null)}
        />
      )}
    </div>
  );
}
