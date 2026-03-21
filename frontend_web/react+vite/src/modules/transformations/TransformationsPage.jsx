// Hooks
import { useTransformations } from "./hooks/useTransformations";
import { useModal } from "../../globals/hooks/useModal";
// Iconos
import { actionsIcons } from "../../assets/icons/mainIcons";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import ActionButtons from "../../globals/components/ui/ActionButtons";
import TransformationsTable from "./components/ui/TransformationsTable";
// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddTransformationModal from "./components/modals/AddTransformationModal";
import EditTransformationModal from "./components/modals/EditTransformationModal";
import DeleteTransformationModal from "./components/modals/DeleteTransformationModal";

export default function TransformationsPage() {
  const { transformations, loading, error, fetchTransformations } =
    useTransformations();

  const { modalType, isOpen, modalData, refetch, openModal, closeModal } =
    useModal();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName="Transformaciones"
        addButtonIcon={actionsIcons.addIcon}
        addButtonText="Crear Transformación"
        createOnClick={() => openModal(null, "add")}
        filterOnClick={() => openModal(null, "filter")}
      />

      <TransformationsTable
        transformations={transformations}
        openModal={openModal}
        refetch={fetchTransformations}
        />

      {/* 
      {modalType && (
        <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={
            modalType === "user"
              ? "Configuración"
              : modalType === "filter"
                ? "Filtrar Transformaciones"
                : modalType === "add"
                  ? "Crear Transformación"
                  : modalType === "edit"
                    ? "Editar Transformación"
                    : modalType === "delete"
                      ? "Eliminar Transformación"
                      : modalType === "info"
                        ? "Más Información"
                        : ""
          }
        >
          {modalType === "user" && <ProfileModal onClose={closeModal} />}
          {modalType === "filter" && <FilterModal onClose={closeModal} />}

          {modalType === "add" && (
            <AddTransformationModal
              onClose={closeModal}
              fetch={fetchTransformations}
            />
          )}

          {modalType === "edit" && selectedTransformation && (
            <EditTransformationModal
              selectedTransformation={selectedTransformation}
              onClose={closeModal}
              onEditSuccess={fetchTransformations}
            />
          )}

          {modalType === "delete" && selectedTransformation && (
            <DeleteTransformationModal
              selectedTransformation={selectedTransformation}
              onClose={closeModal}
              onDeleteSuccess={fetchTransformations}
            />
          )}

          {modalType === "info" && selectedTransformation && (
            <address className="flex flex-col justify-center items-center not-italic gap-2">
              <div className="flex flex-col items-center">
                <span>
                  <strong>Modelo</strong>
                </span>
                <p>{selectedTransformation.product_detail_model}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Marca</strong>
                </span>
                <p>{selectedTransformation.product_brand_name}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Descripción</strong>
                </span>
                <p>{selectedTransformation.product_detail_description}</p>
              </div>
            </address>
          )}
          </Modal>
        )}
        */}
    </Layout>
  );
}
