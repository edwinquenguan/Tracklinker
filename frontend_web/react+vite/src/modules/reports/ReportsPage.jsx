// Hooks
import { useState } from "react";
import { useModal } from "../../globals/hooks/useModal";
// Constantes
import { sections } from "./data/reportSections";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import SectionsContainer from "./components/ui/SectionsContainer";
import UsersReport from "./components/ui/reports/UsersReport";
import ProductsReport from "./components/ui/reports/ProductsReport";
import SuppliersReport from "./components/ui/reports/SuppliersReport";
import CategoriesReport from "./components/ui/reports/CategoriesReport";
import WarrantiesReport from "./components/ui/reports/WarrantiesReport";
import SubcategoriesReport from "./components/ui/reports/SubcategoriesReport";
import TransformationsReport from "./components/ui/reports/TransformationsReport";

export default function ReportsPage() {
  const [report, setReport] = useState("home");
  const [title, setTitle] = useState("Informes");
  const { modalType, isOpen, openModal, closeModal } = useModal();

  return (
    <Layout avatarOnClick={() => openModal("user")}>
      <h1 className="px-2 py-3 font-medium dark:text-white"> {title} </h1>
      {report === "home" && (
        <SectionsContainer
          sections={sections}
          setReport={setReport}
          setTitle={setTitle}
        />
      )}
      {report === "users" && <UsersReport />}
      {report === "products" && <ProductsReport />}
      {report === "categories" && <CategoriesReport />}
      {report === "subcategories" && <SubcategoriesReport />}
      {report === "warranties" && <WarrantiesReport />}
      {report === "suppliers" && <SuppliersReport />}
      {report === "transformations" && <TransformationsReport />}
    </Layout>
  );
}
