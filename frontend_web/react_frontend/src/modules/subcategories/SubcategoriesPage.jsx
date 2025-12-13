// Hooks
import { useModal } from "../../globals/hooks/useModal";
// Iconos
import { actionsIcons } from "../../assets/icons/mainIcons";
// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddSubcategoryModal from "./components/modals/AddSubcategoryModal";
import EditSubcategoryModal from "./components/modals/EditSubcategoryModal";
import DeleteSubcategoryModal from "./components/modals/DeleteSubcategoryModal";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import SubcategoriesList from "./components/ui/SubcategoriesList";
import MoreSubcategoryInfoModal from "./components/modals/MoreSubcategoryInfoModal";

export default function SubcategoriesPage() {
  const { modalType, isOpen, modalData, refetch, openModal, closeModal } =
    useModal();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName={"Subcategorias"}
        addButtonIcon={actionsIcons.addIcon}
        addButtonText={"Agregar Subcategoria"}
        createOnClick={() => openModal(null, "add")}
        filterOnClick={() => openModal(null, "filter")}
      />
      {/* Listado de las subcategorias */}
      <SubcategoriesList openModal={openModal} />   
      
      {/* Modales */}
      {modalType && (
        <Modal
          title={
            modalType === "user"
              ? "Configuración"
              : modalType === "filter"
                ? "Filtrar"
                : modalType === "add"
                  ? "Agregar Subcategoria"
                  : modalType === "info"
                    ? "Información de la subcategoría"
                    : modalType === "edit"
                      ? "Editar Subcategoria"
                      : "Eliminar Subcategoria"
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
          {/* Modal para agregar una subcategoria */}
          {modalType === "add" && <AddSubcategoryModal onClose={() => closeModal()}/>}

          {/* Modal para mas información de la subcategoria */}       
          {modalType === "info" && <MoreSubcategoryInfoModal subcategory={modalData} onClose={() => closeModal()} />}

          {/* Modal para editar la información de la subcategoria */}
          {modalType === "edit" && (
            <EditSubcategoryModal subcategory={modalData} onClose={() => closeModal()}/>
          )}

          {/* Modal para eliminar la subcategoria */}
          {modalType === "delete" && (
            <DeleteSubcategoryModal
              subcategory={modalData}
              onClose={() => closeModal()}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
