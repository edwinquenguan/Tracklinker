import React, { useRef } from "react"; 


import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";
import { useCreateWarranty } from "../../hooks/useCreateWarranties";

export default function AddWarrantyModal({ onCloseModal }) {
    const formRef = useRef(null); 

    const { handleCreateWarranty, loading } = useCreateWarranty(
        () => onCloseModal(), 
        // 🔑 Muestra el error de validación completo (422)
        (error) => alert(`ERROR DE VALIDACIÓN: ${error}`) 
    );

    const handleSubmitViaButton = () => {
        formRef.current?.requestSubmit(); 
    };

    return (
        <section className="flex flex-col items-center">
            <form onSubmit={handleCreateWarranty} ref={formRef} className="flex flex-col gap-1">
                
            
                
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
                
                
                {/* Este campo envía el texto, si Pydantic espera un INT, fallará el 422 */}
                <input type="hidden" name="warranty_status" value="0" /> 

                {/* Los siguientes inputs ya eran nativos */}
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
                    className="h-18 w-80 border rounded-lg p-2 text-sm" // Añadí clases para consistencia
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