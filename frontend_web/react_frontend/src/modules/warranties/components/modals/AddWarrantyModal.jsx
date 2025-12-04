import FormField from "../../../../globals/components/ui/FormField";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { useCreateWarranty } from "../../hooks/useCreateWarranties";

export default function AddWarrantyModal({ onCloseModal }) {

  const { handleCreateWarranty, loading } = useCreateWarranty(
    () => onCloseModal(),           // onSuccess
    () => alert("Error al crear")   // onError (puedes abrir un modal aquí)
  );

  return (
    <section className="flex flex-col items-center">

      <form onSubmit={handleCreateWarranty} className="flex flex-col gap-1">
        
        <FormField name="serial" labelText="Serial" placeholder="10KQ34012414" />
        <FormField name="model" labelText="Modelo" placeholder="10KQ3400" />
        <FormField name="cliente" labelText="Nombre del Cliente" placeholder="Miguel Arnulfo Pérez" />
        <FormField name="telefono" labelText="Teléfono" placeholder="+57 300 123 XXXX" />
        <FormField name="direccion" labelText="Dirección" placeholder="kr 45 # 67-XX" />
        <FormField name="ciudad" labelText="Ciudad" placeholder="Bogotá" />

        <span>Requerimiento</span>
        <input
          type="text"
          name="requerimiento"
          className="h-20 w-72 p-2 text-sm border rounded-lg"
        />

        <span>Archivos adjuntos</span>
        <input
          type="file"
          name="archivos"
          multiple
          className="h-18 w-80"
        />

        <button
          type="submit"
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-1 rounded mt-2"
        >
          {loading ? "Enviando..." : "Enviar"}
        </button>

      </form>

      <ConfirmCancelButtons
        confirmButtonOnClick={handleCreateWarranty}
        cancelButtonOnClick={onCloseModal}
      />
    </section>
  );
}
