import { useState, useEffect } from "react";
import { productsIcons, actionsIcons } from "../assets/icons/mainIcons";
// import { products } from "../data/products"
import Modal from "../components/modals/Modal";
import FilterModal from "../components/modals/FilterModal";
import ProfileModal from "../components/modals/ProfileModal";
import Layout from "../components/Layout/Layout";
import FormField from "../components/ui/FormField";
import TopSection from "../components/ui/TopSection";
import { getProducts } from "../services/getProducts";
import { getAllCategories } from "../services/getAllCategories";
import { getSubcategoriesWithCategory } from "../services/getSubcategoriesWithCategory";

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
                            <th className="font-medium text-start pl-2"> Fecha de Ingreso </th>
                            <th className="font-medium text-start pl-2"> Serial </th>
                            <th className="font-medium text-start pl-2"> Modelo </th>
                            <th className="font-medium text-start pl-2"> Descripción </th>
                            <th className="font-medium text-start pl-2"> Marca </th>
                            <th className="font-medium text-start pl-2"> Tiempo de Garantia </th>
                            <th className="font-medium text-start pl-2"> Acciones </th>
                        </tr>
                    </thead>

                    {/* Contenido de la tabla */}
                    <tbody className="font-normal dark:text-gray-300">
                        {/* Productos */}
                        {products.map((product) => (
                            // Datos de cada producto
                            <tr
                            key={product.product_details.product_brands.product_brand}
                            className="h-[50px] overflow-x-auto overflow-y-auto transition duration-500
                            hover:bg-[#cdcacf] hover:scale-[1.01]
                            dark:hover:bg-[#101012]">
                                
                                {/* Fecha de ingreso */}
                                <th className="font-normal text-start pl-6 text-sm
                                xl:text-base">  
                                    a
                                </th>
                                
                                {/* Serial */}
                                <th className="font-normal text-start pl-4 text-sm
                                xl:text-base">
                                    a 
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

                                {/* Tiempo de garantía */}
                                <th className="font-normal text-start pl-4 text-sm
                                xl:text-base"> 
                                    12 Meses 
                                </th>

                                {/* Botones */}
                                <th className="flex min-h-[60px] items-center justify-center gap-5">
                                    <button onClick={() => {
                                    openModal(product, "edit")
                                    setIsOpen(true)
                                    }}>
                                        <img src={actionsIcons.editInfoIcon} alt="" className="dark:invert" />
                                    </button>
                                    <button onClick={() => {
                                    openModal(product, "delete")
                                    setIsOpen(true)
                                    }}>
                                        <img src={actionsIcons.deleteIcon} alt="" className="dark:invert" />
                                    </button>
                                </th>
                            </tr>
                        ))}
                    </tbody>
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
                     onClose={() => {
                        closeModal()
                        setIsOpen(false)
                     }}
                    >
                        <section className="flex flex-col px-2 gap-1">
                            <span className="text-sm font-medium dark:text-white">Ordenar por tiempo de garantía: </span>
                            <select name="name-option" id="filter-name-option" className="p-2 rounded-lg border outline-none 
                            dark:bg-[#2020226c] dark:border-[#101012] dark:text-white">
                                <option value="a">  &lt; de 6 meses </option>
                                <option value=""> &lt; de 12 Meses </option>
                                <option value=""> &lt; de 18 Meses </option>
                                <option value=""> &lt; de 24 Meses </option>
                            </select>
                        </section>
                    </FilterModal>
                )}
                {modalType === "add" && (
                    <div className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-1">
                            
                            <span>Categoria</span>
                            <select name="warranty" id="warranty" className="p-2 border outline-none">
                                {categories.map((category) => (
                                    <option value={category.category_name}> {category.category_name} </option>
                                ))}
                            </select>

                            <span>Subcategoria</span>
                            <select name="warranty" id="warranty" className="p-2 border outline-none max-w-56">
                                {subcategories.map((subcategory) => (
                                    <option value={subcategory.subcategory_name}> {subcategory.subcategory_name} </option>
                                ))}
                            </select>

                            <FormField
                            labelText={"Modelo"}
                            placeholder={"10KQ3400"} 
                            id={"model"}
                            />

                            <FormField
                            labelText={"Serial"}
                            placeholder={"10KQ34012414"} 
                            id={"serial"}
                            />

                            <span> Tiempo de Garantía</span>
                            <select name="warranty" id="warranty" className="p-2 border outline-none">
                                <option value="a"> 6 Meses </option>
                                <option value=""> 12 Meses </option>
                                <option value=""> 18 Meses </option>
                                <option value=""> 24 Meses </option>
                            </select>
                                <div className="flex items-center justify-center p-3">
                                    <span>o</span>
                                </div>

                                <section className="flex items-center justify-center">
                                    <button className="flex items-center py-2 px-4 gap-2 border rounded-lg transition duration-300 
                                    hover:bg-gray-300"
                                    onClick={ () => {
                                        closeModal()
                                        setIsOpen(false)
                                    }}>
                                        <img src={productsIcons.barcodeIcon} alt="" />
                                        <span className="text-sm">Leer código de barras</span>  
                                    </button>
                                </section>
                        </form>

                        {/* Botones */}
                        <div className="flex gap-2 pt-5">
                            <button 
                                className="bg-black text-white px-5 py-3 rounded-xl shadow-xl text-sm transition duration-300 hover:text-gray-400" 
                                onClick={() =>{
                                    closeModal()
                                    setIsOpen(false)
                                }}>
                                    Confirmar
                            </button>
                            <button
                                className="px-5 py-3 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200" 
                                onClick={() =>{
                                    closeModal()
                                    setIsOpen(false)
                                }}>
                                    Cancelar
                            </button>
                        </div>
                    </div>
                )}
                {/* Modal para editar el producto */}
                {modalType === "edit" && 
                <div className="flex flex-col items-center">
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
                        <span htmlFor=""> Tiempo de Garantía</span>
                        <select name="warranty" id="warranty" className="p-2 border outline-none">
                            <option value="a"> 6 Meses </option>
                            <option value=""> 12 Meses </option>
                            <option value=""> 18 Meses </option>
                            <option value=""> 24 Meses </option>
                        </select>
                    </form>

                    {/* Botones */}
                    <div className="flex gap-2 pt-5">
                        <button 
                            className="bg-black text-white px-5 py-2 rounded-xl shadow-xl text-sm transition duration-300 hover:text-gray-400" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                Confirmar
                        </button>
                        <button
                            className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                Cancelar
                        </button>
                    </div>
                </div>
                }

                {/* Modal para eliminar el producto */}
                {modalType === "delete" && (
                    <div className="flex flex-col justify-center items-center">
                        <p>¿Seguro que deseas eliminar este Producto?</p>
                        
                        {/* Botones */}
                        <div className="flex pt-4 gap-5">
                            <button 
                            className="flex items-center gap-2 px-5 py-2 rounded-xl shadow-xl text-sm bg-red-600 text-white transition duration-300 hover:bg-red-700" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                <img src={actionsIcons.deleteIcon} alt="" className="w-[20px] h-[20px] invert" />
                                Eliminar
                            </button>
                            <button
                            className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                )}
                </Modal>
            )}
        </Layout>
    )
}