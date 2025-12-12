// React
import { useState } from "react";

// Iconos
import { actionsIcons } from "../../assets/icons/mainIcons";

// Hooks
import { useTransformations } from "./hooks/useTransformations";

// Componentes base
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import ActionButtons from "../../globals/components/ui/ActionButtons";

// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import AddTransformationModal from "./components/modals/AddTransformationModal";
import MoreInfoModal from "./components/modals/MoreInfoModal";
import DeleteTransformationModal from "./components/modals/DeleteTransformationModal";

export default function TransformationsPage() {
  const { transformations, loading, error, fetchTransformations } = useTransformations();
  const [selectedTransformation, setSelectedTransformation] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (transformation, type) => {
    setSelectedTransformation(transformation);
    setModalType(type);
    setIsOpen(true);
  };

  const closeModal = () => {
    setSelectedTransformation(null);
    setModalType(null);
    setIsOpen(false);
  };

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName="Transformaciones"
        addButtonIcon={actionsIcons.addIcon}
        addButtonText="Crear Transformación"
        createOnClick={() => openModal(null, "add")}
        filterOnClick={() => openModal(null, "filter")}
      />

      <section className="max-h-[93%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
        {loading && <p className="p-5 text-center">Cargando transformaciones...</p>}
        {error && <p className="p-5 text-center text-red-500">Error: {error}</p>}
        {!loading && !error && (
          <ul className="pt-3 flex flex-col gap-1">
            {/* Encabezado */}
            <li className="flex items-center p-5 font-bold bg-gray-200 dark:bg-gray-800 rounded-lg sticky top-0 z-10">
              <div className="w-1/5 text-center">Orden de salida</div>
              <div className="w-1/5 text-center">Fecha</div>
              <div className="w-1/5 text-center">Serial de producto</div>
              <div className="w-1/5 text-center">Transformacion</div>
              <div className="w-1/5 text-center">Acciones</div>
            </li>

            {/* Filas */}
            {transformations.map((transformation) => (
              <li
                className="flex items-center p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300 dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
                key={transformation.out_order_id}
              >
                <div className="w-1/5 text-center">{transformation.out_order_id}</div>
                <div className="w-1/5 text-center">{transformation.out_order_date}</div>
                <div className="w-1/5 text-center">{transformation.product_serial}</div>
                <div className="w-1/5 text-center">{transformation.product_transformation}</div>
                <div className="w-1/6 text-center flex justify-center items-center">
                  <ActionButtons
                    editButtonOnClick={() => openModal(transformation, "edit")}
                    deleteButtonOnClick={() => openModal(transformation, "delete")}
                  >
                    <button
                      className="hover:scale-125 transition-all duration-200"
                      onClick={() => openModal(transformation, "info")}
                    >
                      <img src={actionsIcons.moreInfoIcon} alt="Más Info" />
                    </button>
                  </ActionButtons>
                </div>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Modales */}
      {modalType && (
        <Modal
          title={
            modalType === "user"
              ? "Configuración"
              : modalType === "filter"
              ? "Filtrar Transformaciones"
              : modalType === "add"
              ? "Crear Transformación"
              : modalType === "info"
              ? "Más Información"
              : modalType === "edit"
              ? "Editar Transformación"
              : modalType === "delete"
              ? "Eliminar Transformación"
              : ""
          }
          type={modalType}
          isOpen={isOpen}
          onClose={closeModal}
        >
          {modalType === "user" && <ProfileModal onClose={closeModal} />}
          {modalType === "filter" && <FilterModal onClose={closeModal} />}
          {modalType === "add" && <AddTransformationModal onCloseModal={closeModal} onAddSuccess={fetchTransformations} />}
          {modalType === "edit" && selectedTransformation && (
            <AddTransformationModal editMode data={selectedTransformation} onCloseModal={closeModal} onEditSuccess={fetchTransformations} />
          )}
          {modalType === "delete" && selectedTransformation && (
            <DeleteTransformationModal selectedTransformation={selectedTransformation} onClose={closeModal} onDeleteSuccess={fetchTransformations} />
          )}
          {modalType === "info" && selectedTransformation && (
            <MoreInfoModal {...selectedTransformation} onCloseModal={closeModal} />
          )}
        </Modal>
      )}
    </Layout>
  );
}
