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
            <ul className="max-h-[90%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {users.map((user) => (
                    // Usuarios   
                        <li className="flex items-center justify-between p-5 bg-[#f3eef5] dark:bg-[#0f0f11] rounded-lg shadow-md">
                            {/* Datos del Usuario */}
                            <article>
                                <address className="flex gap-3 not-italic font-medium dark:text-white">
                                    <p className="text-xl">{user.name} {user.firstSurname} {user.secondSurname}</p>
                                    <div className="flex items-center">
                                        <img src={usersIcons.phoneIcon} alt="" className="w-5 h-5 dark:invert" />
                                        <p>{user.phone}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <img src={usersIcons.rolIcon} alt="" className="w-5 h-5 dark:invert" />
                                        <p>{user.rol}</p>
                                    </div>
                                </address>
                            </article>

                            {/* Botones para interactuar con el usuario */}
                            <nav className="flex gap-2 dark:invert">
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