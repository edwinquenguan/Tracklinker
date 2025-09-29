import { useEffect, useState } from "react";
import { getAllWarranties } from "../../services/getAllWarranties";
import { warrantiesIcons} from "../../assets/icons/mainIcons";
import Layout from "../../components/Layout/Layout";
import Modal from "../../components/modals/Modal";
import FilterModal from "../../components/modals/FilterModal";
import ProfileModal from "../../components/modals/ProfileModal";
import FormField from "../../components/ui/FormField";
import WarrantyCard from "../../components/ui/WarrantyCard";
import TopSection from "../../components/ui/TopSection";
// import { warranties } from "../data/warranties";

export default function WarrantiesPage(){
    const [warranties, setWarranties] = useState([]);
    const [selectedWarranty, setSelectedWarranty] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Esto llama a la función getWarranties y espera a obtener toda los datos y los almacena en "data"
    useEffect(() => {
        async function fetchWarranties() {
            try {
                setLoading(true)
                const data = await getAllWarranties();
                setWarranties(data);
                console.log(data)
            } catch (error) {
                setError(error.message);
            }
        }

    fetchWarranties();
    }, []);

    const openModal = (warranty, type) => {
        setSelectedWarranty(warranty);
        setModalType(type);
    };
    // Y esto cierra la modal y quita los datos del usuario seleccionado
    const closeModal = () => {
        setSelectedWarranty(null);
        setModalType(null);
    };

    if(error) {

    }

    return(
        <Layout>
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
                    modalType === "filter"
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
                    <div className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-1">

                            <FormField
                            labelText={"Serial"}
                            placeholder={"10KQ34012414"} 
                            id={"serial"}
                            />

                            <FormField
                            labelText={"Modelo"}
                            placeholder={"10KQ3400"} 
                            id={"model"}
                            />

                            <FormField
                            labelText={"Nombre del Cliente"}
                            placeholder={"Miguel Arnulfo Pérez"} 
                            id={"customer"}
                            />

                            <span>Requerimiento</span>
                            <input 
                            type="text" 
                            name="requirement" 
                            id="requirement_input" 
                            placeholder="Escribe aqui el requerimiento..."
                            className="h-48 w-64 p-2 text-sm border rounded-lg text-clip"/>

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