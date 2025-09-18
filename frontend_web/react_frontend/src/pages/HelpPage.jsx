import Layout from "../components/Layout/Layout";

export default function HelpPage(){
    return(
        <Layout>
            <h1 className="px-2 py-3 font-medium dark:text-white"> Informes </h1>
            {/* Contenedor del formulario */}
            <section className="h-[95%] flex items-center justify-center">
                <form action="" className="flex flex-col items-center justify-center px-32 py-12 gap-3 border shadow-2xl shadow-gray-400">
                    <h2> Formulario de Ayuda </h2>
                    <label for="name"> Nombre </label>
                    <input type="text" className="px-5 py-2 border border-gray-300 rounded-md outline-none" />
                    <label for="rol"> Rol o Cargo </label>
                    <input type="text" className="px-5 py-2 border border-gray-300 rounded-md outline-none" />
                    <label for=""> Email </label>
                    <input type="email" className="px-5 py-2 border border-gray-300 rounded-md outline-none" />
                    <label for=""> Escribe aquí tu inquietud o queja</label>
                    <input type="text" className="h-24 px-5 py-2 border border-gray-300 rounded-md outline-none"  />
                    <label for="">Agrega una imagen (Opcional)</label>
                    <input type="file" className=""/>
                </form>
            </section>
        </Layout>
    )
}