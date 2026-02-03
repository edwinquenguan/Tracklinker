// Hooks
import { useModal } from "./hooks/useModal";
// Iconos
import { productsIcons } from "../../assets/icons/mainIcons";
// Componentes de la Ui
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import ProductsTable from "./components/ui/ProductsTable";
//Modales
import Modal from "../../globals/components/modals/Modal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddProductModal from "./components/modals/AddProductModal";
import EditProductModal from "./components/modals/EditProductModal";
import ProductsFilterModal from "./components/modals/ProductsFilterModal";
import DeleteProductModal from "./components/modals/DeleteProductModal";

export default function ProductsPage() {
  const { modalType, selectedProduct, isOpen, openModal, closeModal } =
    useModal();

  return (
    <Layout
      avatarOnClick={() => {
        openModal(null, "user");
      }}
    >
      <TopSection
        sectionName={"Productos"}
        addButtonIcon={productsIcons.addProductIcon}
        addButtonText={"Agregar Producto"}
        createOnClick={() => {
          openModal(null, "add");
        }}
        filterOnClick={() => {
          openModal(null, "filter");
        }}
      />
      
      {/* Contenedor de la tabla */}
      <ProductsTable openModal={openModal} />

      {/* Modales */}
      {isOpen && (
        <Modal
          title={
            modalType === "user"
              ? "Configuración"
              : modalType === "filter"
                ? "Filtrar"
                : modalType === "add"
                  ? "Agregar Producto"
                  : modalType === "edit"
                    ? "Editar Producto"
                    : "Eliminar Producto"
          }
          type={modalType}
          isOpen={isOpen}
          onClose={() => {
            closeModal();
          }}
        >
          {modalType === "user" && (
            <ProfileModal
              onClose={() => {
                closeModal();
              }}
            />
          )}
          {modalType === "filter" && (
            <ProductsFilterModal onCloseModal={closeModal} />
          )}
          {modalType === "add" && (
            <AddProductModal
              onCloseModal={closeModal}
              selectedProduct={selectedProduct}
            />
          )}
          {/* Modal para editar el producto */}
          {modalType === "edit" && (
            <EditProductModal
              onCloseModal={closeModal}
              selectedProduct={selectedProduct}
            />
          )}

          {/* Modal para eliminar el producto */}
          {modalType === "delete" && (
            <DeleteProductModal
              onCloseModal={closeModal}
              selectedProduct={selectedProduct}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
