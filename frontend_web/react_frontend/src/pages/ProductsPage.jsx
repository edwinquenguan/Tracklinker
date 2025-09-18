import { productsIcons, actionsIcons } from "../assets/icons/mainIcons";
import { products } from "../data/products"
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";

export default function ProductsPage(){
    return(
        <Layout>
            <TopSection
            sectionName={"Productos"}
            addButtonIcon={productsIcons.addProductIcon}
            addButtonText={"Agregar Producto"}
            />
            {/* Contenedor de la tabla */}
            <section className="max-h-[850px] max-w-full border border-gray-200 bg-[#f3eef5] rounded-xl shadow-md overflow-y-auto overflow-x-auto overflow-hidden
            dark:border-[#303033]">
                <table className="min-w-full min-h-full appearance-none border-collapse
                dark:bg-black">

                    {/* Cabecera de la tabla */}
                    <thead className="sticky p-5 top-0 bg-[#f3eef5] 
                    dark:bg-black dark:text-gray-300">
                        <tr className="h-[50px] border-b border-gray-200 
                        dark:border-[#303033]">
                            <th className="font-medium text-start pl-4"> Fecha de Ingreso </th>
                            <th className="font-medium text-start"> Modelo </th>
                            <th className="font-medium text-start"> Serial </th>
                            <th className="font-medium text-start"> Marca </th>
                            <th className="font-medium text-start"> Tiempo de Garantia </th>
                            <th className="font-medium text-start"> </th>
                        </tr>
                    </thead>

                    {/* Contenido de la tabla */}
                    <tbody className="font-normal dark:text-gray-300">
                        {/* Productos */}
                        {products.map((product) => (
                            // Datos de cada producto
                            <tr 
                            key={product.serial}
                            className="h-[50px] overflow-x-auto overflow-y-auto transition duration-500
                            hover:bg-[#cdcacf] dark:hover:bg-[#101012]">
                                <th className="font-normal text-start pl-4"> {product.input_date} </th>
                                <th className="font-normal text-start"> {product.model} </th>
                                <th className="font-normal text-start"> {product.serial} </th>
                                <th className="font-normal text-start"> {product.brand} </th>
                                <th className="font-normal text-start"> {product.warranty} </th>

                                {/* Botones */}
                                <th className="flex min-h-[60px] items-center justify-center gap-3">
                                    <button>
                                        <img src={actionsIcons.editInfoIcon} alt="" className="dark:invert" />
                                    </button>
                                    <button>
                                        <img src={actionsIcons.deleteIcon} alt="" className="dark:invert" />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </Layout>
    )
}