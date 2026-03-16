import { useEffect, useRef, useState } from "react";
import { getUsersPieDataService } from "../../services/getUsersPieDataService";

export function useUsersPieData() {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    async function fetchUsersData() {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();

      try {
        const data = await getUsersPieDataService(controllerRef.current.signal);
        const pieData = [
          { name: "Administrador", value: data[0].users, color: "#2f3ab5" },
          { name: "Almacen", value: data[1].users, color: "#8c2fba" },
          { name: "Técnico", value: data[2].users, color: "#10B981" },
          { name: "Cliente", value: data[3].users, color: "#F59E0B" },
        ];
        setUsersData(pieData);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
      }
    }

    fetchUsersData();
    return () => controllerRef.current?.abort();
  }, []);

  return { usersData, error };
}
