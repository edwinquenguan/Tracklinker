import { NavLink } from "react-router-dom";
import { loginIcons } from "../assets/icons/loginIcons";

export default function Login(){
    return(
        <section className="w-[100%] h-[100%] flex place-items-center justify-center">
            <section className="flex flex-col min-w-[600px] items-center p-4 bg-neutral-200 rounded-3xl shadow-md shadow-neutral-300">
                <img src={loginIcons.tracklinkerIcon} alt="" className="w-[150px] h-[150px]"/>
                <form className="flex flex-col gap-2">
                    <section className="flex px-4 py-2 gap-2 items-center bg-white rounded-lg">
                        <img src={loginIcons.userIcon} alt=""/>
                        <input type="text" placeholder="Usuario" className="px-2 py-1 text-sm outline-none"/>
                    </section>
                    <section className="flex px-4 py-2 gap-2 items-center bg-white rounded-lg">
                        <img src={loginIcons.hidePasswordIcon} alt="" className="w-6 h-6"/>
                        <input type="text" placeholder="Contraseña" className="px-2 py-1 text-sm outline-none"/>
                    </section>
                    <section>
                        <button className="text-sm"> ¿Olvidaste tu Contraseña? </button>
                    </section>
                    <section className="flex flex-col p-3 gap-2">
                        <NavLink
                        to="/home"
                        className="flex justify-center px-8 py-4 text-base text-white bg-blue-700 rounded-xl shadow-md shadow-blue-600 transition duration-300
                        hover:shadow-blue-700">
                            Ingresar
                        </NavLink>
                        <button className="flex justify-center px-8 py-4 text-base bg-gray-200 rounded-xl shadow-md shadow-gray-300 transition duration-300
                        hover:shadow-gray-400"> Registrarme </button>
                    </section>
                </form>
            </section>
        </section>
    )
}