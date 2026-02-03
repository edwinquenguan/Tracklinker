import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function DeleteProductModal({ selectedProduct, onCloseModal }) {
  return (
    <section className="flex flex-col justify-center items-center">
      <p className="dark:text-white">
        ¿Seguro que deseas eliminar este Producto llamado
        <strong>
          {selectedProduct.model}
        </strong>
        ?
      </p>

      {/* Botones */}
      <ConfirmCancelButtons
        cancelButtonOnClick={onCloseModal}
        confirmText="Eliminar"
        confirmBgColor="red-600"
        confirmButtonOnClick={onCloseModal}
      />
    </section>
  );
}
