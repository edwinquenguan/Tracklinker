import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoutes({ role }) {
  const [authorized, setAuthorized] = useState(null);

  const apiUrl = process.env.REACT_APP_API_URL;

  // Obtiene el token almacenado en el localstorage
  const token = localStorage.getItem("token");

  useEffect(() => {
    // Validamos si no existe un token dentro del localStorage
    if (!token) {
      setAuthorized(false);
      return;
    }

    const verifyRole = async () => {
      try {
        // Enviamos el token al backend para validar el rol del usuario
        const res = await fetch(`${apiUrl}/api/auth/verify-role/${role}`, {
          headers: {
            Authorization: `${token}`,
          },
        });
        // Almacenamos la respuesta del backend en data en formato json
        const data = await res.json();

        if (res.status === 403) {
          setAuthorized(false);
          return;
        }

        // Validamos si la llave success dentro de data es True
        if (data.success === true) {
          // Y lo guardamos en el estado authorized
          setAuthorized(data.success);
        } else {
          setAuthorized(false);
        }
      } catch (error) {
        console.error(error);
        setAuthorized(false);
      }
    };

    verifyRole();
  }, [token, role, apiUrl]);

  // Verifica si authorized es false y lo redirige al login
  if (authorized === false) return <Navigate to={"/login"} replace />;

  // Esto renderiza todas las rutas dentro del componente ProtectedRoutes
  return <Outlet />;
}
