// Hooks
import { useModal } from "../../globals/hooks/useModal";
import { useCategories } from "./hooks/useCategories";
// Iconos
import { actionsIcons } from "../../assets/icons/mainIcons";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import CategoriesList from "./components/ui/CategoriesList";
// Modales
import Modal from "../../globals/components/modals/Modal";
import MoreInfoModal from "./components/modals/MoreInfoModal";
import AddCategoryModal from "./components/modals/AddCategoryModal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import DeleteCategoryModal from "./components/modals/DeleteCategoryModal";
import EditCategoryInfoModal from "./components/modals/EditCategoryInfoModal";

export default function CategoriesPage() {
  const { categories, loading, error, fetchCategories } = useCategories();
  const { modalType, isOpen, modalData, openModal, closeModal } = useModal();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName={"Categorias"}
        addButtonIcon={actionsIcons.addIcon}
        addButtonText={"Agregar Categoria"}
        createOnClick={() => openModal(null, "add", fetchCategories)}
        filterOnClick={() => openModal(null, "filter", fetchCategories)}
      />
      {/* Listado de categorias */}
      <CategoriesList
        categories={categories}
        openModal={openModal}
        loading={loading}
        error={error}
        refetch={fetchCategories}
      />

      {/* Modales */}
      {modalType && (
        <Modal
          title={
            modalType === "filter"
              ? "Filtrar"
              : modalType === "add"
                ? "Agregar Categoria"
                : modalType === "user"
                  ? "Configuración"
                  : modalType === "info"
                    ? "Información de la categoría"
                    : modalType === "edit"
                      ? "Editar Categoria"
                      : "Eliminar Categoria"
          }
          type={modalType}
          isOpen={isOpen}
          onClose={() => closeModal()}
        >
          {modalType === "user" && (
            <ProfileModal onClose={() => closeModal()} />
          )}
          {modalType === "filter" && (
            <FilterModal onClose={() => closeModal()}></FilterModal>
          )}
          {modalType === "add" && (
            <AddCategoryModal onClose={() => closeModal()} />
          )}
          {/* Modal para mas información de la categoria */}
          {modalType === "info" && <MoreInfoModal category={modalData} />}
          {/* Modal para editar la categoria */}
          {modalType === "edit" && (
            <EditCategoryInfoModal
              category={modalData}
              onClose={() => closeModal()}
            />
          )}
          {/* Modal para eliminar la categoria */}
          {modalType === "delete" && (
            <DeleteCategoryModal
              category={modalData}
              onClose={() => closeModal()}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
