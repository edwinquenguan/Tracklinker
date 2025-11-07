export default function FormButtons({getIntoButtonOnclick, recoverButtonOnclick}){
    return(
        <section className="flex flex-col p-3 gap-2">
            <button
                onClick={getIntoButtonOnclick}
                className="flex justify-center px-8 py-4 text-base text-white bg-blue-700 rounded-xl transition duration-300
                        hover:shadow-2xl
                        dark:hover:shadow-[0px_0px_20px_-10px_#1d4ed8]"
            >
                Ingresar
            </button>
            <button
                type="button"
                onClick={recoverButtonOnclick}
                className="flex justify-center px-8 py-4 text-base rounded-xl transition-all duration-300
                hover:bg-stone-300
                dark:text-white"
            >
                ¿Olvidaste tu Contraseña?
            </button>
        </section>
    );
}