import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function AddWarrantyModal({ onCloseModal }) {
  return (
    <section className="flex flex-col items-center">
      <form action="" className="flex flex-col gap-1">
        <FormField
          labelText={"Serial"}
          placeholder={"10KQ34012414"}
          id={"serial"}
        />

        <FormField labelText={"Modelo"} placeholder={"10KQ3400"} id={"model"} />

        <FormField
          labelText={"Nombre del Cliente"}
          placeholder={"Miguel Arnulfo Pérez"}
          id={"customer"}
        />

        <span>Requerimiento</span>
        <input
          type="text"
          name="requirement"
          id="requirement_input"
          placeholder="Escribe aqui el requerimiento..."
          className="h-48 w-64 p-2 text-sm border rounded-lg text-clip"
        />
      </form>

      {/* Botones */}
      <ConfirmCancelButtons
        confirmButtonOnClick={onCloseModal}
        cancelButtonOnClick={onCloseModal}
      />
    </section>
  );
}
