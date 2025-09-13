import Layout from "../components/Layout/Layout";
import SearchBar from "../components/ui/SearchBar";
import { users } from "../constants/users";
import { usersIcons, actionsIcons } from "../assets/icons/mainIcons";

export default function UsersPage(){
    return(
        <Layout>
            <section className="flex items-center justify-between">
            <h1 className="font-medium"> Usuarios </h1>
            {/* Botones para agregar y filtrar usuarios */}
                <section className="flex gap-4">
                    <button className="flex items-center px-6 py-3 gap-2 bg-[#f3eef5] rounded-3xl">
                        <img src={actionsIcons.filterIcon} alt="" className="w-6 h-6"/>
                         <p className="text-base font-medium"> Filtrar </p> 
                    </button>
                    <button className="flex items-center px-6 py-3 bg-black rounded-3xl"> 
                        <img src={usersIcons.addUserIcon} alt="" className="w-6 h-6"/>
                        <p className="text-base text-white font-medium"> Agregar Usuario </p>
                    </button>
                </section>
            </section>
            {/* Contenedor de los usuarios */}
            <ul className="min-h-[90%] max-w-full pt-3 overflow-x-auto overflow-y-auto">
                {users.map((user) => (
                    // Usuarios   
                        <li className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-xl">
                            {/* Datos del Usuario */}
                            <article>
                                <address className="flex gap-3 not-italic font-medium">
                                <p className="text-2xl">{user.name} {user.firstSurname} {user.secondSurname}</p>
                                <div className="flex items-center">
                                    <img src={usersIcons.phoneIcon} alt="" className="w-5 h-5" />
                                    <p>{user.phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={usersIcons.rolIcon} alt="" className="w-5 h-5" />
                                    <p>{user.rol}</p>
                                </div>
                                </address>
                            </article>

                            {/* Botones para interactuar con el usuario */}
                            <nav className="flex gap-2">
                                <button> <img src={actionsIcons.moreInfoIcon} alt="" /> </button>
                                <button> <img src={actionsIcons.editInfoIcon} alt="" /> </button>
                                <button> <img src={actionsIcons.deleteIcon} alt="" /></button>
                            </nav>
                        </li>
                ))}
            </ul>
        </Layout>
    );
}