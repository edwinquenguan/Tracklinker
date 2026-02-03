import { useState } from "react";
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import Layout from "../../globals/components/Layout/Layout";
import HelpForm from "./components/ui/HelpForm";

export default function HelpPage() {
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (type) => {
    setModalType(type);
  };

  const closeModal = () => {
    setModalType(null);
  };

  return (
    <Layout
      avatarOnClick={() => {
        openModal(null, "user");
        setIsOpen(true);
      }}
    >
      <h1 className="px-2 py-3 font-medium dark:text-white"> Informes </h1>
      {/* Contenedor del formulario */}
      <section className="h-[95%] flex items-center justify-center">
        <HelpForm />
      </section>

      {/* Modales */}
      {modalType && (
        <Modal
          title={modalType === "user" ? "Configuración" : ""}
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
        </Modal>
      )}
    </Layout>
  );
}
