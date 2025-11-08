import { loginIcons } from "../../../../assets/icons/loginIcons";
import FormButtons from "./FormButtons";

export default function LoginForm({
  email,
  password,
  setEmail,
  setPassword,
  getIntoButtonOnclick,
  recoverButtonOnclick,
}) {
  return (
    <section className="w-[100%] h-[100%] flex place-items-center justify-center">
      {/* Container del formulario */}
      <section className="flex flex-col min-w-[600px] items-center p-4">
        {/* Icono de Tracklinker */}
        <img
          src={loginIcons.tracklinkerIcon}
          alt=""
          className="w-[150px] h-[150px] dark:invert dark:brightness-0"
        />
        <form className="flex flex-col gap-2">
          {/* Campo del correo */}
          <section
            className="flex pl-4 py-3 gap-2 items-center bg-white rounded-lg
                            dark:bg-[#2020226c] dark:border-[#101012]"
          >
            <img
              src={loginIcons.userIcon}
              alt=""
              className="w-6 h-6 dark:invert"
            />
            <input
              value={email}
              id="email-input"
              type="text"
              placeholder="Email"
              onChange={setEmail}
              className="px-2 py-1 text-sm outline-none dark:bg-transparent dark:border-[#101012] dark:text-white"
            />
          </section>
          {/* Campo de la contraseña */}
          <section
            className="flex pl-4 py-3 gap-2 items-center bg-white rounded-lg
                            dark:bg-[#2020226c] dark:border-[#101012]"
          >
            <img
              src={loginIcons.hidePasswordIcon}
              alt=""
              className="w-6 h-6 dark:invert"
            />
            <input
              value={password}
              type="password"
              placeholder="Contraseña"
              onChange={setPassword}
              className="px-2 py-1 text-sm outline-none dark:bg-transparent dark:border-[#101012] dark:text-white"
            />
          </section>
          {/* Botones de Ingresar y recuperar contraseña */}
          <FormButtons
            getIntoButtonOnclick={getIntoButtonOnclick}
            recoverButtonOnclick={recoverButtonOnclick}
          />
        </form>
      </section>
    </section>
  );
}
