
import { actionsIcons } from "../../assets/icons/mainIcons";
import { asideIcons } from "../../assets/icons/asideIcons";

import Layout from "../../globals/components/Layout/Layout"; 
import EditSubcategoryModal from "./components/modals/EditSubcategoryModal"; 
import Modal from "../../globals/components/modals/Modal"; 
import FilterModal from "../../globals/components/modals/FilterModal"; 
import ProfileModal from "../../globals/components/modals/ProfileModal"; 
import SelectMenu from "../../../globals/components/ui/SelectMenu";
import ConfirmCancelButtons from "../../globals/components/modals/ConfirmCancelButtons"; 
import ActionButtons from "../../globals/components/ui/ActionButtons"; 
import FormField from "../../globals/components/ui/FormField"; 
import TopSection from "../../globals/components/ui/TopSection"; 
import { useState, useEffect } from "react";
import { getAllCategories } from '../../../services/getCategoriesService';
import { getSubcategoriesWithCategory } from '../../../services/getSubcategoriesService';






export default function SubcategoriesPage() {
 
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    async function fetchSubcategories() {
      try {
        setLoading(true);
      
        const data = await getSubcategoriesWithCategory();
        setSubcategories(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchSubcategories();

    async function fetchCategories() {
      try {
       
        const categorydata = await getAllCategories();
        setCategories(categorydata);
      } catch (error) {
        setError(error.message);
      }
    }

    fetchCategories();
  }, []);


  if (error) {
    return <div>Error: {error}</div>;
  }

  
  const openModal = (subcategory, type) => {
    setSelectedSubcategory(subcategory);
    setModalType(type);
  };
  
  const closeModal = () => {
    setSelectedSubcategory(null);
    setModalType(null);
  };
  return (
    <Layout
      avatarOnClick={() => {
        openModal(null, "user");
        setIsOpen(true);
      }}
    >
      <TopSection
        sectionName={"Subcategorias"}
        addButtonIcon={actionsIcons.addIcon}
        addButtonText={"Agregar Subcategoria"}
        createOnClick={() => {
          openModal(null, "add");
          setIsOpen(true);
        }}
        filterOnClick={() => {
          openModal(null, "filter");
          setIsOpen(true);
        }}
      />
      {/* Listado de subcategorias */}
      <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
        <ul className="pt-3 flex flex-col gap-1">
          {subcategories.map((subcategory) => (
            // Categorias
            <li
              key={subcategory.subcategory_id}
              className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-lg shadow-md transition duration-300
                        dark:bg-[#0f0f11] dark:hover:bg-[#212125] dark:text-white"
            >
              <section className="flex gap-6">
                <span className="text-2xl font-medium">
                  {subcategory.subcategory_name}
                </span>
                <div className="flex items-center gap-1 justify-center">
                  <img
                    src={asideIcons.categoriesIcon}
                    alt=""
                    className="invert brightness-200 dark:brightness-50"
                  />
                  <span className="font-medium">
                    {subcategory.category_name}
                  </span>
                </div>
              </section>
              {/* Botones para interactuar */}
              <ActionButtons
                editButtonOnClick={() => {
                  openModal(subcategory, "edit");
                  setIsOpen(true);
                }}
                deleteButtonOnClick={() => {
                  openModal(subcategory, "delete");
                  setIsOpen(true);
                }}
              >
                {/* Botón de más información */}
                <button
                  onClick={() => {
                    openModal(subcategory, "info");
                    setIsOpen(true);
                  }}
                >
                  <img src={actionsIcons.moreInfoIcon} alt="" />
                </button>
              </ActionButtons>
            </li>
          ))}
        </ul>
      </section>

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
          onClose={() => {
            closeModal();
            setIsOpen(false);
          }}
        >
          {modalType === "user" && (
            <ProfileModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}
          {modalType === "filter" && (
            <FilterModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            ></FilterModal>
          )}
          {modalType === "add" && (
            <section className="flex flex-col items-center">
              <form action="" className="flex flex-col gap-1">
                <SelectMenu spanText={"Categoria"}>
                  {categories.map((category) => (
                    <option value={category.category_name}>
                      {" "}
                      {category.category_name}{" "}
                    </option>
                  ))}
                </SelectMenu>

                <FormField
                  labelText={"Nombre"}
                  placeholder={"Impresoras a color"}
                  id={"name"}
                />
              </form>

              {/* Botones */}
              <ConfirmCancelButtons
                confirmButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
                cancelButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
              />
            </section>
          )}
          {/* Modal para mas información de la subcategoria */}
          {modalType === "info" && (
            <section className="flex flex-col justify-center dark:text-white">
              <p>
                <strong>Creada:</strong> {selectedSubcategory.subcategory_date}
              </p>
              <p>
                <strong>Nombre:</strong>{" "}
                {selectedSubcategory.subcategory_name}{" "}
              </p>
              <p>
                <strong>Categoria a la que pertenece:</strong>{" "}
                {selectedSubcategory.categories.category_name}
              </p>
            </section>
          )}
          {/* Modal para editar la subcategoria */}
          {modalType === "edit" && (
           <EditSubcategoryModal />
          )}

          {/* Modal para eliminar la subcategoria */}
          {modalType === "delete" && (
            <section className="flex flex-col justify-center items-center dark:text-white">
              <p>
                ¿Seguro que deseas eliminar la Subcategoria{" "}
                <strong>{selectedSubcategory.subcategory_name}</strong>?
              </p>

              {/* Botones */}
              <ConfirmCancelButtons
                confirmText={"Eliminar"}
                cancelText={"Cancelar"}
                confirmBgColor="red-600"
                confirmButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
                cancelButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
              />
            </section>
          )}
        </Modal>
      )}
    </Layout>
  );
}