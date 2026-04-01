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
        <form className="w-80 flex flex-col gap-2">
          {/* Campo del correo */}
          <section
            className="flex px-3.5 py-3 gap-2 items-center bg-white rounded-xl border
            dark:bg-[#2020226c] dark:border-[#101012]"
          >
            <div className="flex items-center gap-3">
              <img src={loginIcons.emailIcon} alt="" className="w-6 h-6" />
              <input
                id="email-input"
                type="text"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                className="py-1 text-sm outline-none dark:bg-transparent dark:border-[#101012] dark:text-white"
              />
            </div>
          </section>

          {/* Campo de la contraseña */}
          <section
            className="flex px-3.5 py-3 gap-2 items-center justify-between bg-white rounded-xl border
            dark:bg-[#2020226c] dark:border-[#101012]"
          >
            <div className="flex items-center gap-3">
              <img
                src={loginIcons.hidePasswordIcon}
                alt=""
                className="w-6 h-6 dark:invert"
              />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                className="py-1 text-sm outline-none dark:bg-transparent dark:border-[#101012] dark:text-white"
              />
            </div>
            <button
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
              />
            </button>
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
