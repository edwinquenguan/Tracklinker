import { useEffect, useRef, useState } from "react";
import { getUsersPieDataService } from "../../services/users/getUsersPieDataService";

export function useUsersPieData(period) {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    async function fetchUsersData() {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();

      try {
        const data = await getUsersPieDataService(
          period,
          controllerRef.current.signal,
        );
        const colors = ["#a5acfa", "#5769ff", "#4f5ff1", "#2f3ab5"];

        const pieData = data.map((item, index) => ({
          ...item,
          color: colors[index % colors.length],
        }));
        setUsersData(pieData);
      } catch (error) {
        if (error.name === "AbortError") return;
        setError(error.message);
      }
    }

    fetchUsersData();
    return () => controllerRef.current?.abort();
  }, [period]);

  return { usersData, error };
}
