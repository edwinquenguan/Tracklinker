// hooks/useDeleteWarranty.js

import { useState } from "react";
// 🚨 Reemplaza esta ruta por la ubicación real de tu servicio
import { deleteWarranty } from "../services/deleteWarranty"; 

/**
 * Hook personalizado para manejar la eliminación de una garantía.
 * @param {function} onSuccess - Función a ejecutar si la eliminación es exitosa.
 * @param {function} onError - Función a ejecutar si ocurre un error.
 * @returns {object} Contiene la función handleDeleteWarranty y el estado loading.
 */
export function useDeleteWarranty(onSuccess, onError) {
    const [loading, setLoading] = useState(false);

    /**
     * Función que ejecuta la lógica de eliminación.
     * @param {string | number} warrantyId - El ID de la garantía a eliminar.
     */
    const handleDeleteWarranty = async (warrantyId) => {
        if (!warrantyId) {
            if (onError) onError('Se requiere el ID de la garantía para eliminar.');
            return;
        }

        setLoading(true);

        try {
            // Llama a la función que puede lanzar un error
            const data = await deleteWarranty(warrantyId); 
            
            // Si tiene éxito, llama al callback de éxito
            if (onSuccess) onSuccess(data); 

        } catch (error) {
            // Captura y maneja el error lanzado por el servicio
            console.error("Error al intentar eliminar la garantía:", error.message);
            if (onError) onError(error.message);

        } finally {
            // Siempre desactiva la carga
            setLoading(false);
        }
    };

    return { handleDeleteWarranty, loading };
}