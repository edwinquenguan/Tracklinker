// Hooks
import { useState, useEffect } from "react";
import { useWarranties } from "./hooks/useWarranties";
// Iconos
import { warrantiesIcons, actionsIcons } from "../../assets/icons/mainIcons";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import WarrantyCard from "./components/ui/WarrantyCard";
import TopSection from "../../globals/components/ui/TopSection";
// Modales
import { getWarranties } from "./services/getWarranties";
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddWarrantyModal from "./components/modals/AddWarrantyModal";
import { data } from "react-router-dom";
// import { warranties } from "../data/warranties";

export default function WarrantiesPage() {
   const [error, setError] = useState(null);
   const [loading, setLoading] = useState(true);
   const [warranties, setWarranties] = useState([]);
   
  ;
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

  // Este effect llama a la función getWarranties cuando el componente se monta
  useEffect(() =>{
    async function fetchWarranties() {
      try {
        setLoading(true);
        const data = await getWarranties();
        setWarranties(data);
      } catch (error){
           setError(error.message);
        }
      }

      fetchWarranties();
    }, []);

      if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Layout
      avatarOnClick={() => {
        openModal(null, "user");
        setIsOpen(true);
      }}
    >
      <TopSection
        sectionName={"Garantías"}
        addButtonIcon={warrantiesIcons.addWarrantyIcon}
        addButtonText={"Agregar Garantía"}
        createOnClick={() => {
          openModal(null, "add");
          setIsOpen(true);
        }}
        filterOnClick={() => {
          openModal(null, "filter");
          setIsOpen(true);
        }}
      />
<section className="max-h-[93%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
  <ul className="pt-3 flex flex-col gap-1">

    {/* Fila de encabezados fija */}
    <li
      className="flex items-center p-5 font-bold
                 bg-gray-200 dark:bg-gray-800 rounded-lg
                 sticky top-0 z-10"
    >
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
        className="flex items-center p-5 bg-[#f3eef5] rounded-lg shadow-md
                   transition duration-300 dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
        key={warranty.warranty_incidents_id}
      >
        <div className="w-1/6"><p>{warranty.warranty_incidents_id}</p></div>
        <div className="w-2/6"><p>{warranty.warranty_description}</p></div>
        <div className="w-1/6"><p>{warranty.warranty_date}</p></div>

        <div className="w-1/6">
          <img
            src={warrantiesIcons.inprocessIcon}
            alt=""
            className="w-5 h-5  dark:invert"
          />
        </div>

        <div className="w-1/6"><p>{warranty.warranty_status}</p></div>
        <div className="w-1/6"><p>{warranty.warranty_customer}</p></div>
        <div className="w-1/6"><p>{warranty.warranty_phone}</p></div>
        <div className="w-1/6"><p>{warranty.warranty_address}</p></div>
        <div className="w-1/6"><p>{warranty.warranty_city}</p></div>
        <div className="w-1/6"><p>{warranty.product_serial}</p></div>
        
       <div className="w-1/6 flex justify-center items-center">
          <img
            src={actionsIcons.moreInfoIcon}
            alt=""
          />
          <img
            src={warrantiesIcons.editIcon}
            alt=""
          />
        </div>
        
      </li>
    ))}
  </ul>
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
            closeModal();
            setIsOpen(false);
          }}
        >
          {modalType === "user" && (
            <ProfileModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}
          {modalType === "filter" && (
            <FilterModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            ></FilterModal>
          )}
          {modalType === "add" && (
            <AddWarrantyModal
              onCloseModal={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}

          {modalType === "info" && (
            <address className="flex flex-col justify-center items-center not-italic gap-2">
              <div className="flex flex-col items-center">
                <span>
                  <strong>Nombre del cliente</strong>
                </span>
                <p>{selectedWarranty.warranty_customer}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Teléfono</strong>
                </span>
                <p> {selectedWarranty.warranty_phone}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Ciudad</strong>
                </span>
                <p> {selectedWarranty.warranty_city}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Fecha De Creación</strong>
                </span>
                <p> {selectedWarranty.warranty_date}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Requerimiento</strong>
                </span>
                <p> {selectedWarranty.warranty_description}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Pruebas</strong>
                </span>
                <p>{selectedWarranty.warranty_link_attachments}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Estado</strong>
                </span>
                <p>{selectedWarranty.warranty_status}</p>
              </div>
            </address>
          )}

          {/* Modal para editar el producto */}
          {modalType === "edit" && (
            <div className="flex flex-col items-center">
              <form action="" className="flex flex-col gap-2"></form>

              {/* Botones */}
              <div className="flex gap-2 pt-5">
                <button
                  className="bg-black text-white px-5 py-2 rounded-xl shadow-xl text-sm transition duration-300 hover:text-gray-400"
                  onClick={() => {
                    closeModal();
                    setIsOpen(false);
                  }}
                >
                  Confirmar
                </button>
                <button
                  className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200"
                  onClick={() => {
                    closeModal();
                    setIsOpen(false);
                  }}
                >
                  Cancelar
                </button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </Layout>
  );
}
