import { supabase } from "../supabase/supabaseClient";

export const getAllWarranties = async () => {
    try {
        // Consulta la tablas necesarias y trae todos los registros, los almacena en data y retorna data
        const { data, error } = await supabase
                .from('warranty_incidents')
                .select("*");
                    
        if (error) throw error;
        
        return data;
    } catch (error) {
        console.log("Error al obtener informacion de productos:", error);
    }
}