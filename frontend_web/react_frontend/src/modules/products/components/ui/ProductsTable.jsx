import { useCatalog } from "../../hooks/useCatalog";
import ActionButtons from "../../../../globals/components/ui/ActionButtons";

export default function ProductsTable({editButtonOnclick, deleteButtonOnClick}) {

    const { products, loading, error } = useCatalog();

    return (
        <table className="min-w-full min-h-full appearance-none border-collapse
        dark:bg-black">
            {/* Cabecera de la tabla */}
            <thead className="sticky top-0 bg-[#f3eef5] 
            dark:bg-black dark:text-gray-300">
                <tr className="h-[50px] border-b border-gray-200 
                dark:border-[#303033]">
                    <th className="font-medium text-start pl-4"> Fecha de Ingreso </th>
                    <th className="font-medium text-start pl-4"> Orden De Entrada </th>
                    <th className="font-medium text-start pl-4"> Subcategoria </th>
                    <th className="font-medium text-start pl-4"> Serial </th>
                    <th className="font-medium text-start pl-4"> Modelo </th>
                    <th className="font-medium text-start pl-4"> Descripción </th>
                    <th className="font-medium text-start pl-4"> Marca </th>
                    <th className="font-medium text-start pl-4"> Stock </th>
                    <th className="font-medium text-start pl-4"> Tiempo de Garantia </th>
                    <th className="font-medium text-start pl-4"> Acciones </th>
                </tr>
            </thead>

            {/* Contenido de la tabla */}
            {products.map((product) => (
            <tbody className="font-normal dark:text-gray-300">
                {/* Productos */}
                {product.product_serials.map((product_serial) => (
                    <tr
                    key={product_serial.product_serial}
                    className="h-12 overflow-x-auto overflow-y-auto transition duration-500
                    hover:bg-[#cdcacf] hover:shadow-lg
                    dark:hover:bg-[#101012]">
                        
                        {/* Fecha de ingreso */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base">
                            {product_serial.input_orders.input_order_date}
                        </th>
                        
                        {/* Orden de Entrada */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base">
                            {product_serial.input_orders.input_order_bill}
                        </th>

                        {/* Subcategoria */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base">
                            {product.subcategories.subcategory_name} 
                        </th>
                        
                        {/* Serial */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base">
                            {product_serial.product_serial} 
                        </th>
                        
                        {/* Modelo */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base"> 
                            {product.product_details.product_detail_model}
                        </th>
                        
                        {/* Descripción */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base"> 
                            {product.product_details.product_detail_description} 
                        </th>

                        {/* Marca */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base">
                            {product.product_details.product_brands.product_brand_name} 
                        </th>

                        {/* Stock */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base"> 
                            {product.product_stock} 
                        </th>

                        {/* Tiempo de garantía */}
                        <th className="font-normal text-start pl-4 text-sm
                        xl:text-base"> 
                            12 Meses 
                        </th>

                        {/* Botones */}
                        <th className="flex h-14">
                            <ActionButtons
                            editButtonOnClick={editButtonOnclick}
                            deleteButtonOnClick={deleteButtonOnClick}
                            />
                        </th>
                    </tr>
                ))}
            </tbody>
            ))}
        </table>
    )
}