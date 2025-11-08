// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
// Componentes
import LoginForm from "./components/ui/LoginForm";
import ConfirmCancelButtons from "../../globals/components/modals/ConfirmCancelButtons";
// Modales
import Modal from "../../globals/components/modals/Modal";
import ErrorModal from "./components/modals/ErrorModal";
import RegisterModal from "./components/modals/RegisterModal";
import RecoverPasswordModal from "./components/modals/RecoverPasswordModal";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // Al momento de clickear un botón abre la modal que pertenece a ese botón
  const openModal = (type) => {
    setModalType(type);
  };
  // Y esto cierra la modal
  const closeModal = () => {
    setModalType(null);
  };

  // Esto hace el manejo del login para los errores y demás
  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await login(email, password);
    if (error) {
      openModal("error");
      setIsOpen(true);
    } else {
      navigate("/home");
    }
  };

  return (
    <LoginForm
      getIntoButtonOnclick={handleLogin}
      recoverButtonOnclick={() => {
        openModal("rememberPassword");
        setIsOpen(true);
      }}
      setEmail={(e) => setEmail(e.target.value)}
      setPassword={(e) => setPassword(e.target.value)}
    >
      {modalType && (
        <Modal
          title={
            modalType === "register"
              ? "Registrarse"
              : modalType === "rememberPassword"
                ? "Olvide Mi Contraseña"
                : ""
          }
          type={modalType}
          isOpen={isOpen}
          onClose={() => {
            closeModal();
            setIsOpen(false);
          }}
        >
          {modalType === "error" && (
            <ErrorModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}

          {modalType === "register" && (
            <section className="flex flex-col items-center">
              <RegisterModal />
              <ConfirmCancelButtons
                cancelButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
                confirmButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
              />
            </section>
          )}

          {modalType === "rememberPassword" && (
            <section className="flex flex-col items-center">
              <RecoverPasswordModal />
              <ConfirmCancelButtons
                flexDirection={"flex-col"}
                cancelText="Volver al login"
                cancelButtonWidth={"w-52"}
                cancelButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
                confirmText="Restablecer Contraseña"
                confirmButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
              />
            </section>
          )}
        </Modal>
      )}
    </LoginForm>
  );
}
