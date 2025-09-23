import { useState } from "react";
import { productsIcons, actionsIcons } from "../assets/icons/mainIcons";
import { products } from "../data/products"
import Modal from "../components/modals/Modal";
import Layout from "../components/Layout/Layout";
import FormField from "../components/ui/FormField";
import TopSection from "../components/ui/TopSection";

export default function ProductsPage(){
    // Definir los estados y sus valores por defecto
    const [modalType, setModalType] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

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
        <Layout>
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
                    modalType === "filter"
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
                {modalType === "filter" && (
                    <select name="" id="">
                        <option value=""></option>
                    </select>
                )}
                {modalType === "add" && (
                    <div className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-1">
                            <FormField
                            labelText={"Nombre"}
                            placeholder={"Portatil HP"} 
                            id={"name"}
                            />

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

                            <label htmlFor=""> Tiempo de Garantía</label>
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
                )}
                {/* Modal para editar el producto */}
                {modalType === "edit" && 
                <div className="flex flex-col items-center">
                    <form action="" className="flex flex-col gap-2">
                        <FormField
                        labelText={"Modelo"}
                        placeholder={selectedProduct.model}
                        id={"model"}
                        />
                        <FormField
                        labelText={"Marca"}
                        placeholder={selectedProduct.brand}
                        id={"brand"}
                        />
                        <label htmlFor=""> Tiempo de Garantía</label>
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