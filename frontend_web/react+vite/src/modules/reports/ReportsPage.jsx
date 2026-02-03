// Hooks
import { useModal } from "../../globals/hooks/useModal";
// Constantes
import { sections } from "./data/reportSections";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import SectionsContainer from "./components/ui/SectionsContainer";
// Modales
import Modal from "../../globals/components/modals/Modal";
import ReportUsersModal from "./components/modals/ReportUsersModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import ReportProductsModal from "./components/modals/ReportProductsModal";
import ReportSuppliersModal from "./components/modals/ReportSuppliersModal";
import ReportCategoriesModal from "./components/modals/ReportCategoriesModal";
import ReportWarrantiesModal from "./components/modals/ReportWarrantiesModal";
import ReportSubcategoriesModal from "./components/modals/ReportSubcategoriesModal";
import ReportTranformationsModal from "./components/modals/ReportTranformationsModal";

export default function ReportsPage() {
  const { modalType, isOpen, openModal, closeModal } = useModal();
  return (
    <Layout avatarOnClick={() => openModal("user")}>
      <h1 className="px-2 py-3 font-medium dark:text-white"> Informes </h1>
      <SectionsContainer sections={sections} openModal={openModal} />

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
          onClose={() => closeModal()}
        >
          {modalType === "user" && (
            <ProfileModal onClose={() => closeModal()} />
          )}
          {modalType === "reportUsers" && (
            <ReportUsersModal onClose={() => closeModal()} />
          )}
          {modalType === "reportProducts" && (
            <ReportProductsModal onClose={() => closeModal()} />
          )}
          {modalType === "reportCategories" && (
            <ReportCategoriesModal onClose={() => closeModal()} />
          )}
          {modalType === "reportSubcategories" && (
            <ReportSubcategoriesModal onClose={() => closeModal()} />
          )}
          {modalType === "reportWarranties" && (
            <ReportWarrantiesModal onClose={() => closeModal()} />
          )}
          {modalType === "reportSuppliers" && (
            <ReportSuppliersModal onClose={() => closeModal()} />
          )}
          {modalType === "reportTranformations" && (
            <ReportTranformationsModal onClose={() => closeModal()} />
          )}
        </Modal>
      )}
    </Layout>
  );
}
