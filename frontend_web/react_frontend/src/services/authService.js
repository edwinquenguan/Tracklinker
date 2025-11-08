import { supabase } from "../supabase/supabaseClient";

const apiUrl = process.env.REACT_APP_API_URL

// Función para loguearse 
export async function login(email, password) {
  try{
    const res = await fetch(`${apiUrl}/api/auth/login`,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "email": email,
        "password": password
      })
    });

    // Validamos si el estado de la respuesta no fue 200
    if (!res.ok) {
      throw new Error("Credenciales Invalidas")
    }

    // Almacenamos la respuesta y la pasamos a json
    const data = await res.json()

    // Guardamos el token en localStorage con su tipo
    localStorage.setItem("token", `${data.token_type} ${data.access_token}`)
    
    return data;

  } catch (error) {
    console.error("Error", error)
    return null
  }
};

// Función para cerrar la sesión
// TODO: Agregar contenido a la función y no usar supabase
export async function signOut() {
  return await supabase.auth.signOut();
}