// hooks/useEditWarranty.js
import { useState } from "react";
import { updateWarranty } from "../services/updateWarranty";

export const useEditWarranty = (onSuccess = () => {}, onError = () => {}) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const editWarranty = async (id, data) => {
        setLoading(true);
        setError(null);

        try {
            // NOMBRE CORRECTO
            await updateWarranty(id, data); 
            onSuccess();

        } catch (err) {
            console.error("Error al editar la garantía:", err);
            setError(err);
            onError(err);
        } finally {
            setLoading(false);
        }
    };

    return { editWarranty, loading, error };
};
