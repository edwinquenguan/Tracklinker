import { supabase } from "../supabase/supabaseClient";

export const getSubcategoriesWithCategory = async () => {
    try {
        const { data, error } = await supabase
        .from('subcategories')
        .select(`
            *,
            categories(
                category_id,
                category_name
            )
            `);

        if (error) throw error;

        return data;

    } catch (error) {
        console.log("Error al obtener proveedores:", error);
        return [];
    }
}