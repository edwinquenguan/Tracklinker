import { asideIcons } from "../../assets/icons/asideIcons";

export default function ProfileModal({onClose}) {
    return(
        <section className="flex gap-5">
            <aside className= "w-36 pr-3 border-r">
                {/* Lista de opciones */}
                <ul className="flex flex-col gap-2">
                    <li>
                        <button
                        className="flex items-center px-4 py-3 rounded-xl bg-black text-white gap-3
                        hover:text-gray-200
                        dark:bg-white dark:text-black">
                            <img src={asideIcons.usersIcon} alt="" className="invert brightness-0 dark:brightness-200" />
                            <span> Usuario </span>
                        </button>
                    </li>
                    <li>
                        <button className="flex p-3 gap-3 rounded-xl transition duration-300
                        hover:bg-[#efedf0]
                        dark:text-white dark:hover:bg-[#202022]">
                            <img src={asideIcons.helpIcon} alt="" className="invert brightness-200 dark:brightness-0" />
                            <span> Creditos </span>
                        </button>
                    </li>
                </ul>
            </aside>
            <main className="flex flex-col w-96 items-center justify-center">
                {/* Información del usuario */}
                <section className="flex flex-col items-center justify-center">
                    <img src={asideIcons.avatarIcon} alt="" className="h-20 w-20" />
                    <article className="flex flex-col items-center pt-5 gap-2">
                        <section className="flex flex-col items-center justify-center gap-1">
                            <span className="font-medium"> Nombre </span>
                            <span className="py-5 px-10 rounded-xl bg-[#efedf0]"> Agustín Perez García </span>
                        </section>
                        <section className="flex flex-col items-center justify-center gap-1">
                            <span className="font-medium"> Correo Electrónico </span>
                            <span className="p-5 rounded-xl bg-[#efedf0]"> juan.perez1@example.com </span>
                        </section>
                    </article>
                </section>
                {/* Botones */}
                <section className="flex flex-col pt-5 gap-3">
                    <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-lg text-sm bg-black text-white transition
                    hover:text-gray-200
                    dark:bg-white dark:text-black">
                        Cambiar Contraseña
                    </button>
                    <button
                    onClick={onClose}
                    className="px-5 py-3 rounded-lg text-sm transition
                    hover:bg-[#efedf0]
                    dark:text-white dark:hover:bg-[#2020226c]">
                        Cerrar Sesión
                    </button>
                </section>
            </main>
        </section>
    );
}