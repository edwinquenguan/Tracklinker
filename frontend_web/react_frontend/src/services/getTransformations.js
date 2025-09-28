import { supabase } from "../supabase/supabaseClient"

export const getTransformations = async () => {
    try {

        const { data, error } = await supabase
        .from('')
        .select(`
            
            `)
            
        return data;

    } catch (error) {
        console.log("Error al obtener transformaciones:", error);
    }
}