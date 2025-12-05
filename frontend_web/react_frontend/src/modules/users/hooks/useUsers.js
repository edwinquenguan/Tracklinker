import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsersService";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Este effect llama al service getAllUsers y espera a obtener todos los datos y los almacena en "data"
  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getUsers();
        setUsers(data);
        setLoading(false)
      } catch (error) {
        setError(error.message);
      }
    }

    fetchUsers();
  }, []);

  return { users, loading, error };
}
