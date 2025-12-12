// components/modals/DeleteTransformationModal.jsx
import React from "react";
// ⬇ Reemplaza esta ruta con la ruta real de tu hook
import { useDeleteTransformation } from "../../hooks/useDeleteTransformation";

export default function DeleteTransformationModal({
  selectedTransformation,
  onClose,
  onDeleteSuccess,
}) {
  // Hook para eliminar transformación
  const { handleDeleteTransformation, loading } = useDeleteTransformation(
    // ✔ onSuccess
    () => {
      alert(
        `✅ Transformación #${selectedTransformation.transformationId} eliminada con éxito.`
      );

      // Notifica al padre para refrescar lista
      if (onDeleteSuccess) onDeleteSuccess();

      onClose();
    },

    // ❌ onError
    (errorMessage) => {
      alert(`❌ Error al eliminar la transformación: ${errorMessage}`);
    }
  );

  // Ejecuta la eliminación
  const handleDeleteClick = () => {
    if (selectedTransformation?.transformationId) {
      handleDeleteTransformation(selectedTransformation.transformationId);
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <p className="text-lg mb-6 text-center">
        ¿Estás seguro de que deseas **eliminar** permanentemente la
        transformación con ID{" "}
        <span className="font-bold">
          {selectedTransformation?.transformationId}
        </span>
        ?
      </p>

      <p className="text-red-500 font-bold mb-4">
        ¡Esta acción es irreversible!
      </p>

      {/* Botones */}
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
    </div>
  );
}
