import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function HelpForm() {
  return (
    <form
      action=""
      className="flex flex-col items-center justify-center px-32 py-12 gap-3 border shadow-2xl shadow-gray-400"
    >
      <h2> Formulario de Ayuda </h2>
      <label for="name"> Nombre </label>
      <input
        type="text"
        placeholder="Miguel Perez"
        className="px-5 py-2 border border-gray-300 rounded-md outline-none"
      />
      <label for="rol"> Rol o Cargo </label>
      <input
        type="text"
        placeholder="Almacén"
        className="px-5 py-2 border border-gray-300 rounded-md outline-none"
      />
      <label for=""> Email </label>
      <input
        type="email"
        placeholder="pepito@gmail.com"
        className="px-5 py-2 border border-gray-300 rounded-md outline-none"
      />
      <label for=""> Escribe aquí tu inquietud o queja</label>
      <input
        placeholder="Escribe aquí tu inquietud o queja"
        type="text"
        className="h-24 px-5 py-2 border border-gray-300 rounded-md text-sm outline-none"
      />
      <label for="">Agrega una imagen (Opcional)</label>
      <input type="file" />
      {/* Botones */}
      <ConfirmCancelButtons confirmText="Enviar Formulario" />
    </form>
  );
}
