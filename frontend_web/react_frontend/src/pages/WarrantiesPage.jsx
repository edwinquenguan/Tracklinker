import { useEffect, useState } from "react";
import { getWarranties } from "../services/warranties";
import Layout from "../components/Layout/Layout";
import WarrantyCard from "../components/ui/WarrantyCard";
import TopSection from "../components/ui/TopSection";
// import { warranties } from "../data/warranties";
import { warrantiesIcons} from "../assets/icons/mainIcons";

export default function WarrantiesPage(){
    const [warranties, setWarranties] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Esto llama a la función getWarranties y espera a obtener toda los datos y los almacena en "data"
    useEffect(() => {
        async function fetchWarranties() {
            try {
                setLoading(true)
                const data = await getWarranties();
                setWarranties(data);
            } catch (error) {
                setError(error.message);
            }
        }

    fetchWarranties();
    }, []);

    if(error) {

    }

    return(
        <Layout>
            <TopSection 
            sectionName={"Garantías"}
            addButtonIcon={warrantiesIcons.addWarrantyIcon}
            addButtonText={"Agregar Garantía"}
            />
            {/* Contenedor de las cards de garantia */}
            <section className="max-h-[95%] flex flex-wrap gap-2 z-50 overflow-x-auto overflow-y-auto">
                {warranties.map((warranty) => (
                    <WarrantyCard
                    warrantyId={warranty.warranty_incidents_id}
                    warrantyRequirement={warranty.warranty_description}
                    warrantyCreateDate={warranty.warranty_date}
                    warrantyStatusIcon={warrantiesIcons.inprocessIcon}
                    warrantyStatus={warranty.warranty_status}
                    />
                ))}
            </section>
        </Layout>
    )
}