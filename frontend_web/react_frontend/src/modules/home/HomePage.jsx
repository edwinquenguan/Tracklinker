import Layout from "../../globals/components/Layout/Layout";
import ActionCard from "../../globals/components/ui/ActionCard";

export default function HomePage(){
    return(        
        <Layout>
            <h1 className="h-[10%] p-5 text-5xl font-medium dark:text-white"> Bienvenido, Agustín </h1>
            {/* Contenedor de las cards de los modúlos */}
            <section className="h-[90%] min-w-full">
                <ActionCard/>
            </section>
        </Layout>
    )
}