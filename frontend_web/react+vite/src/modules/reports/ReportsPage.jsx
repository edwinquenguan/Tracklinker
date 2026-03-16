// Hooks
import { useState } from "react";
import { useModal } from "../../globals/hooks/useModal";
// Constantes
import { sections } from "./data/reportSections";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import SectionsContainer from "./components/ui/SectionsContainer";
import UsersReport from "./components/ui/reports/users/UsersReport";
import ProductsReport from "./components/ui/reports/products/ProductsReport";
import SuppliersReport from "./components/ui/reports/suppliers/SuppliersReport";
import CategoriesReport from "./components/ui/reports/categories/CategoriesReport";
import WarrantiesReport from "./components/ui/reports/warranties/WarrantiesReport";
import SubcategoriesReport from "./components/ui/reports/subcategories/SubcategoriesReport";
import TransformationsReport from "./components/ui/reports/transformations/TransformationsReport";
// Modales
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import { actionsIcons } from "../../assets/icons/mainIcons";

export default function ReportsPage() {
  const [report, setReport] = useState("home");
  const [title, setTitle] = useState("Informes");
  const [exportOnClick, setExportOnClick] = useState(null);
  const [rangeDate, setRangeDate] = useState(false);
  const { modalType, isOpen, openModal, closeModal } = useModal();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName={title}
        rangeDate={rangeDate}
        addButtonIcon={actionsIcons.exportIcon}
        filterButton={false}
        addButtonText={"Exportar CSV"}
        createOnClick={exportOnClick}
      />
      {report === "home" && (
        <SectionsContainer
          sections={sections}
          setReport={setReport}
          setTitle={setTitle}
        />
      )}
      {/* Contenido principal dinamico */}
      {report === "users" && (
        <UsersReport
          setTitle={setTitle}
          setReport={setReport}
          setRangeDate={setRangeDate}
          exportOnClick={setExportOnClick}
        />
      )}
      {report === "products" && (
        <ProductsReport
          setTitle={setTitle}
          setReport={setReport}
          setRangeDate={setRangeDate}
          exportOnClick={setExportOnClick}
        />
      )}
      {report === "categories" && (
        <CategoriesReport
          setTitle={setTitle}
          setReport={setReport}
          setRangeDate={setRangeDate}
          exportOnClick={setExportOnClick}
        />
      )}
      {report === "subcategories" && (
        <SubcategoriesReport
          setTitle={setTitle}
          setReport={setReport}
          setRangeDate={setRangeDate}
          exportOnClick={setExportOnClick}
        />
      )}
      {report === "warranties" && (
        <WarrantiesReport
          setTitle={setTitle}
          setReport={setReport}
          setRangeDate={setRangeDate}
          exportOnClick={setExportOnClick}
        />
      )}
      {report === "suppliers" && (
        <SuppliersReport
          setTitle={setTitle}
          setReport={setReport}
          setRangeDate={setRangeDate}
          exportOnClick={setExportOnClick}
        />
      )}
      {report === "transformations" && (
        <TransformationsReport
          setTitle={setTitle}
          setReport={setReport}
          setRangeDate={setRangeDate}
          exportOnClick={setExportOnClick}
        />
      )}

      {/* Modales */}
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
