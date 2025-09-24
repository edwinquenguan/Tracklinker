import { supabase } from "../supabase/supabaseClient";

export const getAllSuppliers = async () => {
    try {
        // Consulta la tabla de proveedores y trae todos los registros y los almacena en data
        const { data, error } = await supabase
        .from('suppliers')
        .select("*");

        if (error) throw error;

        return data;
    } catch (error) {
        console.log("Error al obtener proveedores:", error);
    }
}