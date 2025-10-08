import { asideIcons } from "../../../assets/icons/asideIcons";

export default function ProfileModal({ onClose }) {
  return (
    <section className="flex gap-5">
      <aside className="w-40 pr-3 border-r border-gray-300 dark:border-[#3a3d43]">
        {/* Lista de opciones */}
        <ul className="flex flex-col gap-2">
          <li>
            <button
              className="flex items-center px-5 py-3 rounded-xl bg-black text-white gap-3
                        hover:text-gray-200
                        dark:bg-white dark:text-black dark:hover:text-gray-700"
            >
              <img
                src={asideIcons.usersIcon}
                alt=""
                className="invert brightness-0 dark:brightness-200"
              />
              <span> Usuario </span>
            </button>
          </li>
          <li>
            <button
              className="flex py-3 pl-4 pr-7 gap-3 rounded-xl transition duration-300
                        hover:bg-[#efedf0]
                        dark:text-white dark:hover:bg-[#202022]"
            >
              <img
                src={asideIcons.themesIcon}
                alt=""
                className="brightness-200 dark:invert"
              />
              <span> Temas </span>
            </button>
          </li>
          <li>
            <button
              className="flex py-3 px-4 gap-3 rounded-xl transition duration-300
                        hover:bg-[#efedf0]
                        dark:text-white dark:hover:bg-[#202022]"
            >
              <img
                src={asideIcons.helpIcon}
                alt=""
                className="invert brightness-200 dark:brightness-0"
              />
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
              <span className="dark:text-white"> Nombre </span>
              <span
                className="py-5 px-10 rounded-xl bg-[#efedf0] font-light
                            dark:bg-[#202022] dark:text-white"
              >
                {" "}
                Agustín Perez García{" "}
              </span>
            </section>
            <section className="flex flex-col items-center justify-center gap-1">
              <span className="dark:text-white"> Correo Electrónico </span>
              <span
                className="p-5 rounded-xl bg-[#efedf0] font-light
                            dark:bg-[#202022] dark:text-white"
              >
                {" "}
                juan.perez1@example.com{" "}
              </span>
            </section>
          </article>
        </section>
        {/* Botones */}
        <section className="flex flex-col pt-8 gap-3">
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg text-sm bg-black text-white transition
                    hover:text-gray-200
                    dark:bg-[#2020226c] dark:text-white dark:hover:text-gray-800"
          >
            Cambiar Contraseña
          </button>
          <button
            onClick={onClose}
            className="px-5 py-3 rounded-lg text-red-500 text-sm transition
                    hover:bg-[#efedf0]
                    dark:hover:bg-[#2020226c]"
          >
            Cerrar Sesión
          </button>
        </section>
      </main>
    </section>
  );
}
