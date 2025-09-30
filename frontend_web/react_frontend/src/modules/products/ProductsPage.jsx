import { useState, useEffect } from "react";
import { productsIcons, actionsIcons } from "../../assets/icons/mainIcons";
// import { products } from "../data/products"
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import SelectMenu from "../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../globals/components/modals/ConfirmCancelButtons";
import ActionButtons from "../../globals/components/ui/ActionButtons";
import Layout from "../../globals/components/Layout/Layout";
import FormField from "../../globals/components/ui/FormField";
import TopSection from "../../globals/components/ui/TopSection";
import { getProducts } from "../../services/getProducts";
import { getAllCategories } from "../../services/getAllCategories";
import { getSubcategoriesWithCategory } from "../../services/getSubcategoriesWithCategory";

export default function ProductsPage(){
    // Definir los estados y sus valores por defecto
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
            async function fetchProducts() {
                try {
                    setLoading(true)
                    const data = await getProducts();
                    setProducts(data);
                    console.log(data);
                } catch (error) {
                    setError(error.message);
                } finally {
                    setLoading(false);
                }
            }
            
                fetchProducts();

            async function fetchCategories(){
                try {
                    const categoryData = await getAllCategories();
                    setCategories(categoryData);
                    console.log(categoryData);
                } catch (error) {
                    setError(error.message);
                }
            }
            fetchCategories();

            async function fetchSubcategories(){
                try {
                    const subcategoryData = await getSubcategoriesWithCategory();
                    setSubcategories(subcategoryData);
                    console.log(subcategoryData);
                } catch (error) {
                    setError(error.message);
                }
            }
            fetchSubcategories();
        }, []);
    
        if (error) {
            return <div>Error: {error}</div>;
        }

    // Al momento de clickear un botón esto guarda la información del usuario y abre la modal que pertenece a ese botón
    const openModal = (product, type) => {
        setSelectedProduct(product);
        setModalType(type);
    };
    // Y esto cierra la modal y quita los datos del usuario seleccionado
    const closeModal = () => {
        setSelectedProduct(null);
        setModalType(null);
    };

    return(
        <Layout
        avatarOnClick={ () => {
            openModal(null, "user")
            setIsOpen(true)
        }} 
        >
            <TopSection
            sectionName={"Productos"}
            addButtonIcon={productsIcons.addProductIcon}
            addButtonText={"Agregar Producto"}
            createOnClick={ () => {
                openModal(null, "add")
                setIsOpen(true)
            }}
            filterOnClick={ () => {
                openModal(null, "filter")
                setIsOpen(true)
            }}
            />
            {/* Contenedor de la tabla */}
            <section className="max-h-[95%] max-w-full border border-gray-200 bg-[#f3eef5] rounded-xl shadow-md overflow-y-auto overflow-x-auto overflow-hidden
            dark:border-[#303033]">
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
                                    editButtonOnClick={() => {
                                        openModal(product, "edit")
                                        setIsOpen(true)
                                    }}
                                    deleteButtonOnClick={() => {
                                        openModal(product, "delete")
                                        setIsOpen(true)
                                    }}
                                    />
                                </th>
                            </tr>
                        ))}
                    </tbody>
                    ))}
                </table>
            </section>

            {/* Modales */}
            {modalType && (
                <Modal
                title={
                    modalType === "user"
                    ? "Configuración"
                    : modalType === "filter"
                    ? "Filtrar"
                    : modalType === "add"
                    ? "Agregar Producto"
                    : modalType === "edit"
                    ? "Editar Producto"
                    : "Eliminar Producto"
                }
                type={modalType}
                isOpen={isOpen}
                onClose={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                >
                {modalType === "user" &&(
                    <ProfileModal
                    onClose={() => {
                        closeModal()
                        setIsOpen(false)
                    }}
                    />
                )}
                {modalType === "filter" && (
                <FilterModal
                fieldName="Ingreso"
                onClose={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                >
                    {/* Ordenar Por Categoría */}
                    <SelectMenu
                    id={"order-by-category-menu"}
                    name={"order-by-category-menu"}
                    spanText={"Ordenar Por Categoria"}>
                            {categories.map((category) => (
                                <option 
                                key={category.category_id}
                                value={category.category_name}> 
                                    {category.category_name}
                                </option>
                            ))}
                    </SelectMenu>
                    {/* Ordenar Por Subcategoria */}
                    <SelectMenu
                    spanText={"Ordenar Por Subcategoria"}
                    id={"order-by-subcategory-menu"}
                    name={"order-by-subcategory-menu"}>
                        {subcategories.map((subcategory) => (
                            <option 
                            key={subcategory.subcategory_id}
                            value={subcategory.subcategory_name}> 
                                {subcategory.subcategory_name}
                            </option>
                        ))}
                    </SelectMenu>
                    {/* Ordenar por Stock */}
                    <SelectMenu
                    spanText={"Ordenar Por Stock"}
                    id={"order-by-stock-menu"}
                    name={"order-by-stock-menu"}>
                        <option value="minus of 20"> &lt; de 20 </option>
                        <option value="minus of 50"> &lt; de 50 </option>
                        <option value="minus of 100"> &lt; de 100 </option>
                        <option value="more than 100"> &gt; de 100 </option>
                    </SelectMenu>
                    {/* Ordenar por Tiempo de Garantía */}
                    <SelectMenu
                    spanText={"Ordenar Por Tiempo De Garantía"}
                    id={"order-by-warranty-menu"}
                    name={"order-by-warranty-menu"}>
                        <option value="minus of 6 months">  &lt; de 6 meses </option>
                        <option value="minus of 12 months"> &lt; de 12 Meses </option>
                        <option value="minus of 18 months"> &lt; de 18 Meses </option>
                        <option value="minus of 24 months"> &lt; de 24 Meses </option>
                    </SelectMenu>
                </FilterModal>
                )}
                {modalType === "add" && (
                <section className="flex flex-col items-center">
                    <form action="" className="flex flex-col gap-1">
                        <SelectMenu
                        width={"64"}
                        spanText={"Categoria"}>
                            {categories.map((category) => (
                                <option 
                                key={category.category_id}
                                value={category.category_name}> 
                                    {category.category_name} 
                                </option>
                            ))}
                        </SelectMenu>
                        <SelectMenu
                        width={"64"}
                        spanText={"Subcategoria"}>
                            {subcategories.map((subcategory) => (
                                <option 
                                key={subcategory.subcategory_id}
                                value={subcategory.subcategory_name}> 
                                    {subcategory.subcategory_name} 
                                </option>
                            ))}
                        </SelectMenu>
                        <FormField
                        labelText={"Modelo"}
                        placeholder={"Impresora HP z1455"} 
                        id={"model"}
                        />
                        <FormField
                        labelText={"Serial"}
                        placeholder={"10KQ340"} 
                        id={"serial"}
                        />
                        <SelectMenu
                        width={"64"}
                        spanText={"Tiempo De Garantía"}>
                            <option value="a"> 6 Meses </option>
                            <option value=""> 12 Meses </option>
                            <option value=""> 18 Meses </option>
                            <option value=""> 24 Meses </option>
                        </SelectMenu>
                        <div className="flex items-center justify-center p-3">
                            <span className="dark:text-white">o</span>
                        </div>
                        {/* Botón de leer codigó de barras */}
                        <section className="flex items-center justify-center">
                            <button className="flex items-center py-2 px-4 gap-2 border rounded-lg transition duration-300 
                            hover:bg-gray-300
                            dark:bg-[#2020226c] dark:hover:bg-[#2c2c2e] dark:border-[#101012]"
                            onClick={ () => {
                                closeModal()
                                setIsOpen(false)
                            }}>
                                <img src={productsIcons.barcodeIcon} alt="" className="dark:invert dark:brightness-0"/>
                                <span className="text-sm dark:text-white">Leer código de barras</span>
                            </button>
                        </section>
                    </form>

                    {/* Botones */}
                    <ConfirmCancelButtons 
                    cancelButtonOnClick={() => {
                        closeModal()
                        setIsOpen(false)
                    }}
                    confirmButtonOnClick={() => {
                        closeModal()
                        setIsOpen(false)
                    }}/>
                </section>
                )}
                {/* Modal para editar el producto */}
                {modalType === "edit" && 
                <section className="flex flex-col items-center">
                    <form action="" className="flex flex-col gap-2">
                        <FormField
                        labelText={"Modelo"}
                        placeholder={selectedProduct.product_details.product_detail_model}
                        id={"model"}
                        />
                        <FormField
                        labelText={"Marca"}
                        placeholder={selectedProduct.product_details.product_brands.product_brand_name}
                        id={"brand"}
                        />
                        <SelectMenu
                        spanText={"Tiempo de garantía"}>
                            <option value="a"> 6 Meses </option>
                            <option value=""> 12 Meses </option>
                            <option value=""> 18 Meses </option>
                            <option value=""> 24 Meses </option>
                        </SelectMenu>
                    </form>

                    {/* Botones */}
                    <ConfirmCancelButtons 
                    cancelButtonOnClick={() => {
                        closeModal()
                        setIsOpen(false)
                    }}
                    confirmButtonOnClick={() => {
                        closeModal()
                        setIsOpen(false)
                    }}/>
                </section>
                }

                {/* Modal para eliminar el producto */}
                {modalType === "delete" && (
                <section className="flex flex-col justify-center items-center">
                    <p className="dark:text-white">
                        ¿Seguro que deseas eliminar este Producto llamado
                        <strong> {selectedProduct.product_details.product_detail_model} </strong>?
                    </p>
                    
                    {/* Botones */}
                    {/* Botones */}
                    <ConfirmCancelButtons
                    cancelButtonOnClick={() => {
                        closeModal()
                        setIsOpen(false)
                    }}
                    confirmText="Eliminar"
                    confirmBgColor="red-600"
                    confirmButtonOnClick={() => {
                        closeModal()
                        setIsOpen(false)
                    }}/>
                </section>
                )}
                </Modal>
            )}
        </Layout>
    )
}