// components/modals/DeleteWarrantyModal.jsx

import React from 'react';
// 🚨 Reemplaza esta ruta por la ubicación real de tu hook
import { useDeleteWarranty } from "../../hooks/useDeleteWarranty"; 

// Recibe onDeleteSuccess como prop para recargar la lista principal
export default function DeleteWarrantyModal({ selectedWarranty, onClose, onDeleteSuccess }) {
  
  // Inicializar el hook:
  const { handleDeleteWarranty, loading } = useDeleteWarranty(
    // onSuccess:
    (data) => {
      alert(`✅ Garantía #${selectedWarranty.warranty_incidents_id} eliminada con éxito.`);
      
      // Llama a la función del componente padre para refrescar la lista
      if (onDeleteSuccess) {
          onDeleteSuccess(); 
      }
      
      onClose();
    },
    // onError:
    (errorMessage) => {
      alert(`❌ Error al eliminar la garantía: ${errorMessage}`);
    }
  );

  // Función que se conecta al botón:
  const handleDeleteClick = () => {
    if (selectedWarranty?.warranty_incidents_id) {
      handleDeleteWarranty(selectedWarranty.warranty_incidents_id); 
    }
  };

  return (
    <div className="flex flex-col items-center p-5">
      <p className="text-lg mb-6 text-center">
        ¿Estás seguro de que deseas **eliminar** permanentemente la garantía Ccon caso número {selectedWarranty?.warranty_incidents_id}?
      </p>
      <p className="text-red-500 font-bold mb-4">¡Esta acción es irreversible!</p>
      
      {/* Botones */}
      <div className="flex gap-4 pt-5">
        <button
          className="bg-red-600 text-white px-5 py-2 rounded-xl shadow-xl text-sm transition duration-300 hover:bg-red-700"
          onClick={handleDeleteClick}
          disabled={loading}
        >
          {loading ? 'Eliminando...' : 'Eliminar'} 
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