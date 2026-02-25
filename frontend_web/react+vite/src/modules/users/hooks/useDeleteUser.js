import { useState, useEffect } from "react";
import { deleteUserService } from "../services/deleteUserService";

export function useDeleteUser(userId) {
    const [id, setId] = useState(userId);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    async function handleSubmit(e, setInnerModal) {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await deleteUserService(id)
            if (response.success) {
                setInnerModal("success")
            }
        } catch (error) {
            setInnerModal("error")
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { handleSubmit, loading, error}
}