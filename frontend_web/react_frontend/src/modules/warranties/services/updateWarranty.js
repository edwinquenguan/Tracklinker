// services/updateWarranty.js
import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function updateWarranty(warrantyId, updatedData) {

    const res = await fetch(`${apiRoutes.apiUrl}/warranty_incidents/update/${warrantyId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
        body: JSON.stringify(updatedData),
    });

    if (!res.ok) {
        let detail = `Error al actualizar la garantía con ID ${warrantyId}`;
        try {
            const json = await res.json();
            detail = json.message || detail;
        } catch {}
        throw new Error(detail);
    }

    try {
        return await res.json();
    } catch {
        return { message: "Garantía actualizada con éxito" };
    }
}
