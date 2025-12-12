// components/modals/EditTransformationModal.jsx
import React from "react";
import { useEditTransformation } from "../../hooks/useEditTransformation";

export default function EditTransformationModal({
  selectedTransformation,
  onClose,
  onEditSuccess,
}) {
  const { editTransformation, loading, error } = useEditTransformation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    try {
      await editTransformation(
        selectedTransformation.transformationId,
        updatedData
      );

      alert("Transformación actualizada correctamente");

      if (onEditSuccess) onEditSuccess(); // recargar lista

      onClose();
    } catch (err) {
      console.error("Error actualizando transformación:", err);
      alert("No se pudo actualizar la transformación");
    }
  };

  const InputGroup = ({
    labelText,
    name,
    type = "text",
    defaultValue,
    placeholder,
    required,
  }) => (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="text-sm">
        {labelText}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        className="border rounded-lg p-2 text-sm"
      />
    </div>
  );

  return (
    <div className="flex flex-col items-center">
      <h3 className="text-xl mb-4">
        Editando Transformación #{selectedTransformation?.transformationId}
      </h3>

      {/* Error */}
      {error && (
        <p className="text-red-500 text-sm mb-2">
          Error: {error?.message || JSON.stringify(error)}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">

        <InputGroup
          labelText="Nombre del Cliente"
          name="transformationCustomer"
          defaultValue={selectedTransformation?.transformationCustomer}
          placeholder="Nombre del cliente"
          required
        />

        <InputGroup
          labelText="Teléfono"
          name="transformationPhone"
          type="tel"
          defaultValue={selectedTransformation?.transformationPhone}
          placeholder="+57 300 123 XXXX"
          required
        />

        <InputGroup
          labelText="Ciudad"
          name="transformationCity"
          defaultValue={selectedTransformation?.transformationCity}
          placeholder="Bogotá"
          required
        />

        <InputGroup
          labelText="Correo"
          name="transformationEmail"
          type="email"
          defaultValue={selectedTransformation?.transformationEmail}
          placeholder="cliente@mail.com"
          required
        />

        {/* REQUERIMIENTO */}
        <div className="flex flex-col gap-1">
          <label htmlFor="transformationRequirement" className="text-sm">
            Requerimiento
          </label>
          <textarea
            id="transformationRequirement"
            name="transformationRequirement"
            defaultValue={selectedTransformation?.transformationRequirement}
            rows="4"
            className="border rounded-lg p-2 text-sm resize-none"
            required
          />
        </div>

        {/* ESTADO */}
        <div className="flex flex-col gap-1">
          <label htmlFor="transformationStatus" className="text-sm">
            Estado
          </label>
          <select
            id="transformationStatus"
            name="transformationStatus"
            defaultValue={selectedTransformation?.transformationStatus}
            className="border rounded-lg p-2 text-sm"
            required
          >
            <option value="">Seleccione el estado</option>
            <option value="0">Pendiente</option>
            <option value="1">En Progreso</option>
            <option value="2">Finalizada</option>
          </select>
        </div>

        {/* BOTONES */}
        <div className="flex gap-2 pt-5 justify-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white px-5 py-2 rounded-xl shadow-xl text-sm transition duration-300 hover:text-gray-400 disabled:opacity-50"
          >
            {loading ? "Actualizando..." : "Confirmar Edición"}
          </button>

          <button
            type="button"
            className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200"
            onClick={onClose}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}
