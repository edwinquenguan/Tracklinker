// Esta función obtiene todos los usuarios y los almacena en data
export const getAllUsers = async () => {

    const apiUrl = process.env.REACT_APP_API_URL;
    // Obtenemos el token del localStorage1
    const token = localStorage.getItem("token");

    // Si no hay token, lanzamos un error
    if (!token) {
        throw new Error("No hay token");
    }

    try {
        // Consumimos el endpoint y lo almacenamos en res, le pasamos el metodo y el jwt que necesita para traer los datos
        const res =  await fetch(`${apiUrl}/api/users/`, {
            method:"GET",
            headers:{
                Authorization: `${token}`
            }
        });

        // Validamos si la respuesta fue OK
        if (!res.ok) {
            throw new Error("Error en la petición");
        }

        // Convertimos la respuesta a json y la almacenamos en data
        const data = await res.json();

        // Devolvemos el objeto data dentro de la respuesta
        return data.data;

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
        return null;
    }
};