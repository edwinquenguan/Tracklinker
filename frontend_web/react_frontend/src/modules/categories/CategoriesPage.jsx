import { useState, useEffect } from "react";
import { getAllCategories } from "../../services/getAllCategories";
// import { categories } from "../data/categories";
import { actionsIcons } from "../../assets/icons/mainIcons";
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import Layout from "../../globals/components/Layout/Layout";
import FormField from "../../globals/components/ui/FormField"
import TopSection from "../../globals/components/ui/TopSection";

export default function CategoriesPage(){
    // Definir los estados y sus valores por defecto
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        async function fetchCategories() {
                    try {
                        setLoading(true)
                        const data = await getAllCategories();
                        setCategories(data);
                    } catch (error) {
                        setError(error.message);
                    }
                }
                
                fetchCategories();
        }, []);
        
    if (error) {
        return <div>Error: {error}</div>;
    }

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
            <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
                <ul className="pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {categories.map((category) => (
                    // Categorias
                        <li 
                        className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-xl"
                        key={category.category_id}>
                            <span className="text-2xl font-medium">{category.category_name}</span>
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
            </section>
                
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
                        <FilterModal
                        onClose={ () => {
                            closeModal()
                            setIsOpen(false)
                        }}
                        >
                        
                        </FilterModal>
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
                            <p><strong>Nombre:</strong> {selectedCategory.category_name} </p>
                            <p><strong>Creada:</strong> {selectedCategory.category_date}</p>
                        </div>
                    )}
                    {/* Modal para editar la categoria */}
                    {modalType === "edit" && 
                    <div className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-2">
                            <FormField
                            labelText={"Nombre"}
                            placeholder={selectedCategory.category_name}
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
                            <p>¿Seguro que deseas eliminar la Categoria <strong>{selectedCategory.category_name}</strong>?</p>
                            
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