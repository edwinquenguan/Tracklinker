import { useState, useEffect } from "react";
import { getAllSuppliers } from "../services/getAllSuppliers";
import { actionsIcons } from "../assets/icons/mainIcons";
import { usersIcons } from "../assets/icons/mainIcons";
//import { suppliers } from "../data/suppliers";
import Modal from "../components/modals/Modal";
import Layout from "../components/Layout/Layout";
import FormField from "../components/ui/FormField";
import TopSection from "../components/ui/TopSection";

export default function SuppliersPage(){
    // Definir los estados y sus valores por defecto
    const [suppliers, setSuppliers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [selectedSupplier, setSelectedSupplier] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Esto llama a la función getAllSuppliers y espera a obtener data y los almacena en "data"
    useEffect(() => {
        async function fetchSuppliers() {
                    try {
                        setLoading(true)
                        const data = await getAllSuppliers();
                        setSuppliers(data);
                    } catch (error) {
                        setError(error.message);
                    } finally {
                        setLoading(false);
                    }
                }
        
            fetchSuppliers();
            }, []);

    if (loading) {
        //const supplierField = document.getElementById("user-field");
    }

    
    if (error) {
        return <div>Error: {error}</div>;
    }

    // Al momento de clickear un botón esto guarda la información del Proveedor y abre la modal que pertenece a ese botón
    const openModal = (supplier, type) => {
        setSelectedSupplier(supplier);
        setModalType(type);
    };
    // Y esto cierra la modal y quita los datos del Proveedor seleccionado
    const closeModal = () => {
        setSelectedSupplier(null);
        setModalType(null);
    }

    return(
        <Layout>
            <TopSection
            sectionName={"Proveedores"}
            addButtonIcon={actionsIcons.addIcon}
            addButtonText={"Agregar Proveedor"}
            createOnClick = {() =>{
                openModal(null, "add")
                setIsOpen(true)
            }}
            filterOnClick={() => {
                openModal(null, "filter")
                setIsOpen(true)
            }}
            />
            {/* Listado de proveedores */}
            <ul className="max-h-[95%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {suppliers.map((supplier) => (    
                    <li 
                    className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-xl shadow-md"
                    hey={supplier.supplier_id}
                    id="user-field">
                        <article className="flex">
                            <address className="flex gap-5 not-italic font-medium">
                                <p className="text-[22px]">{supplier.supplier_name}</p>
                                <div className="flex items-center">
                                    <img src={usersIcons.phoneIcon} alt="" className="w-5 h-5" />
                                    <p>{supplier.supplier_phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={usersIcons.rolIcon} alt="" className="w-5 h-5" />
                                    <p>{supplier.supplier_address}</p>
                                </div>
                            </address>
                        </article>
                        {/* Botones para interactuar */}
                        <nav className="flex gap-4">
                            <button onClick={() => {
                                    openModal(supplier, "info")
                                    setIsOpen(true)
                                    }}> 
                                    <img src={actionsIcons.moreInfoIcon} alt="" /> 
                            </button>
                            <button onClick={() => {
                                    openModal(supplier, "edit")
                                    setIsOpen(true)
                                    }}> 
                                    <img src={actionsIcons.editInfoIcon} alt="" /> 
                            </button>
                            <button onClick={() => {
                                    openModal(supplier, "delete")
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
                    ? "Agregar Proveedor"
                    : modalType === "info"
                    ? "Información del Proveedor"
                    : modalType === "edit"
                    ? "Editar Proveedor"
                    : "Eliminar Proveedor"
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
                            placeholder={"Lenovo"} 
                            id={"name"}
                            />

                            <FormField
                            labelText={"Número"}
                            placeholder={"300012124"} 
                            id={"phone"}
                            />

                            <FormField
                            labelText={"Dirección"}
                            placeholder={"KR 124 # 12-124"} 
                            id={"address"}
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
                {/* Modal para mas información del Proveedor */}
                {modalType === "info" && (
                    <div className="flex flex-col justify-center">
                        <p><strong>Nombre:</strong> {selectedSupplier.supplier_name}</p>
                        <p><strong>Ciudad:</strong> {selectedSupplier.supplier_city}</p>
                        <p><strong>Teléfono:</strong> {selectedSupplier.supplier_phone}</p>
                        <p><strong>Dirección:</strong> {selectedSupplier.supplier_address}</p>
                        <p><strong>Fecha De Creación:</strong> {selectedSupplier.supplier_date}</p>
                    </div>
                )}

                {/* Modal para editar el Proveedor */}
                {modalType === "edit" && 
                <div className="flex flex-col items-center">
                    <form action="" className="flex flex-col gap-2">
                        <FormField
                        labelText={"Nombre"}
                        placeholder={selectedSupplier.name}
                        id={"name"}
                        />
                        <FormField
                        labelText={"Ciudad"}
                        placeholder={selectedSupplier.city}
                        id={"city"}
                        />
                        <FormField
                        labelText={"Número"}
                        placeholder={selectedSupplier.phone}
                        id={"phone"}
                        />
                        <FormField
                        labelText={"Dirección"}
                        placeholder={selectedSupplier.address}
                        id={"address"}
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

                {/* Modal para eliminar el Proveedor */}
                {modalType === "delete" && (
                    <div className="flex flex-col justify-center items-center">
                        <p>¿Seguro que deseas eliminar a <span className="font-medium">{selectedSupplier.name}</span>?</p>
                        
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