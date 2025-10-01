import { useState } from "react";
import { items } from "./constants/homeSections";
import Layout from "../../globals/components/Layout/Layout";
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import ActionCard from "./components/ui/ActionCard";

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
            <section className="min-h-full grid grid-cols-4 grid-rows-2 p-[100px_200px_200px_200px] gap-[20px_12px] place-items-center
            xl:p-[100px_250px_250px_300px]
            lg:p-[100px_150px_250px_150px]
            md:p-[80px_50px_150px_50px]">
                {items.map((item) => (
                    <ActionCard
                    itemName={item.name}
                    itemPath={item.path}
                    itemIcon={item.icon}
                    itemAlt={item.alt}
                    />
                ))}
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