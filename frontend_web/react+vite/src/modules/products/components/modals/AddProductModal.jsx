// Hooks
import { useState } from "react";
import { useCatalog } from "../../hooks/useCatalog";
import { useCreateProduct } from "../../hooks/useCreateProduct";
import { productsIcons } from "../../../../assets/icons/mainIcons";
// Componentes
import Loader from "../../../../globals/components/ui/Loader";
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
// Modales
import ErrorModal from "../../../../globals/components/modals/ErrorModal";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";

export default function AddProductModal({ onCloseModal }) {
  const [innerModal, setInnerModal] = useState(null);
  const { subcategories, products } = useCatalog();
  const { form, loading, handleChange, handleSubmit } = useCreateProduct({
    input_order_id: "",
    subcategory_id: "",
    product_model: "",
    product_serial: "",
    product_brand: "",
    product_stock: "",
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
        >
          <option value="">Seleccionar</option>
          {products.map((product) => (
            <option value={product.input_order_id}>
              {product.input_order}
            </option>
          ))}
        </SelectMenu>
        {/* Menú de subcategorias */}
        <SelectMenu
          name={"subcategory_id"}
          width={"64"}
          spanText={"Subcategoria"}
          onChange={handleChange}
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
        <FormField
          onChange={handleChange}
          name={"product_model"}
          labelText={"Modelo"}
          placeholder={"Impresora HP z1455"}
          id={"model"}
        />
        <FormField
          name={"product_serial"}
          labelText={"Serial"}
          placeholder={"10KQ340"}
          id={"product_serial"}
          onChange={handleChange}
        />
        <FormField
          labelText={"Marca"}
          placeholder={"Asus"}
          name={"product_brand"}
          id={"brand"}
          onChange={handleChange}
        />
        <FormField
          labelText={"Cantidad"}
          name={"product_stock"}
          placeholder={"20"}
          onChange={handleChange}
        />
        <SelectMenu
          width={"64"}
          name={"product_garanty_input"}
          spanText={"Tiempo De Garantía"}
          onChange={handleChange}
        >
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
      {innerModal === "success" && <SuccessModal />}
      {innerModal === "error" && <ErrorModal />}
    </section>
  );
}
