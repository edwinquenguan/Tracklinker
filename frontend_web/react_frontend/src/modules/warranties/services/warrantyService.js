// warrantyService.js (VERSIÓN FINAL CORREGIDA)

import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth"; 

export async function createWarranty(warrantyData) {
    const rawToken = getToken(); 

    // Asegura que el token es una cadena no vacía y que no es la palabra literal "null" o "undefined"
    const token = (typeof rawToken === 'string' && rawToken.length > 0 && 
                   rawToken !== 'null' && rawToken !== 'undefined') ? rawToken : null;
    
    // 1. Construcción de Cabeceras
    const headers = {
        'Content-Type': 'application/json', 
    };

    // 2. CRÍTICO: SOLO se añade la cabecera si el token es válido
    if (token) {
        // ✅ CORRECCIÓN: Usar la variable 'token' y añadir el prefijo 'Bearer '
        headers['Authorization'] = getToken(); 
    }

    try {
        const res = await fetch(`${apiRoutes.apiUrl}/warranty_incidents/create`, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(warrantyData),
        });

        // 3. Manejo de Errores HTTP
        if (!res.ok) {
            const status = res.status;
            let errorDetail = `Error ${status}: Fallo en la petición`;
            
            // Intentamos leer el JSON del error para obtener el detalle de validación (422) o autenticación (401)
            try {
                const errorJson = await res.json();
                errorDetail = JSON.stringify(errorJson);
            } catch (e) {
                // Si la respuesta no es JSON, usamos el estado y el texto
                errorDetail = `Error ${status}: ${await res.text() || "Respuesta no JSON"}`;
            }

            // Devolvemos el objeto de error para que el hook lo maneje
            return { error: errorDetail, data: null };
        }
        
        // 4. Respuesta Exitosa (200/201)
        const data = await res.json();
        return { error: null, data: data };

    } catch (error) {
        // Captura errores de red (ej. servidor caído) o fallos de fetch
        console.error("Error de Red o Desconocido en fetch:", error);
        return { error: error.message || "Fallo de conexión o error desconocido", data: null };
    }
}