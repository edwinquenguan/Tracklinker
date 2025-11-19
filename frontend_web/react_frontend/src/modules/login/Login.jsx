// Hooks
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
// Componentes
import LoginForm from "./components/ui/LoginForm";
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
    setIsOpen(true);
  };
  // Y esto cierra la modal
  const closeModal = () => {
    setModalType(null);
    setIsOpen(false);
  };

  // Esto hace el manejo del login para los errores y demás
  const handleLogin = async (e) => {
    e.preventDefault();
    const { error } = await login(email, password);
    if (error) {
      openModal("error");
    } else {
      navigate("/home");
    }
  };

  return (
    <section className="w-screen h-screen flex items-center justify-center">
      <LoginForm
        getIntoButtonOnclick={handleLogin}
        recoverButtonOnclick={() => {
          openModal("rememberPassword");
        }}
        setEmail={(e) => setEmail(e.target.value)}
        setPassword={(e) => setPassword(e.target.value)}
      ></LoginForm>
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
          onClose={() => closeModal()}
        >
          {modalType === "error" && 
          <ErrorModal onClose={() => closeModal()} />
          }

          {modalType === "register" && (
            <section className="flex flex-col items-center">
              <RegisterModal
                cancelButtonOnClick={() => closeModal()}
                confirmButtonOnClick={() => closeModal()}
              />
            </section>
          )}

          {modalType === "rememberPassword" && (
            <section className="flex flex-col items-center">
              <RecoverPasswordModal
                cancelButtonOnClick={() => closeModal()}
                confirmButtonOnClick={() => closeModal()}
              />
            </section>
          )}
        </Modal>
      )}
    </section>
  );
}
