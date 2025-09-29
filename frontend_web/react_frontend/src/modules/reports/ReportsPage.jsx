import Layout from "../../components/Layout/Layout";
import ActionCard from "../../components/ui/ActionCard";

export default function ReportsPage(){
    return(
        <Layout>
            <h1 className="px-2 py-3 font-medium dark:text-white"> Informes </h1>
            {/* Contenedor de las cards */}
            <section className="h-[90%] min-w-full">
                <ActionCard/>
            </section>
        </Layout>
    )
}