// Hooks
import { useModal } from "../../globals/hooks/useModal";
import { useLogin } from "./hooks/useLogin";
// Componentes
import LoginForm from "./components/ui/LoginForm";
// Modales
import Modal from "../../globals/components/modals/Modal";
import ErrorModal from "./components/modals/ErrorModal";
import RecoverPasswordModal from "./components/modals/RecoverPasswordModal";

export default function Login() {
  const { modalType, isOpen, openModal, closeModal } = useModal();
  const { setEmail, setPassword, handleLogin } = useLogin(openModal);

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      {/* Formulario */}
      <LoginForm
        getIntoButtonOnclick={handleLogin}
        recoverButtonOnclick={() => {
          openModal(null, "rememberPassword");
        }}
        setEmail={(e) => setEmail(e.target.value)}
        setPassword={(e) => setPassword(e.target.value)}
      />
      {modalType && (
        <Modal
          title={modalType === "rememberPassword" ? "Olvide Mi Contraseña" : ""}
          type={modalType}
          isOpen={isOpen}
          onClose={() => closeModal()}
        >
          {modalType === "error" && <ErrorModal onClose={() => closeModal()} />}

          {modalType === "rememberPassword" && (
            <RecoverPasswordModal
              cancelButtonOnClick={() => closeModal()}
              confirmButtonOnClick={() => closeModal()}
            />
          )}
        </Modal>
      )}
    </section>
  );
}
