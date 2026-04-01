import { useState, useEffect, useRef } from "react";
import { getCurrentUserService } from "../services/getCurrentUserService";

export function useUser() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const controllerRef = useRef(null);

  async function fetchCurrentUser() {
    controllerRef.current?.abort();
    controllerRef.current = new AbortController();
    try {
      const data = await getCurrentUserService();
      setUser(data);
    } catch (error) {
      setError(error);
    }
  }

  useEffect(() => {
    fetchCurrentUser();
    return () => controllerRef.current?.abort();
  }, []);

  return { user, error, fetchCurrentUser };
}
