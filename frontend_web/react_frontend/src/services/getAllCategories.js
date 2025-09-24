import { supabase } from "../supabase/supabaseClient";

export const getAllCategories = async () => {
    try {
        const { data, error } = await supabase
        .from('categories')
        .select('*');

        if(error) throw error;

        return data;

    } catch (error) {
        console.error("Error al obtener usuarios:", error);
    }
}