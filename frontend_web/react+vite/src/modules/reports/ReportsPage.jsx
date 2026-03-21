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

export default function ReportsPage() {
  const [topSectionVisiblity, setTopSectionVisiblity] = useState(true);
  const [report, setReport] = useState("home");
  const { modalType, isOpen, openModal, closeModal } = useModal();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionVisible={topSectionVisiblity}
        sectionName={"Informes"}
        filterButton={false}
        createButtonVisibility={false}
      />
      {report === "home" && (
        <SectionsContainer
          sections={sections}
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
        />
      )}
      {/* Contenido principal dinamico */}
      {report === "users" && (
        <UsersReport
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
        />
      )}
      {report === "products" && (
        <ProductsReport
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
        />
      )}
      {report === "categories" && (
        <CategoriesReport
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
        />
      )}
      {report === "subcategories" && (
        <SubcategoriesReport
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
        />
      )}
      {report === "warranties" && (
        <WarrantiesReport
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
        />
      )}
      {report === "suppliers" && (
        <SuppliersReport
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
        />
      )}
      {report === "transformations" && (
        <TransformationsReport
          setReport={setReport}
          setTopSectionVisiblity={setTopSectionVisiblity}
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
