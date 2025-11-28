// Esta función obtiene todos las solicitudes de garantía
export const getAllWarranties = async () => {

const apiUrl = process.env.REACT_APP_API_URL;
// Obtenemos  el token del  localStorage1
const token = localStorage.getItem("token");

//si no hay token lanzamos error
if (!token){
  throw new Error ("No hay token")

}

  try {
    // Consumimos el endpoint y lo almacenamos en res, le pasamos el metodo y el wt que necesita para traer los datos
    const res = await fetch(`${apiUrl}/warranty_incidents/`,{
      method: "GET",
      headers: {
        Autorization: `${token}`
      }
    });

    // Vlidamos si la respuesta fue OK
    if (!res.ok){
      throw new Error("Error en la petición")
    }

    // Convertimos la respuesta a json y la la almacenamos en data
    const data= await res.json();

    //Devolvemos  el objeyo daa dentro de la respuesta
    return data.data;
   
  } catch (error) {
    console.log("Error al obtener informacion de productos:", error);
    return null;
  }
};
