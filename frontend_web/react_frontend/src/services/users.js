import { supabase } from "../supabase/supabaseClient";

// Con esta función se puede obtener todos los usuarios y almacenar sus datos
export const getAllUsers = async () => {
    try {
        // Consulta la tabla users y trae todos los registros y los almacena en data
        const { data, error } = await supabase
        .from('users') 
        .select(`
            *,
            roles(
                rol_id,
                rol_name
            )
            `);

        if (error) {
            throw error;
        }

        return data;

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
            }
}