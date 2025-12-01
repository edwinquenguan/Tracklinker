// Hooks
import { useModal } from "../../globals/hooks/useModal";
// Iconos
import { actionsIcons } from "../../assets/icons/mainIcons";
// Componentes
import Modal from "../../globals/components/modals/Modal";
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
// Modales
import DownloadModal from "./components/modals/DownloadModal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import ChartsContainer from "./components/ui/ChartsContainer";

export default function DashBoardPage() {
  const { modalType, isOpen, openModal, closeModal } = useModal();

  return (
    <Layout avatarOnClick={() => openModal("user")}>
      <TopSection
        sectionName={"Panel De Control"}
        addButtonIcon={actionsIcons.uploadIcon}
        addButtonText={"Descargar"}
        createOnClick={() => openModal(null, "download")}
        filterOnClick={() => openModal(null, "filter")}
      />
      {/* Container de los gráficos */}
      <ChartsContainer />

      {/* Modales */}
      {modalType && (
        <Modal
          title={
            modalType === "filter"
              ? "Filtrar"
              : modalType === "user"
                ? "Configuración"
                : ""
          }
          type={modalType}
          isOpen={isOpen}
          onClose={() => closeModal()}
        >
          {modalType === "user" && (
            <ProfileModal onClose={() => closeModal()} />
          )}
          {modalType === "filter" && (
            <FilterModal onClose={() => closeModal()} />
          )}
          {modalType === "download" && <DownloadModal />}
        </Modal>
      )}
    </Layout>
  );
}
