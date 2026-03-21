import { useEffect, useRef, useState } from "react";
import { getUsersPieDataService } from "../../services/users/getUsersPieDataService";

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
          { name: "Administrador", value: data[0].users, color: "#a5acfa" },
          { name: "Almacen", value: data[1].users, color: "#5769ff" },
          { name: "Técnico", value: data[2].users, color: "#4f5ff1" },
          { name: "Cliente", value: data[3].users, color: "#2f3ab5" },
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
