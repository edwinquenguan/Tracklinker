// Hooks
import { useModal } from "../../globals/hooks/useModal";
// Components
import Layout from "../../globals/components/Layout/Layout";
import SectionsContainer from "./components/ui/SectionsContainer";
// Modals
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";

export default function HomePage() {
  const { modalType, isOpen, openModal, closeModal } = useModal();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <h1 className="h-[10%] p-5 text-5xl font-medium dark:text-white">
        Bienvenido, Agustín
      </h1>
      {/* Contenedor de las cards de los modúlos */}
      <SectionsContainer />

      {modalType && (
        <Modal
          title={modalType === "user" ? "Configuración" : ""}
          type={modalType}
          isOpen={isOpen}
          onClose={() => closeModal()}
        >
          {modalType === "user" && (
            <ProfileModal onClose={() => closeModal()} />
          )}
        </Modal>
      )}
    </Layout>
  );
}
