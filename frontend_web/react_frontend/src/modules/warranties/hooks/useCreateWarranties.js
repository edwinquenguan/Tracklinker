// useCreateWarranty.js (Asegúrate de que este es el contenido actual)

import { useState } from "react";
import { createWarranty } from "../services/warrantyService";

// Función auxiliar para convertir FormData a un objeto plano
function formDataToObject(formData) {
    const object = {};
    formData.forEach((value, key) => {
        // Maneja campos con múltiples valores (aunque el formulario actual no los tiene)
        if (!Reflect.has(object, key)) {
            object[key] = value;
            return;
        }
        if (!Array.isArray(object[key])) {
            object[key] = [object[key]];
        }
        object[key].push(value);
    });
    return object;
}

export function useCreateWarranty(onSuccess, onError) {
    const [loading, setLoading] = useState(false);

    const handleCreateWarranty = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formData = new FormData(e.target);
        
        // 🔑 CAMBIO CLAVE 1: Convertir FormData a JSON antes de enviar
        const warrantyData = formDataToObject(formData); 
        
        // Enviamos el objeto plano al servicio
        const { error, data } = await createWarranty(warrantyData); 

        setLoading(false);

        if (error) {
            if (onError) onError(error);
        } else {
            if (onSuccess) onSuccess(data);
        }
    };

    return { handleCreateWarranty, loading };
}