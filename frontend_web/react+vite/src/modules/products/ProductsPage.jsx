// Hooks
import { useCatalog } from "./hooks/useCatalog";
import { useModal } from "../../globals/hooks/useModal";
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

export default function ProductsPage() {
  const { modalType, modalData, isOpen, openModal, closeModal } = useModal();
  const { fetchProducts, products } = useCatalog();

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
          openModal(null, "add", fetchProducts);
        }}
        filterOnClick={() => {
          openModal(null, "filter");
        }}
      />

      {/* Contenedor de la tabla */}
      <ProductsTable products={products} openModal={openModal} refetch={fetchProducts}/>

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
            <ProfileModal onClose={() => closeModal()} />
          )}
          {modalType === "filter" && (
            <ProductsFilterModal onCloseModal={() => closeModal()} />
          )}
          {modalType === "add" && (
            <AddProductModal
              onCloseModal={() => closeModal()}
              selectedProduct={modalData}
              openModal={openModal}
            />
          )}
          {/* Modal para editar el producto */}
          {modalType === "edit" && (
            <EditProductModal
              onCloseModal={() => closeModal()}
              selectedProduct={modalData}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
