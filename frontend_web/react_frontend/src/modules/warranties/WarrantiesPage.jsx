// Hooks
import { useState } from "react";
import { useWarranties } from "./hooks/useWarranties";
// Iconos
import { warrantiesIcons} from "../../assets/icons/mainIcons";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import WarrantyCard from "./components/ui/WarrantyCard";
import TopSection from "../../globals/components/ui/TopSection";
// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddWarrantyModal from "./components/modals/AddWarrantyModal";
// import { warranties } from "../data/warranties";

export default function WarrantiesPage(){
    
    const { warranties, error, loading } = useWarranties();
    const [selectedWarranty, setSelectedWarranty] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [isOpen, setIsOpen] = useState(false);


    const openModal = (warranty, type) => {
        setSelectedWarranty(warranty);
        setModalType(type);
    };
    
    const closeModal = () => {
        setSelectedWarranty(null);
        setModalType(null);
    };

    return(
        <Layout
        avatarOnClick={ () => {
            openModal(null, "user")
            setIsOpen(true)
        }}>
            <TopSection 
            sectionName={"Garantías"}
            addButtonIcon={warrantiesIcons.addWarrantyIcon}
            addButtonText={"Agregar Garantía"}
            createOnClick={() => {
                openModal(null, "add")
                setIsOpen(true)
            }}
            filterOnClick={() => {
                openModal(null, "filter")
                setIsOpen(true)
            }}
            />
            {/* Contenedor de las cards de garantia */}
            <section className="max-h-[95%] flex flex-wrap gap-2 z-50 overflow-x-auto overflow-y-auto">
                {warranties.map((warranty) => (
                    <WarrantyCard
                    warrantyId={warranty.warranty_incidents_id}
                    warrantyRequirement={warranty.warranty_description}
                    warrantyCreateDate={warranty.warranty_date}
                    warrantyStatusIcon={warrantiesIcons.inprocessIcon}
                    warrantyStatus={warranty.warranty_status}
                    onClick={() => {
                        openModal(warranty, "info")
                        setIsOpen(true)
                    }}
                    />
                ))}
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
                    ? "Agregar Garantía"
                    : modalType === "info"
                    ? "Más Información"
                    : "Editar Garantía"
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
                        
                    </FilterModal>
                )}
                {modalType === "add" && (
                <AddWarrantyModal 
                onCloseModal={() => {
                    closeModal()
                    setIsOpen(false)
                }}/>
                )}

                {modalType === "info" && (
                    <address className="flex flex-col justify-center items-center not-italic gap-2">
                        <div className="flex flex-col items-center">
                            <span><strong>Nombre del cliente</strong></span>
                            <p>{selectedWarranty.warranty_customer}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span><strong>Teléfono</strong></span>
                            <p> {selectedWarranty.warranty_phone}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span><strong>Ciudad</strong></span>
                            <p> {selectedWarranty.warranty_city}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span><strong>Fecha De Creación</strong></span>
                            <p> {selectedWarranty.warranty_date}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span><strong>Requerimiento</strong></span>
                            <p> {selectedWarranty.warranty_description}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span><strong>Pruebas</strong></span>
                            <p>{selectedWarranty.warranty_link_attachments}</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <span><strong>Estado</strong></span>
                            <p>{selectedWarranty.warranty_status}</p>
                        </div>
                    </address>
                )}

                {/* Modal para editar el producto */}
                {modalType === "edit" && 
                <div className="flex flex-col items-center">
                    <form action="" className="flex flex-col gap-2">
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
                </Modal>
            )}
        </Layout>
    )
}