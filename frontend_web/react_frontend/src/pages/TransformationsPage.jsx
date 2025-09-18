import { actionsIcons, warrantiesIcons } from "../assets/icons/mainIcons"
import { transformations } from "../data/transformations";
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";
import TranformationCard from "../components/ui/TransformationCard";

export default function TransformationsPage(){
    return(
        <Layout>
            <TopSection
            sectionName={"Transformaciones"}
            addButtonIcon={actionsIcons.addIcon}
            addButtonText={"Agregar Transformación"}    
            />
            {/* Contendor de las transformaciones */}
            <section className="max-h-[95%] flex flex-wrap gap-2 z-50 overflow-x-auto overflow-y-auto">
                {transformations.map((transformation) => (
                    <TranformationCard
                    transformationId={transformation.transformationId}
                    transformationRequirement={transformation.transformationRequirement}
                    transformationCreateDate={transformation.transformationCreateDate}
                    transformationStatusIcon={warrantiesIcons.inprocessIcon}
                    transformationStatus={transformation.transformationStatus}
                    />
                ))}
            </section>
        </Layout>
    )
}