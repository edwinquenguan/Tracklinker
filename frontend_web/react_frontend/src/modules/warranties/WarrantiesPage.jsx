// Hooks
import { useState, useEffect } from "react";

// Iconos
import { warrantiesIcons, actionsIcons } from "../../assets/icons/mainIcons";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
// Modales de servicio
import { getWarranties } from "./services/getWarranties";
import Modal from "../../globals/components/modals/Modal";

//  IMPORTS DE MODALES SEPARADOS
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddWarrantyModal from "./components/modals/AddWarrantyModal";
import EditWarrantyModal from "./components/modals/EditWarrantyModal";    
import DeleteWarrantyModal from "./components/modals/DeleteWarrantyModal"; 
import ActionButtons from "../../globals/components/ui/ActionButtons";
// ... (otras importaciones)

export default function WarrantiesPage() {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [warranties, setWarranties] = useState([]);
    const [selectedWarranty, setSelectedWarranty] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

 // 🔑 FUNCIÓN PARA RECARGAR DATOS
    const fetchWarranties = async () => {
        try {
            setLoading(true);
            const data = await getWarranties(); // Llama a tu servicio de obtención
            setWarranties(data);
        } catch (error) {
            console.error("Error al cargar garantías:", error);
        } finally {
            setLoading(false);
        }
    };
    
    // useEffect para la carga inicial
    useEffect(() => {
        fetchWarranties();
    }, []);
    

    const openModal = (warranty, type) => {
        setSelectedWarranty(warranty);
        setModalType(type);
        setIsOpen(true);
    };


    const closeModal = () => {
        setSelectedWarranty(null);
        setModalType(null);
        setIsOpen(false);
    };


    // ... (useEffect para fetchWarranties y lógica de carga/error)
    useEffect(() => {
        async function fetchWarranties() {
            try {
                setLoading(true);
                const data = await getWarranties();
                setWarranties(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        fetchWarranties();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }
    if (loading) {
        return <div>Cargando garantías...</div>;
    }

    return (
        <Layout
            avatarOnClick={() => openModal(null, "user")}
        >
            <TopSection
                sectionName={"Garantías"}
                addButtonIcon={warrantiesIcons.addWarrantyIcon}
                addButtonText={"Agregar Garantía"}
                createOnClick={() => openModal(null, "add")}
                filterOnClick={() => openModal(null, "filter")}
            />
            <section className="max-h-[93%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
                <ul className="pt-3 flex flex-col gap-1">
                    {/* Fila de encabezados fija */}
                    {/* ... (código de encabezados) ... */}
                    <li className="flex items-center p-5 font-bold bg-gray-200 dark:bg-gray-800 rounded-lg sticky top-0 z-10">
                        <div className="w-1/6"><p>Caso con Número</p></div>
                        <div className="w-2/6"><p>Descripción</p></div>
                        <div className="w-1/6"><p>Fecha</p></div>
                        <div className="w-1/6"><p>Icono</p></div>
                        <div className="w-1/6"><p>Estado</p></div>
                        <div className="w-1/6"><p>Cliente</p></div>
                        <div className="w-1/6"><p>Teléfono</p></div>
                        <div className="w-1/6"><p>Dirección</p></div>
                        <div className="w-1/6"><p>Ciudad</p></div>
                        <div className="w-1/6"><p>Serial Producto</p></div>
                        <div className="w-1/6"><p>Acción</p></div>
                    </li>

                    {/* Filas de datos */}
                    {warranties.map((warranty) => (
                        <li
                            className="flex items-center p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300 dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
                            key={warranty.warranty_incidents_id}
                        >
                            <div className="w-1/6"><p>{warranty.warranty_incidents_id}</p></div>
                            <div className="w-2/6"><p>{warranty.warranty_description}</p></div>
                            <div className="w-1/6"><p>{warranty.warranty_date}</p></div>
                            <div className="w-1/6">
                                <img src={warrantiesIcons.inprocessIcon} alt="Icono de estado" className="w-5 h-5 dark:invert" />
                            </div>
                            <div className="w-1/6"><p>{warranty.warranty_status}</p></div>
                            <div className="w-1/6"><p>{warranty.warranty_customer}</p></div>
                            <div className="w-1/6"><p>{warranty.warranty_phone}</p></div>
                            <div className="w-1/6"><p>{warranty.warranty_address}</p></div>
                            <div className="w-1/6"><p>{warranty.warranty_city}</p></div>
                            <div className="w-1/6"><p>{warranty.product_serial}</p></div>

                            {/* Botones de ACCIÓN: Llama a openModal con el tipo y la garantía */}
                            <div className="w-1/6 flex justify-center items-center">
                            <ActionButtons
                            editButtonOnClick={() =>openModal(warranty, "edit")}
                            deleteButtonOnClick={() => openModal(warranty, "delete")}
                            >
                                <button className="hover:scale-125 transition-all duration-00" onClick={() => openModal(warranty, "info")}>
                                    <img src={actionsIcons.moreInfoIcon} alt="Más Info" />
                                </button>
                            </ActionButtons>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Modales - RENDERING CON MODALES SEPARADOS */}
            {modalType && (
                <Modal
                    title={
                        modalType === "user"
                            ? "Configuración"
                            : modalType === "filter"
                                ? "Filtrar"
                                : modalType === "add"
                                    ? "Agregar Garantía"
                                    : modalType === "info"
                                        ? "Más Información"
                                        : modalType === "delete"
                                            ? "¿Eliminar Garantía?"
                                            : "Editar Garantía"
                    }
                    type={modalType}
                    isOpen={isOpen}
                    onClose={closeModal}
                >
                    {modalType === "user" && <ProfileModal onClose={closeModal} />}
                    {modalType === "filter" && <FilterModal onClose={closeModal} />}
                    {modalType === "add" && <AddWarrantyModal onCloseModal={closeModal} 
                        onAddSuccess={fetchWarranties}
                    />}

                    {/* Contenido del Modal de Más Información (se mantiene en línea por ser simple) */}
                    {modalType === "info" && selectedWarranty && (
                        <address className="flex flex-col justify-center items-center not-italic gap-2">
                            <div className="flex flex-col items-center"><span><strong>Nombre del cliente</strong></span><p>{selectedWarranty.warranty_customer}</p></div>
                            <div className="flex flex-col items-center"><span><strong>Teléfono</strong></span><p> {selectedWarranty.warranty_phone}</p></div>
                            <div className="flex flex-col items-center"><span><strong>Ciudad</strong></span><p> {selectedWarranty.warranty_city}</p></div>
                            <div className="flex flex-col items-center"><span><strong>Fecha De Creación</strong></span><p> {selectedWarranty.warranty_date}</p></div>
                            <div className="flex flex-col items-center"><span><strong>Requerimiento</strong></span><p> {selectedWarranty.warranty_description}</p></div>
                            <div className="flex flex-col items-center"><span><strong>Pruebas</strong></span><p>{selectedWarranty.warranty_link_attachments}</p></div>
                            <div className="flex flex-col items-center"><span><strong>Estado</strong></span><p>{selectedWarranty.warranty_status}</p></div>
                        </address>
                    )}

                    {/* USANDO COMPONENTES DE MODAL SEPARADOS */}
                    {modalType === "edit" && selectedWarranty && (
                        <EditWarrantyModal
                            selectedWarranty={selectedWarranty}
                            onClose={closeModal}
                            onEditSuccess={fetchWarranties}
                        />
                    )}
                    
                 {/* INTEGRACIÓN DEL MODAL DE ELIMINACIÓN */}
                    {modalType === "delete" && selectedWarranty && (
                        <DeleteWarrantyModal
                            selectedWarranty={selectedWarranty}
                            onClose={closeModal}
                            // PASAMOS LA FUNCIÓN DE RECARGA
                            onDeleteSuccess={fetchWarranties}
                            
                        />
                    )}
                </Modal>
            )}
        </Layout>
    );
}