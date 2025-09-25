import { supabase } from "../supabase/supabaseClient"

export const getProducts = async () => {
    try {
        // Consulta la tablas necesarias y trae todos los registros, los almacena en data y retorna data
        const { data, error } = await supabase
                .from('products')
                .select(`
                    *,
                    subcategories (
                    subcategory_name,
                    categories (
                        category_name
                        )
                    ),
                    product_details(
                    product_detail_model,
                    product_detail_description,
                    product_brands(
                        product_brand_name
                        )
                    ),
                    product_serials(
                    product_serial,
                    product_garanty_input,
                    input_orders(
                        input_order_bill
                        )
                    )
                    `);
                    
        if (error) throw error;
        
        return data;
    } catch (error) {
        console.log("Error al obtener informacion de productos:", error);
        return [];
    }
}