import { apiRoutes } from "../../../config/apiRoutes";

// Función para loguearse
export async function login(email, password, signal) {
  const res = await fetch(`${apiRoutes.apiUrl}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
    credentials: "include",
    signal: signal,
  });

  if (!res.ok) {
    throw new Error("Credenciales Invalidas");
  }

  return await res.json();
}

// Función para cerrar sesión
export async function logout(navigate) {
  const res = await fetch(`${apiRoutes.apiUrl}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("No se pudo eliminar la cookie");
  }

  localStorage.clear();
  navigate("/login");

  return await res.json();
}
