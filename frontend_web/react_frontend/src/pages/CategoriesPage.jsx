import { useState } from "react";
import { categories } from "../data/categories";
import { actionsIcons } from "../assets/icons/mainIcons";
import Modal from "../components/modals/Modal";
import Layout from "../components/Layout/Layout";
import FormField from "../components/ui/FormField"
import TopSection from "../components/ui/TopSection";

export default function CategoriesPage(){
    // Definir los estados y sus valores por defecto
    const [modalType, setModalType] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Al momento de clickear un botón esto guarda la información del usuario y abre la modal que pertenece a ese botón
    const openModal = (category, type) => {
        setSelectedCategory(category);
        setModalType(type);
    };
    // Y esto cierra la modal y quita los datos del usuario seleccionado
    const closeModal = () => {
        setSelectedCategory(null);
        setModalType(null);
    }

    return(
        <Layout>
            <TopSection
            sectionName={"Categorias"}
            addButtonIcon={actionsIcons.addIcon}
            addButtonText={"Agregar Categoria"}
            createOnClick={ () => {
                openModal(null, "add")
                setIsOpen(true)
            }}
            filterOnClick={ () => {
                openModal(null, "filter")
                setIsOpen(true)
            }}
            />
            {/* Listado de categorias */}
                <ul className="min-h-[90%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {categories.map((category) => (
                    // Categorias
                        <li className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-xl">
                            <span className="text-2xl font-medium">{category.name}</span>
                            {/* Botones para interactuar */}
                            <nav className="flex gap-4">
                                <button onClick={() => {
                                    openModal(category, "info")
                                    setIsOpen(true)
                                    }}> 
                                    <img src={actionsIcons.moreInfoIcon} alt="" /> 
                                </button>
                                <button onClick={() => {
                                    openModal(category, "edit")
                                    setIsOpen(true)
                                    }}>
                                     <img src={actionsIcons.editInfoIcon} alt="" /> 
                                </button>
                                <button onClick={() => {
                                    openModal(category, "delete")
                                    setIsOpen(true)
                                    }}> 
                                    <img src={actionsIcons.deleteIcon} alt="" />
                                </button>
                            </nav>
                        </li>
                ))}
                </ul>
                
                {/* Modales */}
                {modalType && (
                    <Modal
                    title={
                        modalType === "filter"
                        ? "Filtrar"
                        : modalType === "add"
                        ? "Agregar Categoria"
                        : modalType === "info"
                        ? "Información de la categoría"
                        : modalType === "edit"
                        ? "Editar Categoria"
                        : "Eliminar Categoria"
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
                                placeholder={"Routers"} 
                                id={"name"}
                                />
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
                    {/* Modal para mas información de la categoria */}
                    {modalType === "info" && (
                        <div className="flex flex-col justify-center">
                            <p><strong>Nombre:</strong> {selectedCategory.name} </p>
                            <p><strong>Creada:</strong> {selectedCategory.createAt}</p>
                        </div>
                    )}
                    {/* Modal para editar la categoria */}
                    {modalType === "edit" && 
                    <div className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-2">
                            <FormField
                            labelText={"Nombre"}
                            placeholder={selectedCategory.name}
                            id={"name"}
                            />
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
    
                    {/* Modal para eliminar la categoria */}
                    {modalType === "delete" && (
                        <div className="flex flex-col justify-center items-center">
                            <p>¿Seguro que deseas eliminar la Categoria <strong>{selectedCategory.name}</strong>?</p>
                            
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