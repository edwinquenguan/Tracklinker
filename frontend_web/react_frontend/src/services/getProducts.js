import { supabase } from "../supabase/supabaseClient"

export const getProducts = async () => {
    try {
        // Consulta la tablas necesarias y trae todos los registros, los almacena en data y retorna data
        const { data, error } = await supabase
                .from('input_orders')
                .select(`
                    input_order_date,
                        product_serials(
                        product_serial,
                            products(
                            product_id,
                                product_details(
                                product_details_id,
                                product_detail_model,
                                product_detail_description,
                                product_brands(
                                        product_brand_id,
                                        product_brand_name
                                    )
                                )
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