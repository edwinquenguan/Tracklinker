import { apiRoutes } from "../../../config/apiRoutes";
import { getToken } from "../../../utils/auth";

export async function getTransformations() {
  const url = `${apiRoutes.apiUrl}${apiRoutes.transformations}`;
  console.log("Fetching transformaciones desde:", url);

  const res = await fetch(url, {
    method: "GET",
    headers: { Authorization: getToken() },
  });

  // Evitamos crash si no es JSON
  let data = null;
  try { data = await res.json(); } catch {}

  if (!res.ok) {
    throw new Error(data?.message || `Error en la petición: ${res.status} ${res.statusText}`);
  }

  return data?.data || data;
}
