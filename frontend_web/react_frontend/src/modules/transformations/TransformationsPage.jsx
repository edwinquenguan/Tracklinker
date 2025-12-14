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
import EditTransformationModal from "./components/modals/EditTransformationModal";
import DeleteTransformationModal from "./components/modals/DeleteTransformationModal";

export default function TransformationsPage() {
  const {
    transformations,
    loading,
    error,
    fetchTransformations,
  } = useTransformations();

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

      <section className="max-h-[93%] max-w-[96%] overflow-x-auto overflow-y-auto overflow-hidden">
        {loading && (
          <p className="p-5 text-center">Cargando transformaciones...</p>
        )}
        {error && (
          <p className="p-5 text-center text-red-500">Error: {error}</p>
        )}

        {!loading && !error && (
          <ul className="pt-3 flex flex-col gap-1">
            {/* Encabezado */}
            <li className="flex items-center p-5 font-bold bg-gray-200 dark:bg-gray-800 rounded-lg sticky top-0 z-10">
              <div className="w-1/5 text-center">Orden de salida</div>
              <div className="w-1/5 text-center">Fecha de registro</div>
              <div className="w-1/5 text-center">Serial de producto</div>
              <div className="w-1/5 text-center">Finaliza garantía</div>
              <div className="w-1/5 text-center">Transformación</div>
              <div className="w-1/5 text-center">Acciones</div>
            </li>

            {/* Filas */}
            {transformations.map((transformation) => (
              <li
                key={transformation.output_details_id}
                className="flex items-center p-5 bg-[#f3eef5] rounded-lg shadow-md dark:bg-[#0f0f11] h-18 overflow-x-auto overflow-y-auto transition duration-500
                          hover:bg-[#cdcacf] hover:shadow-lg
                          dark:hover:bg-[#101012]"
              >
                <div className="w-1/5 text-center">
                  {transformation.out_order_id}
                </div>
                <div className="w-1/5 text-center">
                  {transformation.out_order_date}
                </div>
                <div className="w-1/5 text-center">
                  {transformation.product_serial}
                </div>
                <div className="w-1/5 text-center">
                  {transformation.out_product_garanty}
                </div>
                <div className="w-1/5 text-center">
                  {transformation.product_transformation}
                </div>
                <div className="w-1/5 flex justify-center">
                  <ActionButtons
                    editButtonOnClick={() =>
                      openModal(transformation, "edit")
                    }
                    deleteButtonOnClick={() =>
                      openModal(transformation, "delete")
                    }
                  >
                    <button
                      className="hover:scale-125 transition"
                      onClick={() => openModal(transformation, "info")}
                    >
                      <img
                        src={actionsIcons.moreInfoIcon}
                        alt="Más Info"
                      />
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
          isOpen={isOpen}
          onClose={closeModal}
          title={
            modalType === "user"
              ? "Configuración"
              : modalType === "filter"
              ? "Filtrar Transformaciones"
              : modalType === "add"
              ? "Crear Transformación"
              : modalType === "edit"
              ? "Editar Transformación"
              : modalType === "delete"
              ? "Eliminar Transformación"
              : modalType === "info"
              ? "Más Información"
              : ""
          }
        >
          {modalType === "user" && <ProfileModal onClose={closeModal} />}
          {modalType === "filter" && <FilterModal onClose={closeModal} />}

          {modalType === "add" && (
            <AddTransformationModal
              onClose={closeModal}
              fetch={fetchTransformations}
            />
          )}

          {modalType === "edit" && selectedTransformation && (
            <EditTransformationModal
              selectedTransformation={selectedTransformation}
              onClose={closeModal}
              onEditSuccess={fetchTransformations}
            />
          )}

          {modalType === "delete" && selectedTransformation && (
            <DeleteTransformationModal
              selectedTransformation={selectedTransformation}
              onClose={closeModal}
              onDeleteSuccess={fetchTransformations}
            />
          )}

          {modalType === "info" && selectedTransformation && (
            <address className="flex flex-col justify-center items-center not-italic gap-2">
              <div className="flex flex-col items-center">
                <span>
                  <strong>Modelo</strong>
                </span>
                <p>{selectedTransformation.product_detail_model}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Marca</strong>
                </span>
                <p>{selectedTransformation.product_brand_name}</p>
              </div>
              <div className="flex flex-col items-center">
                <span>
                  <strong>Descripción</strong>
                </span>
                <p>{selectedTransformation.product_detail_description}</p>
              </div>
            </address>
          )}
        </Modal>
      )}
    </Layout>
  );
}
