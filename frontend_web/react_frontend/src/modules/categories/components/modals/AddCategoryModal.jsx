import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import SuccessModal from "../../../../globals/components/modals/SuccessModal";
import ErrorModal from "../../../../globals/components/modals/ErrorModal";

export default function AddCategoryModal({ onClose, innerModal, setInnerModal, fetch }) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-1">
        <FormField
          labelText={"Nombre de la Categoría"}
          placeholder={"Electrodomésticos / Accesorios / Tecnología"}
          id={"category_name"}
          autoComplete="off"
        />

        <FormField
          labelText={"Descripción"}
          placeholder={"Categoría destinada a productos de tecnología"}
          id={"category_description"}
          autoComplete="off"
        />

        <SelectMenu
          id={"category_status"}
          name={"category_status"}
          spanText={"Estado"}
        >
          <option value="active"> Activa </option>
          <option value="inactive"> Inactiva </option>
        </SelectMenu>
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmText={"Confirmar"}
        cancelText={"Cancelar"}
        confirmButtonOnClick={onClose}
        cancelButtonOnClick={onClose}
      />

      {/* Modales Internas */}
      {innerModal === "success" && (
        <SuccessModal
          isOpen={true}
          confirmTitle={"Categoría creada con éxito!"}
          confirmText={
            "La categoría fue creada correctamente. Toca el botón para volver."
          }
          confirmButtonText={"Volver a la página"}
          onClose={() => {
            setInnerModal(null);
            onClose();
            fetch();
          }}
        />
      )}

      {innerModal === "error" && (
        <ErrorModal
          isOpen={true}
          errorTitle="No se pudo completar el registro"
          errorText="Verifica que todos los campos estén completos y que la categoría no exista."
          confirmButtonText="Volver a intentarlo"
          onClose={() => setInnerModal(null)}
        />
      )}
    </section>
  );
}
