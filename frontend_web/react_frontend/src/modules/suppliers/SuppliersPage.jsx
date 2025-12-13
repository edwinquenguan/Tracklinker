// Hooks
import { useModal } from "../../globals/hooks/useModal";
import { useSuppliers } from "./hooks/useSuppliers";
// Iconos
import { usersIcons } from "../../assets/icons/mainIcons";
import { actionsIcons } from "../../assets/icons/mainIcons";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import FormField from "../../globals/components/ui/FormField";
import TopSection from "../../globals/components/ui/TopSection";
// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import SuppliersList from "./components/ui/SuppliersList";
import AddSupplierModal from "./components/modals/AddSupplierModal";
import MoreInfoSupplierModal from "./components/modals/MoreInfoSupplierModal";
import EditSupplierInfoModal from "./components/modals/EditSupplierInfoModal";
import DeleteSupplierModal from "./components/modals/DeleteSupplierModal";

export default function SuppliersPage() {
  const { modalType, isOpen, modalData, openModal, closeModal } = useModal();
  const { suppliers, loading, error, fetchSuppliers } = useSuppliers();

  return (
    <Layout>
      <TopSection
        sectionName={"Proveedores"}
        addButtonIcon={actionsIcons.addIcon}
        addButtonText={"Agregar Proveedor"}
        createOnClick={() => openModal(null, "add", fetchSuppliers)}
        filterOnClick={() => openModal(null, "filter", fetchSuppliers)}
      />
      {/* Listado de proveedores */}
      <SuppliersList
        suppliers={suppliers}
        loading={loading}
        error={error}
        refetch={fetchSuppliers}
        openModal={openModal}
      />

      {/* Modales */}
      {modalType && (
        <Modal
          title={
            modalType === "filter"
              ? "Filtrar"
              : modalType === "add"
                ? "Agregar Proveedor"
                : modalType === "info"
                  ? "Información del Proveedor"
                  : modalType === "edit"
                    ? "Editar Proveedor"
                    : "Eliminar Proveedor"
          }
          type={modalType}
          isOpen={isOpen}
          onClose={() => closeModal()}
        >
          {modalType === "filter" && (
            <FilterModal onClose={() => closeModal()}></FilterModal>
          )}
          {modalType === "add" && (
            <AddSupplierModal onClose={() => closeModal()} />
          )}
          {/* Modal para mas información del Proveedor */}
          {modalType === "info" && (
            <MoreInfoSupplierModal supplier={modalData} />
          )}

          {/* Modal para editar el Proveedor */}
          {modalType === "edit" && (
            <EditSupplierInfoModal
              supplier={modalData}
              onClose={() => closeModal()}
            />
          )}

          {/* Modal para eliminar el Proveedor */}
          {modalType === "delete" && (
            <DeleteSupplierModal
              supplier={modalData}
              onClose={() => closeModal()}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
