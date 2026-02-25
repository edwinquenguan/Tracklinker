import { useState, useEffect } from "react"

export function useUser() {
    const [user, setUser] = useState([])
    const [error, setError] = useState([])

    useEffect(() => {
        try {
            const data = JSON.parse(localStorage.getItem("user"))
            setUser(data)
        } catch (error) {
            setError(error)
        }
    }, [])

    return { user };
}