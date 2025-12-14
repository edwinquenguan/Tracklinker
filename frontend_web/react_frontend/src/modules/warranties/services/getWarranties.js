import {apiRoutes} from "../../../config/apiRoutes";
import {getToken} from "../../../utils/auth";


export async function getWarranties(){
   
  const res = await fetch (`${apiRoutes.apiUrl}${apiRoutes.warranties}`,{
     method:"GET",
     headers: {
        Authorization: getToken(),
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

}



