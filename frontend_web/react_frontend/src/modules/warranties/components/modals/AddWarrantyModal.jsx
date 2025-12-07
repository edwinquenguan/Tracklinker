import React, { useRef } from "react"; 

import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { useCreateWarranty } from "../../hooks/useCreateWarranties";

// 1. Aceptar la nueva prop onAddSuccess
export default function AddWarrantyModal({ onCloseModal, onAddSuccess }) {
    const formRef = useRef(null); 

    // 2. Ejecutar onAddSuccess() junto con onCloseModal() en caso de éxito.
    // Creamos una función de éxito que hace ambas cosas:
    const handleSuccess = () => {
        onCloseModal();
        if (onAddSuccess) {
            onAddSuccess(); // 👈 Ejecuta la recarga de datos en el componente padre (WarrantiesPage)
        }
    };

    const { handleCreateWarranty, loading } = useCreateWarranty(
        handleSuccess, // 👈 Usamos la función combinada
        // 🔑 Muestra el error de validación completo (422)
        (error) => alert(`ERROR DE VALIDACIÓN: ${error}`) 
    );

    const handleSubmitViaButton = () => {
        formRef.current?.requestSubmit(); 
    };

    return (
        <section className="flex flex-col items-center">
            <form onSubmit={handleCreateWarranty} ref={formRef} className="flex flex-col gap-1">
                
                {/* ... (Tus campos de formulario) ... */}
                <label className="text-sm mt-1">Serial</label>
                <input type="text" name="product_serial" placeholder="10KQ34012414" className="border rounded-lg p-2 text-sm" />
                
                <label className="text-sm mt-1">Nombre del Cliente</label>
                <input type="text" name="warranty_customer" placeholder="Miguel Arnulfo Pérez" className="border rounded-lg p-2 text-sm" />
                
                <label className="text-sm mt-1">Teléfono</label>
                <input type="text" name="warranty_phone" placeholder="+57 300 123 XXXX" className="border rounded-lg p-2 text-sm" />
                
                <label className="text-sm mt-1">Dirección</label>
                <input type="text" name="warranty_address" placeholder="kr 45 # 67-XX" className="border rounded-lg p-2 text-sm" />
                
                <label className="text-sm mt-1">Ciudad</label>
                <input type="text" name="warranty_city" placeholder="Bogotá" className="border rounded-lg p-2 text-sm" />
                
                
                <input type="hidden" name="warranty_status" value="0" /> 

                <span>Requerimiento</span>
                <input
                    type="text"
                    name="warranty_description"
                    className="h-20 w-72 p-2 text-sm border rounded-lg"
                />

                <span>Archivos adjuntos</span>
                <input
                    type="text"
                    name="warranty_link_attachments"
                    multiple
                    className="h-18 w-80 border rounded-lg p-2 text-sm" 
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-blue-600 text-white px-4 py-1 rounded mt-2 hidden" 
                >
                    {loading ? "Enviando..." : "Enviar"}
                </button>

            </form>

            <ConfirmCancelButtons
                confirmButtonOnClick={handleSubmitViaButton}
                cancelButtonOnClick={onCloseModal}
                confirmLoading={loading}
            />
        </section>
    );
}