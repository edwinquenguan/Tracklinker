import { useEffect, useState } from "react";
import { getUsers } from "../services/getUsersService";

export function useUsers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Esta functión llama al service getAllUsers y espera a obtener todos los datos y los almacena en "data"
  async function fetchUsers() {
    try {
      const data = await getUsers();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return { users, loading, error, fetchUsers };
}
