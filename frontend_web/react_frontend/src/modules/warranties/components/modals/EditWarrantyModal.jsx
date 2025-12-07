import React from 'react';
import { useEditWarranty } from '../../hooks/useEditWarranty';


export default function EditWarrantyModal({ selectedWarranty, onClose, onEditSuccess }) {

  const { editWarranty, loading, error } = useEditWarranty();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const updatedData = Object.fromEntries(formData.entries());

    try {
      await editWarranty(selectedWarranty.warranty_incidents_id, updatedData);

      alert("Garantía actualizada correctamente");
      onClose();
       if (onEditSuccess) {
            onEditSuccess(); // 👈 Ejecuta la recarga de datos en el componente padre (WarrantiesPage)
        }

    } catch (err) {
      console.error("Error actualizando:", err);
      alert("No se pudo actualizar la garantía");
    }
  };

  const InputGroup = ({ labelText, name, type = "text", defaultValue, placeholder, required }) => (
    <div className="flex flex-col gap-1">
        <label htmlFor={name} className="text-sm">{labelText}</label>
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
      <h3 className="text-xl mb-4">Editando Garantía # {selectedWarranty?.warranty_incidents_id}</h3>
      
      {/* Si hay error mostrarlo */}
      {error && (
        <p className="text-red-500 text-sm mb-2">
          Error: {error?.message || JSON.stringify(error)}
        </p>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full max-w-sm">

        <InputGroup 
             labelText="Serial del Producto" 
             name="product_serial" 
             defaultValue={selectedWarranty?.product_serial}
             placeholder="10KQ34012414"
             required
        />

        <InputGroup 
             labelText="Nombre del Cliente" 
             name="warranty_customer" 
             defaultValue={selectedWarranty?.warranty_customer}
             placeholder="Miguel Arnulfo Pérez"
             required
        />

        <InputGroup 
             labelText="Teléfono" 
             name="warranty_phone" 
             defaultValue={selectedWarranty?.warranty_phone}
             placeholder="+57 300 123 XXXX"
             type="tel"
             required
        />

        <InputGroup 
             labelText="Dirección" 
             name="warranty_address" 
             defaultValue={selectedWarranty?.warranty_address}
             placeholder="Kr 45 # 67-XX"
             required
        />

        <InputGroup 
             labelText="Ciudad" 
             name="warranty_city" 
             defaultValue={selectedWarranty?.warranty_city}
             placeholder="Bogotá"
             required
        />

        <div className="flex flex-col gap-1">
            <label htmlFor="warranty_description" className="text-sm">Requerimiento</label>
            <textarea
                id="warranty_description"
                name="warranty_description"
                defaultValue={selectedWarranty?.warranty_description}
                rows="4" 
                className="border rounded-lg p-2 text-sm resize-none"
                required
            />
        </div>
      
        <div className="flex flex-col gap-1">
            <label htmlFor="warranty_status" className="text-sm">Estado</label>
            <select 
                id="warranty_status"
                name="warranty_status" 
                defaultValue={selectedWarranty?.warranty_status} 
                className="border rounded-lg p-2 py-3 text-sm"
                required
            >
                <option value="">Seleccione el estado</option>
                <option value="0">Pendiente</option>
                <option value="1">En Proceso</option>
                <option value="2">Finalizada</option>
            </select>
        </div>

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
