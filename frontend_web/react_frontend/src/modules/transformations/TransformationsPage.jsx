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
      <section className="max-h-[95%] flex flex-wrap gap-2 z-50 overflow-x-auto overflow-y-auto">
        {transformations.map((transformation) => (
          <TranformationCard
            transformationId={transformation.transformationId}
            transformationRequirement={transformation.transformationRequirement}
            transformationCreateDate={transformation.transformationCreateDate}
            transformationStatusIcon={warrantiesIcons.inprocessIcon}
            transformationStatus={transformation.transformationStatus}
            onClick={() => {
              openModal(transformation, "info");
              setIsOpen(true);
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
