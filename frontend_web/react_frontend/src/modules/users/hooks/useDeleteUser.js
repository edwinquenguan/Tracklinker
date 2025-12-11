import { useState, useEffect } from "react";
import { deleteUserService } from "../services/deleteUserService";

export function useDeleteUser(userId, openModal) {
    const [id, setId] = useState(userId);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true)
        try {
            const response = await deleteUserService(id)
            setLoading(true)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    }

    return { handleSubmit, loading, error}
}