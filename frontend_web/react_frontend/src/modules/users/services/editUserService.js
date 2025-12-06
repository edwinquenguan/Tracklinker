import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function editUserService(user_data) {
    const res = await fetch(`${apiRoutes.apiUrl}${apiRoutes.users}/update`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: getToken()
        },
        body: JSON.stringify(user_data),
    })
        // Validamos si la respuesta no fue OK
    if (!res.ok) {
        throw new Error(await res.json());
    }

    return await res.json();
}