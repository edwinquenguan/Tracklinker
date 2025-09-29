import { useState } from "react";
import { signUp, signOut, signIn, getUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";
import { loginIcons } from "../../assets/icons/loginIcons";
import Modal from "../../globals/components/modals/Modal";
import ErrorModal from "./components/modals/ErrorModal";
import RegisterModal from "./components/modals/RegisterModal";
import RecoverPasswordModal from "./components/modals/RecoverPasswordModal";
import ConfirmCancelButtons from "../../globals/components/modals/ConfirmCancelButtons";

export default function Login(){
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
        const { error } = await signIn(email, password);
        if (error) {
            openModal("error");
            setIsOpen(true)
        } else {
            navigate("/home");
        }
    };

    // esto hace el manejo del registro
    const handleRegister = async (e) => {
        e.preventDefault();
        const { error } = await signUp(email, password);
        if (error) {
            openModal("register");
            setIsOpen(true)
        } else {
            alert("Registro exitoso 🎉 Revisa tu correo para confirmar la cuenta");
        }
    };


    return(
        <section className="w-[100%] h-[100%] flex place-items-center justify-center">
            <section className="flex flex-col min-w-[600px] items-center p-4 bg-neutral-200 shadow-[0px_0px_20px_5px_#e5e5e5] rounded-2xl
            dark:bg-black dark:border-[#101012] dark:shadow-[0px_0px_20px_-2px_#2020226c]">
                <img 
                src={loginIcons.tracklinkerIcon} 
                alt="" 
                className="w-[150px] h-[150px] dark:invert dark:brightness-0"/>
                <form className="flex flex-col gap-2" >
                    <section className="flex pl-4 py-3 gap-2 items-center bg-white rounded-lg
                    dark:bg-[#2020226c] dark:border-[#101012]">
                        <img src={loginIcons.userIcon} alt="" className="w-6 h-6 dark:invert"/>
                        <input 
                        value={email}
                        id="email-input"
                        type="text" 
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="px-2 py-1 text-sm outline-none dark:bg-transparent dark:border-[#101012] dark:text-white"/>
                    </section>
                    <section className="flex pl-4 py-3 gap-2 items-center bg-white rounded-lg
                    dark:bg-[#2020226c] dark:border-[#101012]">
                        <img src={loginIcons.hidePasswordIcon} alt="" className="w-6 h-6 dark:invert"/>
                        <input 
                        value={password} 
                        type="password" 
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)} 
                        className="px-2 py-1 text-sm outline-none dark:bg-transparent dark:border-[#101012] dark:text-white"/>
                    </section>
                    <section>
                        <button
                        type="button"
                        onClick={() => {
                            openModal("rememberPassword");
                            setIsOpen(true)
                        }}
                        className="text-sm dark:text-white">
                            ¿Olvidaste tu Contraseña?
                        </button>
                    </section>
                    <section className="flex flex-col p-3 gap-2">
                        <button
                        onClick={handleLogin}
                        className="flex justify-center px-8 py-4 text-base text-white bg-blue-700 rounded-xl transition duration-300
                        hover:shadow-2xl
                       dark:hover:shadow-[0px_0px_20px_-10px_#1d4ed8]">
                            Ingresar
                        </button>
                        <button 
                        onClick={handleRegister}
                        className="flex justify-center px-8 py-4 text-base rounded-xl transition duration-300
                        hover:shadow-md hover:shadow-gray-400
                        dark:text-white dark:hover:shadow-[0px_0px_20px_0px_#2020226c] dark:hover:bg-[#2020226c]"> Registrarme </button>
                    </section>
                </form>
            </section>

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
                    closeModal()
                    setIsOpen(false)
                }}
                >
                {modalType === "error" && (
                    <ErrorModal 
                        onClose={() => {
                        closeModal()
                        setIsOpen(false)
                    }}/>
                )}
                    
                {modalType === "register" && (
                    <section className="flex flex-col items-center">
                        <RegisterModal />
                        <ConfirmCancelButtons 
                        cancelButtonOnClick={() => {
                            closeModal()
                            setIsOpen(false)
                        }}
                        confirmButtonOnClick={() => {
                            closeModal()
                            setIsOpen(false)
                        }}/>
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
                            closeModal()
                            setIsOpen(false)
                        }}
                        confirmText="Restablecer Contraseña"
                        confirmButtonOnClick={() => {
                            closeModal()
                            setIsOpen(false)
                        }}/>
                    </section>
                )}

                </Modal>
            )}

        </section>
    )
}