import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function EditProductModal({ selectedProduct, onCloseModal }) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-2">
        <FormField
          labelText={"Modelo"}
          placeholder={selectedProduct.model}
          id={"model"}
        />
        <FormField
          labelText={"Marca"}
          placeholder={
            selectedProduct.brand
          }
          id={"brand"}
        />
        <SelectMenu spanText={"Tiempo de garantía"}>
          <option value="a"> 6 Meses </option>
          <option value=""> 12 Meses </option>
          <option value=""> 18 Meses </option>
          <option value=""> 24 Meses </option>
        </SelectMenu>
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        cancelButtonOnClick={onCloseModal}
        confirmButtonOnClick={onCloseModal}
      />
    </section>
  );
}
