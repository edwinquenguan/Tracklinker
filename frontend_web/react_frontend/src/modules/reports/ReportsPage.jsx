import { useState } from "react";
import { sections } from "./data/reportSections";
import Layout from "../../globals/components/Layout/Layout";
import ReportSectionCard from "./components/ReportSectionCard";
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import ReportUsersModal from "./components/modals/ReportUsersModal";
import ReportProductsModal from "./components/modals/ReportProductsModal";
import ReportCategoriesModal from "./components/modals/ReportCategoriesModal";
import ReportSubcategoriesModal from "./components/modals/ReportSubcategoriesModal";
import ReportWarrantiesModal from "./components/modals/ReportWarrantiesModal";
import ReportSuppliersModal from "./components/modals/ReportSuppliersModal";
import ReportTranformationsModal from "./components/modals/ReportTranformationsModal";

export default function ReportsPage(){

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
            <h1 className="px-2 py-3 font-medium dark:text-white"> Informes </h1>
            {/* Contenedor de las cards */}
            <section className="
            /* Layout Base */
            h-full grid grid-cols-3 grid-rows-3 place-items-center

            /* Espaciados */
            gap-[20px_12px]

            /* Responsive Paddings */
            px-3 py-4
            xl:p-[100px_250px_250px_300px] xl:grid-cols-4 xl:grid-rows-2
            lg:p-[100px_150px_250px_150px]
            md:p-[50px_50px_200px_50px]
            sm:p-[50px_50px_200px_50px]
            ">
                {sections.map((section) => (
                    <ReportSectionCard
                    sectionOnClick={() => {
                        openModal(section.modalName);
                        setIsOpen(true)
                    }}
                    sectionKey={section.name}
                    sectionIcon={section.icon}
                    sectionIconAlt={section.alt}
                    sectionName={section.name}
                    />
                ))}
            </section>

            {/* Modales */}
            {modalType && (
            <Modal
            title={ 
                modalType === "user"
                ? "Configuración"
                : modalType === "reportUsers"
                ? "Reporte de Usuarios"
                : modalType === "reportProducts"
                ? "Reporte de Productos"
                : modalType === "reportCategories"
                ? "Reporte de Categorias"
                : modalType === "reportSubcategories"
                ? "Reporte de Subcategorias"
                : modalType === "reportWarranties"
                ? "Reporte de garantías"
                : modalType === "reportSuppliers"
                ? "Reporte de Proveedores"
                : "Reporte de Tranformaciones"
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
                {modalType === "reportUsers" &&(
                <ReportUsersModal 
                cancelButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                confirmButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}/>
                )}
                {modalType === "reportProducts" &&(
                <ReportProductsModal
                cancelButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                confirmButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }} />
                )}
                {modalType === "reportCategories" &&(
                <ReportCategoriesModal 
                cancelButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                confirmButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}/>
                )}
                {modalType === "reportSubcategories" &&(
                <ReportSubcategoriesModal 
                cancelButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                confirmButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}/>
                )}
                {modalType === "reportWarranties" &&(
                <ReportWarrantiesModal 
                cancelButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                confirmButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}/>
                )}
                {modalType === "reportSuppliers" &&(
                <ReportSuppliersModal 
                cancelButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                confirmButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}/>
                )}
                {modalType === "reportTranformations" &&(
                <ReportTranformationsModal 
                cancelButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                confirmButtonOnClick={() => {
                    closeModal()
                    setIsOpen(false)
                }}/>
                )}
            </Modal>
            )}
        </Layout>
    )
}