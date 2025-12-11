// States
import { useState } from "react";
// Iconos
import { actionsIcons, warrantiesIcons } from "../../assets/icons/mainIcons";
// Información
import { transformations } from "./data/transformations";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import TranformationCard from "./components/ui/TransformationCard";
// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddTransformationModal from "./components/modals/AddTransformationModal";
import MoreInfoModal from "./components/modals/MoreInfoModal";
import ActionButtons from "../../globals/components/ui/ActionButtons";

export default function TransformationsPage() {
  const [selectedTranformation, setSelectedTransformation] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (transformation, type) => {
    setSelectedTransformation(transformation);
    setModalType(type);
  };
  // Y esto cierra la modal y quita los datos
  const closeModal = () => {
    setSelectedTransformation(null);
    setModalType(null);
  };

  return (
    <Layout
      avatarOnClick={() => {
        openModal(null, "user");
        setIsOpen(true);
      }}
    >
      <TopSection
        sectionName={"Transformaciones"}
        addButtonIcon={actionsIcons.addIcon}
        addButtonText={"Crear Transformación"}
        createOnClick={() => {
          openModal(null, "add");
          setIsOpen(true);
        }}
        filterOnClick={() => {
          openModal(null, "filter");
          setIsOpen(true);
        }}
      />
      
      {/* Contendor de las transformaciones */}
      <section className="max-h-[80%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
         <ul className="pt-3 flex flex-col gap-1">
              {/* Fila de encabezados fija */}
                    {/* ... (código de encabezados) ... */}
                    <li className="flex items-center p-5 font-bold bg-gray-200 dark:bg-gray-800 rounded-lg sticky top-0 z-10">
                        <div className="w-1/5 text-center"><p>Orden de salida</p></div>
                        <div className="w-1/5 text-center"><p>Tranformación de producto</p></div>
                        <div className="w-1/5 text-center"><p>Fecha</p></div>
                        <div className="w-1/5 text-center"><p>Estatus</p></div>
                        <div className="w-1/5 text-center"><p>Acciones</p></div>
                        
                    </li>
              {transformations.map((transformation) => (
              <li
                className="flex items-center p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300 dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
                key={transformation.transformationId}
              >
                <div  className="w-1/5 text-center"><p>{transformation.transformationId}</p></div>
                <div  className="w-1/5 text-center"><p>{transformation.transformationRequirement}</p></div>
                <div  className="w-1/5 text-center"><p>{transformation.transformationCreateDate}</p></div>
                <div  className="w-1/5 text-center"><p>{transformation.transformationStatus}</p></div>
                {/* Botones de ACCIÓN: Llama a openModal con el tipo y la garantía */}
                <div className="w-1/6 text-center flex justify-center items-center">
                  <ActionButtons
                    editButtonOnClick={() =>openModal(transformation, "edit")}
                    deleteButtonOnClick={() => openModal(transformation, "delete")}
                    >
                    <button className="hover:scale-125 transition-all duration-00" onClick={() => openModal(transformation, "info")}>
                      <img src={actionsIcons.moreInfoIcon} alt="Más Info" />
                    </button>
                  </ActionButtons>
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
                  ? "Crear Transformación"
                  : modalType === "info"
                    ? "Más Información"
                    : "Editar Tranformación"
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
            />
          )}
          {modalType === "add" && (
            <AddTransformationModal
              onCloseModal={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}

          {modalType === "info" && (
            <MoreInfoModal
              transformationId={selectedTranformation.transformationId}
              customerName={selectedTranformation.transformationCustomer}
              phone={selectedTranformation.transformationPhone}
              city={selectedTranformation.transformationCity}
              email={selectedTranformation.transformationEmail}
              date={selectedTranformation.transformationCreateDate}
              requirement={selectedTranformation.transformationRequirement}
              status={selectedTranformation.transformationStatus}
              onCloseModal={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
