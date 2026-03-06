// Hooks
import { useModal } from "../../globals/hooks/useModal";
import { useWarranties } from "./hooks/useWarranties";
// Iconos
import { warrantiesIcons } from "../../assets/icons/mainIcons";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import WarrantiesTable from "./components/ui/WarrantiesTable";
// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddWarrantyModal from "./components/modals/AddWarrantyModal";
import EditWarrantyModal from "./components/modals/EditWarrantyModal";
import DeleteWarrantyModal from "./components/modals/DeleteWarrantyModal";
import MoreWarrantyInfo from "./components/modals/MoreWarrantyInfo";

export default function WarrantiesPage() {
  const { isOpen, modalData, modalType, refetch, openModal, closeModal } =
    useModal();
  const { warranties, fetchWarranties } = useWarranties();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName={"Garantías"}
        addButtonIcon={warrantiesIcons.addWarrantyIcon}
        addButtonText={"Agregar Garantía"}
        createOnClick={() => openModal(null, "add")}
        filterOnClick={() => openModal(null, "filter")}
      />
      <WarrantiesTable
        warranties={warranties}
        openModal={openModal}
        refetch={refetch}
      />

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
          {modalType === "add" && (
            <AddWarrantyModal
              onCloseModal={closeModal}
              onAddSuccess={fetchWarranties}
            />
          )}
          {/* Contenido del Modal de Más Información */}
          {modalType === "info" && <MoreWarrantyInfo modalData={modalData} />}
          {/* Modal para editar una garantía */}
          {modalType === "edit" && (
            <EditWarrantyModal
              selectedWarranty={modalData}
              onClose={closeModal}
              onEditSuccess={fetchWarranties}
            />
          )}
          {/* Modal para eliminar una garantía */}
          {modalType === "delete" && (
            <DeleteWarrantyModal
              selectedWarranty={modalData}
              onClose={closeModal}
              onDeleteSuccess={fetchWarranties}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
