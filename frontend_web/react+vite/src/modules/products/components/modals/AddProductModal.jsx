// Hooks
import { useState } from "react";
import { useCatalog } from "../../hooks/useCatalog";
import { useCreateProduct } from "../../hooks/useCreateProduct";
import {
  actionsIcons,
  productsIcons,
} from "../../../../assets/icons/mainIcons";
// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import AddInputOrderModal from "./AddInputOrderModal";
import AddProductBrandModal from "./AddProductBrandModal";
import AddProductModelModal from "./AddProductModelModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import AddInnerModal from "../../../../globals/components/modals/AddInnerModal";
import AddSubcategoryModal from "../../../subcategories/components/modals/AddSubcategoryModal";

export default function AddProductModal({ onCloseModal }) {
  const [innerModal, setInnerModal] = useState(null);
  const { subcategories, brands, models, inputOrders } = useCatalog();
  const { loading, handleChange, handleSubmit } = useCreateProduct({
    input_order_id: "",
    subcategory_id: "",
    product_details_id: "",
    product_serial: "",
    product_brand: "",
    product_garanty_input: "",
  });

  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-1">
        {/* Menú de ordenes de entrada */}
        <SelectMenu
          spanText={"Orden de entrada"}
          onChange={handleChange}
          name={"input_order_id"}
          addIcon={actionsIcons.addIcon}
          addIconFunction={() => setInnerModal("addInputOrder")}
          addButtonInvisible={false}
        >
          <option value="">Seleccionar</option>
          {inputOrders.map((inputOrder) => (
            <option key={inputOrder.id} value={inputOrder.id}>
              {inputOrder.bill}
            </option>
          ))}
        </SelectMenu>
        {/* Menú de subcategorias */}
        <SelectMenu
          name={"subcategory_id"}
          spanText={"Subcategoria"}
          onChange={handleChange}
          addIcon={actionsIcons.addIcon}
          addIconFunction={() => setInnerModal("addSubcategory")}
          addButtonInvisible={false}
        >
          <option value="">Seleccionar</option>
          {subcategories.map((subcategory) => (
            <option
              key={subcategory.subcategory_id}
              value={subcategory.subcategory_id}
            >
              {subcategory.subcategory_name}
            </option>
          ))}
        </SelectMenu>
        {/* Menú de marcas */}
        <SelectMenu
          spanText={"Marca"}
          name={"product_brand"}
          onChange={handleChange}
          addIcon={actionsIcons.addIcon}
          addIconFunction={() => setInnerModal("addBrand")}
          addButtonInvisible={false}
        >
          <option value="">Seleccionar</option>
          {brands.map((brand) => (
            <option key={brand.id} value={brand.id}>
              {brand.name}
            </option>
          ))}
        </SelectMenu>
        {/* Menú de modelos */}
        <SelectMenu
          spanText={"Modelo"}
          name={"product_details_id"}
          onChange={handleChange}
          id={"model"}
          addIcon={actionsIcons.addIcon}
          addIconFunction={() => setInnerModal("addModel")}
          addButtonInvisible={false}
        >
          <option value="">Seleccionar</option>
          {models.map((model) => (
            <option key={model.id} value={model.id}>
              {model.model}
            </option>
          ))}
        </SelectMenu>
        <FormField
          name={"product_serial"}
          labelText={"Serial"}
          placeholder={"10KQ340"}
          id={"product_serial"}
          onChange={handleChange}
        />
        <SelectMenu
          spanText={"Tiempo De Garantía"}
          name={"product_garanty_input"}
          onChange={handleChange}
        >
          <option value="2029-09-27"> Seleccionar </option>
          <option value="a"> 6 Meses </option>
          <option value=""> 12 Meses </option>
          <option value=""> 18 Meses </option>
          <option value=""> 24 Meses </option>
        </SelectMenu>
        <div className="flex items-center justify-center p-3">
          <span className="dark:text-white">o</span>
        </div>
        {/* Botón de leer código de barras */}
        <section className="flex items-center justify-center">
          <button
            className="flex items-center py-3 px-4 gap-2 border rounded-lg transition duration-300 
                    hover:bg-gray-300
                    dark:bg-[#2020226c] dark:hover:bg-[#2c2c2e] dark:border-[#101012] hover:cursor-pointer"
            onClick={onCloseModal}
            disabled
          >
            <img
              src={productsIcons.barcodeIcon}
              alt=""
              className="dark:invert dark:brightness-0"
            />
            <span className="text-sm dark:text-white">¡Proximamente!</span>
          </button>
        </section>
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={loading ? <Loader /> : "Crear"}
        cancelButtonOnClick={onCloseModal}
        confirmButtonOnClick={(e) => handleSubmit(e, setInnerModal)}
      />

      {/* Modales internos */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          onClose={() => (
            setInnerModal(null),
            onCloseModal()
          )}
          confirmTitle={"Producto Creado Correctamente"}
          confirmText={"El producto ha sido creado correctamente."}
          confirmButtonText={"Volver a la página"}
        />
      )}
      {innerModal === "error" && (
        <ErrorModal
          isOpen={true}
          onClose={() => setInnerModal(null)}
          errorTitle={"Error al crear el producto"}
          errorText={"Ha ocurrido un error al intentar crear el producto."}
          confirmButtonText={"Volver a intentarlo"}
        />
      )}
      {innerModal === "addInputOrder" && (
        <AddInputOrderModal isOpen={true} onClose={() => setInnerModal(null)} />
      )}
      {innerModal === "addSubcategory" && (
        <AddInnerModal
          isOpen={true}
          onClose={() => setInnerModal(null)}
          title={"Agregar subcategoria"}
        >
          <AddSubcategoryModal onClose={() => setInnerModal(null)} />
        </AddInnerModal>
      )}
      {innerModal === "addBrand" && (
        <AddProductBrandModal
          isOpen={true}
          onClose={() => setInnerModal(null)}
        />
      )}
      {innerModal === "addModel" && (
        <AddProductModelModal
          isOpen={true}
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
