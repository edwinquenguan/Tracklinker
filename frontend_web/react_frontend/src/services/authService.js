import { apiRoutes } from "../config/apiRoutes";

// Función para loguearse
export async function login(email, password) {
  try {
    const res = await fetch(`${apiRoutes.apiUrl}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    // Validamos si el estado de la respuesta no fue 200
    if (!res.ok) {
      throw new Error("Credenciales Invalidas");
    }

    // Almacenamos la respuesta y la pasamos a json
    const data = await res.json();

    // Guardamos el token en localStorage con su tipo
    localStorage.setItem("token", `${data.token_type} ${data.access_token}`);

    return { error: null, data };
  } catch (error) {
    return {
      error: error,
    };
  }
}

// Función para cerrar sesión
export async function signOut() {
  try {
    // Trae el token del localStorage
    const token = localStorage.getItem("token");

    if (!token) {
      throw new Error("No existe un token");
    }
    // Remueve todo lo que este almacenado en el localStorage
    localStorage.clear();
  } catch (error) {
    console.error(error);
    return {
      error: error,
    };
  }
}
