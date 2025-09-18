import { users } from "../data/users";
import { usersIcons, actionsIcons } from "../assets/icons/mainIcons";
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";
//import SearchBar from "../components/ui/SearchBar";

export default function UsersPage(){
    return(
        <Layout>
            <TopSection
            sectionName={"Usuarios"}
            addButtonIcon={usersIcons.addUserIcon}
            addButtonText={"Agregar Usuario"}
            />
            {/* Contenedor de los usuarios */}
            <ul className="min-h-[90%] max-w-full pt-3 overflow-x-auto overflow-y-auto">
                {users.map((user) => (
                    // Usuarios   
                        <li className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-xl shadow-md">
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