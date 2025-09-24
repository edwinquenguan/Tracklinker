import { useState, useEffect } from "react";
// import { subcategories } from "../data/subcategories"
import { actionsIcons } from "../assets/icons/mainIcons";
import { asideIcons } from "../assets/icons/asideIcons";
import { getSubcategoriesWithCategory } from "../services/getSubcategoriesWithCategory";
import Layout from "../components/Layout/Layout";
import Modal from "../components/modals/Modal";
import FilterModal from "../components/modals/FilterModal";
import FormField from "../components/ui/FormField"
import TopSection from "../components/ui/TopSection";

export default function SubcategoriesPage(){
    // Definir los estados y sus valores por defecto
    const [subcategories, setSubcategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [selectedSubcategory, setSelectedSubcategory] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

     useEffect(() => {
        async function fetchSubcategories() {
                try {
                    setLoading(true)
                    const data = await getSubcategoriesWithCategory();
                    setSubcategories(data);
                    console.log(data)
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
    const openModal = (subcategory, type) => {
        setSelectedSubcategory(subcategory);
        setModalType(type);
    };
    // Y esto cierra la modal y quita los datos del usuario seleccionado
    const closeModal = () => {
        setSelectedSubcategory(null);
        setModalType(null);
    }
    return(
        <Layout>
            <TopSection
            sectionName={"Subcategorias"}
            addButtonIcon={actionsIcons.addIcon}
            addButtonText={"Agregar Subcategoria"}
            createOnClick = {() =>{
                openModal(null, "add")
                setIsOpen(true)
            }}
            filterOnClick={() => {
                openModal(null, "filter")
                setIsOpen(true)
            }}
            />
            {/* Listado de subcategorias */}
            <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
                <ul className="pt-3 flex flex-col gap-1">
                {subcategories.map((subcategory) => (
                    // Categorias
                        <li 
                        key={subcategory.subcategory_id}
                        className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-xl">
                            <section className="flex gap-6">
                                <span className="text-2xl font-medium">{subcategory.subcategory_name}</span>
                                <div className="flex items-center gap-1 justify-center">
                                    <img src={asideIcons.categoriesIcon} alt="" className="invert brightness-200" />
                                    <span className="font-medium">{subcategory.categories.category_name}</span>
                                </div>
                            </section>
                            {/* Botones para interactuar */}
                            <nav className="flex gap-4">
                                <button onClick={() => {
                                    openModal(subcategory, "info")
                                    setIsOpen(true)
                                    }}>
                                    <img src={actionsIcons.moreInfoIcon} alt="" /> 
                                </button>
                                <button onClick={() => {
                                    openModal(subcategory, "edit")
                                    setIsOpen(true)
                                    }}>
                                    <img src={actionsIcons.editInfoIcon} alt="" /> 
                                </button>
                                <button onClick={() => {
                                    openModal(subcategory, "delete")
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
                        ? "Agregar Subcategoria"
                        : modalType === "info"
                        ? "Información de la subcategoría"
                        : modalType === "edit"
                        ? "Editar Subcategoria"
                        : "Eliminar Subcategoria"
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
                                placeholder={"Impresoras a color"} 
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
                            <p><strong>Creada:</strong> {selectedSubcategory.subcategory_date}</p>
                            <p><strong>Nombre:</strong> {selectedSubcategory.subcategory_name} </p>
                            <p><strong>Categoria a la que pertenece:</strong> {selectedSubcategory.categories.category_name}</p>
                        </div>
                    )}
                    {/* Modal para editar la categoria */}
                    {modalType === "edit" && 
                    <div className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-2">
                            <FormField
                            labelText={"Nombre"}
                            placeholder={selectedSubcategory.subcategory_name}
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
                            <p>¿Seguro que deseas eliminar la Subcategoria <strong>{selectedSubcategory.subcategory_name}</strong>?</p>
                            
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