import { useEffect, useRef, useState } from "react";
import { getUsersAreaChartService } from "../../services/getUsersAreaChartService";
import { monthNames } from "../../../../constants/dateConstants";

export function useUsersAreaData() {
  const [usersData, setUsersData] = useState([]);
  const [error, setError] = useState(false);
  const controllerRef = useRef(null);

  useEffect(() => {
    async function fetchUsersData() {
      controllerRef.current?.abort();
      controllerRef.current = new AbortController();

      try {
        const response = await getUsersAreaChartService(
          controllerRef.current.signal,
        );
        const data = response.map((row) => ({
          month: monthNames[row.month_num - 1],
          users: row.users,
        }));
        setUsersData(data);
        console.log(data)
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
