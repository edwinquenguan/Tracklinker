import Layout from "../components/Layout/Layout";
import WarrantyCard from "../components/ui/WarrantyCard";
import TopSection from "../components/ui/TopSection";
import { warranties } from "../data/warranties";
import { warrantiesIcons} from "../assets/icons/mainIcons";

export default function WarrantiesPage(){
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
                    warrantyId={warranty.warrantyId}
                    warrantyRequirement={warranty.warrantyRequirement}
                    warratyCreateDate={warranty.warrantyCreateDate}
                    warrantyStatusIcon={warrantiesIcons.inprocessIcon}
                    warrantyStatus={warranty.warrantyStatus}
                    />
                ))}
            </section>
        </Layout>
    )
}