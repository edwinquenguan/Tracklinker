import { useState, useEffect } from "react";
import { getAllCategories } from "../../services/getAllCategories";
// import { categories } from "../data/categories";
import { actionsIcons } from "../../assets/icons/mainIcons";
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import ActionButtons from "../../globals/components/ui/ActionButtons";
import ConfirmCancelButtons from "../../globals/components/modals/ConfirmCancelButtons";
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
        <Layout
        avatarOnClick={ () => {
            openModal(null, "user")
            setIsOpen(true)
        }}>
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
                        className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-lg shadow-md transition duration-300
                        dark:bg-[#0f0f11] dark:hover:bg-[#212125] dark:text-white"
                        key={category.category_id}>
                            <span className="text-2xl font-medium">{category.category_name}</span>
                            {/* Botones para interactuar */}
                            <nav className="flex gap-4">
                            <ActionButtons
                                editButtonOnClick={() => {
                                    openModal(category, "edit")
                                    setIsOpen(true)
                                }}
                                deleteButtonOnClick={() => {
                                    openModal(category, "delete")
                                    setIsOpen(true)
                                }}
                                >
                                    {/* Botón de más información del usuario */}
                                    <button onClick={() => {
                                        openModal(category, "info")
                                        setIsOpen(true)
                                    }}> 
                                        <img src={actionsIcons.moreInfoIcon} alt="" /> 
                                    </button>
                                </ActionButtons>
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
                        : modalType === "user"
                        ? "Configuración"
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
                    onClose={ () => {
                        closeModal()
                        setIsOpen(false)
                    }}
                    >
                    
                    </FilterModal>
                    )}
                    {modalType === "add" && (
                    <section className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-1">
                            <FormField
                            labelText={"Nombre"}
                            placeholder={"Routers"} 
                            id={"name"}
                            />
                        </form>

                        {/* Botones */}
                        <ConfirmCancelButtons
                        confirmText={"Confirmar"}
                        confirmBgColor="black"

                        cancelText={"Cancelar"}
                        confirmButtonOnClick={() => {
                            closeModal()
                            setIsOpen(false)
                        }}
                        />
                    </section>
                    )}
                    {/* Modal para mas información de la categoria */}
                    {modalType === "info" && (
                    <section className="flex flex-col justify-center dark:text-white">
                        <p><strong>Nombre:</strong> {selectedCategory.category_name} </p>
                        <p><strong>Creada:</strong> {selectedCategory.category_date}</p>
                    </section>
                    )}
                    {/* Modal para editar la categoria */}
                    {modalType === "edit" && 
                    <section className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-2">
                            <FormField
                            labelText={"Nombre"}
                            placeholder={selectedCategory.category_name}
                            id={"name"}
                            />
                        </form>
    
                        {/* Botones */}
                        <ConfirmCancelButtons
                        confirmText={"Confirmar"}
                        confirmBgColor="black"
                        cancelText={"Cancelar"}
                        confirmButtonOnClick={() => {
                            closeModal()
                            setIsOpen(false)
                        }}
                        />
                    </section>
                    }
    
                    {/* Modal para eliminar la categoria */}
                    {modalType === "delete" && (
                    <section className="flex flex-col justify-center items-center dark:text-white">
                        <p>¿Seguro que deseas eliminar la Categoria <strong>{selectedCategory.category_name}</strong>?</p>
                        
                        {/* Botones */}
                        <ConfirmCancelButtons
                        confirmText={"Eliminar"}
                        confirmBgColor="red-600"
                        cancelText={"Cancelar"}
                        confirmButtonOnClick={() => {
                            closeModal()
                            setIsOpen(false)
                        }}
                        />
                    </section>
                    )}
                    </Modal>
                )}
        </Layout>
    )
}