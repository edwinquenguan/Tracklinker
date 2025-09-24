import { useState, useEffect } from "react";
// import { users } from "../data/users";
import { getUsers } from "../services/users";
import { usersIcons, actionsIcons } from "../assets/icons/mainIcons";
import Modal from "../components/modals/Modal";
import FilterModal from "../components/modals/FilterModal";
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";
import FormField from "../components/ui/FormField";
import SearchBar from "../components/ui/SearchBar";

export default function UsersPage(){
    // Definir los estados y sus valores por defecto

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [modalType, setModalType] = useState(null);
    const [selectedUser, setSelectedUser] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    // Al momento de clickear un botón esto guarda la información del usuario y abre la modal que pertenece a ese botón
    const openModal = (user, type) => {
        setSelectedUser(user);
        setModalType(type);
    };
    // Y esto cierra la modal y quita los datos del usuario seleccionado
    const closeModal = () => {
        setSelectedUser(null);
        setModalType(null);
    };

    // Esto llama a la función getAllUsers y espera a obtener toda los datos y los almacena en "data"
    useEffect(() => {
        async function fetchUsers() {
            try {
                setLoading(true)
                const data = await getUsers();
                setUsers(data);
            } catch (error) {
                setError(error.message);
            }
        }

    fetchUsers();
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return(
        <Layout>
            <TopSection
            sectionName={"Usuarios"}
            addButtonIcon={usersIcons.addUserIcon}
            addButtonText={"Agregar Usuario"}
            createOnClick = {() =>{
                openModal(null, "add")
                setIsOpen(true)
            }}
            filterOnClick={() => {
                openModal(null, "filter")
                setIsOpen(true)
            }}
            >
            <SearchBar />
            </ TopSection>
            
            {/* Contenedor de los usuarios */}
            <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
                <ul className="pt-3 flex flex-col gap-1">
                    {users.map((user) => (
                        // Usuarios   
                            <li className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300
                            dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
                            key={user.user_id}>
                                {/* Datos del Usuario */}
                                <article>
                                    <address className="flex gap-3 not-italic font-medium dark:text-white">
                                        <p className="text-xl">{user.user_name} {user.user_first_surname} {user.user_second_surname}</p>
                                        <div className="flex items-center">
                                            <img src={usersIcons.phoneIcon} alt="" className="w-5 h-5 dark:invert" />
                                            <p>{user.user_phone}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <img src={usersIcons.rolIcon} alt="" className="w-5 h-5 dark:invert" />
                                            <p>{user.roles.rol_name}</p>
                                        </div>
                                    </address>
                                </article>

                                {/* Botones para interactuar con el usuario */}
                                <nav className="flex gap-4 dark:invert">
                                    <button onClick={() => {
                                        openModal(user, "info")
                                        setIsOpen(true)
                                    }}> 
                                        <img src={actionsIcons.moreInfoIcon} alt="" /> 
                                    </button>
                                    <button onClick={() => {
                                        openModal(user, "edit")
                                        setIsOpen(true)
                                        }}> 
                                        <img src={actionsIcons.editInfoIcon} alt="" /> 
                                    </button>
                                    <button onClick={() => {
                                        openModal(user, "delete")
                                        setIsOpen(true)
                                        }}> 
                                        <img src={actionsIcons.deleteIcon} alt="" />
                                    </button>
                                </nav>
                            </li>
                    ))}
                </ul>
            </section>

            {/* Modales */}
            {modalType && (
                <Modal
                title={
                    modalType === "filter"
                    ? "Filtrar"
                    : modalType === "add"
                    ? "Agregar Usuario"
                    : modalType === "info"
                    ? "Información del usuario"
                    : modalType === "edit"
                    ? "Editar usuario"
                    : "Eliminar usuario"
                }
                type={modalType}
                isOpen={isOpen}
                onClose={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                >
                {modalType === "filter" && (
                    <FilterModal
                    onClose={ () => {
                        closeModal()
                        setIsOpen(false)
                    }}
                    >
                    
                    </FilterModal>
                )}
                {modalType === "add" && (
                    <div className="flex flex-col items-center">
                        <form action="" className="flex flex-col gap-1">
                            <FormField
                            labelText={"Nombre"}
                            placeholder={"Felipe"} 
                            id={"name"}
                            />

                            <FormField
                            labelText={"Número"}
                            placeholder={"300012124"} 
                            id={"phone"}
                            />

                            <FormField
                            labelText={"Dirección"}
                            placeholder={"KR 124 # 12-124"} 
                            id={"address"}
                            />
                        </form>

                        {/* Botones */}
                        <div className="flex gap-2 pt-5">
                            <button 
                                className="bg-black text-white px-5 py-2 rounded-xl shadow-xl text-sm transition duration-300 hover:text-gray-400" 
                                onClick={() =>{
                                    closeModal()
                                    setIsOpen(false)
                                }}>
                                    Confirmar
                            </button>
                            <button
                                className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200" 
                                onClick={() =>{
                                    closeModal()
                                    setIsOpen(false)
                                }}>
                                    Cancelar
                            </button>
                        </div>
                    </div>
                )}
                {/* Modal para mas información del usuario */}
                {modalType === "info" && (
                    <div className="flex flex-col justify-center">
                        <p><strong>Rol:</strong> {selectedUser.roles.rol_name}</p>
                        <p><strong>Nombre:</strong> {selectedUser.user_name} {selectedUser.user_first_surname} {selectedUser.user_second_surname}</p>
                        <p><strong>Teléfono:</strong> {selectedUser.user_phone}</p>
                        <p><strong>Dirección:</strong> {selectedUser.user_address}</p>
                        <p><strong>Fecha De Creación:</strong> {selectedUser.user_date}</p>
                    </div>
                )}

                {/* Modal para editar el usuario */}
                {modalType === "edit" && 
                <div className="flex flex-col items-center">
                    <form action="" className="flex flex-col gap-2">
                        <FormField
                        labelText={"Nombre"}
                        placeholder={selectedUser.user_name}
                        id={"name"}
                        />
                        <FormField
                        labelText={"Apellidos"}
                        placeholder={`${selectedUser.user_first_surname} ${selectedUser.user_second_surname}`}
                        id={"surname"}
                        />
                        <FormField
                        labelText={"Número"}
                        placeholder={selectedUser.user_phone}
                        id={"phone"}
                        />
                        <FormField
                        labelText={"Dirección"}
                        placeholder={selectedUser.user_address}
                        id={"address"}
                        />
                    </form>

                    {/* Botones */}
                    <div className="flex gap-2 pt-5">
                        <button 
                            className="bg-black text-white px-5 py-2 rounded-xl shadow-xl text-sm transition duration-300 hover:text-gray-400" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                Confirmar
                        </button>
                        <button
                            className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                Cancelar
                        </button>
                    </div>
                </div>
                }

                {/* Modal para eliminar el usuario */}
                {modalType === "delete" && (
                    <div className="flex flex-col justify-center items-center">
                        <p>¿Seguro que deseas eliminar a <span className="font-medium">{selectedUser.user_name}</span>?</p>
                        
                        {/* Botones */}
                        <div className="flex pt-4 gap-5">
                            <button 
                            className="flex items-center gap-2 px-5 py-2 rounded-xl shadow-xl text-sm bg-red-600 text-white transition duration-300 hover:bg-red-700" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                <img src={actionsIcons.deleteIcon} alt="" className="w-[20px] h-[20px] invert" />
                                Eliminar
                            </button>
                            <button
                            className="px-5 py-2 border rounded-xl shadow-xl text-sm transition duration-300 hover:bg-gray-200" 
                            onClick={() =>{
                                closeModal()
                                setIsOpen(false)
                            }}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                )}
                </Modal>
            )}
        </Layout>
    );
}