import { useState } from "react";
import Layout from "../../globals/components/Layout/Layout";
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import ActionCard from "../../globals/components/ui/ActionCard";

export default function HomePage(){

    const [modalType, setModalType] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

     // Al momento de clickear un botón esto abre la modal que pertenece a ese botón
     const openModal = (type) => {
        setModalType(type);
    };
    // Y esto cierra la modal
    const closeModal = () => {
        setModalType(null);
    }

    return(        
        <Layout
        avatarOnClick={ () => {
            openModal("user")
            setIsOpen(true)
        }}>
            <h1 className="h-[10%] p-5 text-5xl font-medium dark:text-white"> Bienvenido, Agustín </h1>
            {/* Contenedor de las cards de los modúlos */}
            <section className="h-[90%] min-w-full">
                <ActionCard/>
            </section>

            {modalType && (
            <Modal
            title={ 
                modalType === "user"
                ? "Configuración"
                : ""
            }
            type={modalType}
            isOpen={isOpen}
            onClose={() => {
                closeModal()
                setIsOpen(false)
            }}
            >
            {modalType === "user" &&(
            <ProfileModal
            onClose={() => {
                closeModal()
                setIsOpen(false)
            }}
            />
            )}
            </Modal>
            )}
        
        </Layout>
    )
}