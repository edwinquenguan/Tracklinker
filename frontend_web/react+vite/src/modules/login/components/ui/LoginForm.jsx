// Hooks
import { useLogin } from "../../hooks/useLogin";
// Iconos
import { loginIcons } from "../../../../assets/icons/loginIcons";
import { actionsIcons } from "../../../../assets/icons/mainIcons";
// Components
import FormButtons from "./FormButtons";
import Loader from "../../../../globals/components/ui/Loader";

export default function LoginForm({ openModal }) {
  const {
    setEmail,
    setPassword,
    handleLogin,
    showPassword,
    setShowPassword,
    loading,
  } = useLogin(openModal);
  return (
    <section className="w-[100%] h-[100%] flex place-items-center justify-center">
      {/* Container del formulario */}
      <section className="min-w-[500px] flex flex-col items-center px-4 py-8 ">
        {/* Icono de Tracklinker */}
        <img
          src={loginIcons.tracklinkerIcon}
          alt=""
          className="w-[150px] h-[150px] dark:invert dark:brightness-0"
        />
        <form className="w-[330px] flex flex-col gap-1">
          {/* Campo del correo */}
          <section>
            <span className="text-xs font-medium">Correo</span>
            <section
              className="flex rounded-xl border
              dark:bg-[#2020226c] dark:border-[#101012]"
            >
              <input
                id="email-input"
                type="text"
                placeholder="tu@correo.com"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-3 text-sm rounded-xl outline-none bg-transparent
                autofill:bg-white autofill:shadow-[inset_0_0_0px_1000px_white]
                dark:border-[#101012]dark:text-white dark:placeholder:text-[#7c7c7cb5] dark:autofill:bg-black dark:autofill:shadow-[inset_0_0_0px_1000px_black]"
              />
            </section>
          </section>

          {/* Campo de la contraseña */}
          <section>
            <span className="text-xs font-medium">Contraseña</span>
            <section
              className="flex items-center rounded-xl border
              dark:bg-[#2020226c] dark:border-[#101012]"
            >
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-3 text-sm outline-none rounded-xl bg-transparent
                autofill:bg-white autofill:shadow-[inset_0_0_0px_1000px_white]
                dark:border-[#101012] dark:text-white dark:placeholder:text-[#7c7c7cb5] dark:autofill:bg-black dark:autofill:shadow-[inset_0_0_0px_1000px_black]"
              />

              <button
                className="pr-2"
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                <img
                  src={
                    showPassword
                      ? actionsIcons.visibility
                      : actionsIcons.lockVisibility
                  }
                  alt=""
                  className="dark:invert dark:brightness-0"
                />
              </button>
            </section>
          </section>
          {/* Botones de Ingresar y recuperar contraseña */}
          <FormButtons
            getIntoButtonText={loading ? <Loader /> : "Ingresar"}
            getIntoButtonOnclick={handleLogin}
            recoverButtonOnclick={() => openModal(null, "rememberPassword")}
          />
        </form>
      </section>
      {}
    </section>
  );
}
