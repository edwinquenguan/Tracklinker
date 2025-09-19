import { useState } from "react";
import { users } from "../data/users";
import { usersIcons, actionsIcons } from "../assets/icons/mainIcons";
import Modal from "../components/ui/Modal";
import FilterModal from "../components/ui/FilterModal";
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";
import FormField from "../components/ui/FormField";
import SearchBar from "../components/ui/SearchBar";

export default function UsersPage(){
    // Definir los estados y sus valores por defecto
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
            <ul className="max-h-[90%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {users.map((user) => (
                    // Usuarios   
                        <li className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300
                        dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
                        key={user.id}>
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
                isOpen={isOpen}
                onClose={() => {
                    closeModal()
                    setIsOpen(false)
                }}
                >
                {modalType === "filter" && (
                    <FilterModal />
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
                            placeholder={"Felipe"} 
                            id={"name"}
                            />

                            <FormField
                            labelText={"Dirección"}
                            placeholder={"Felipe"} 
                            id={"name"}
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
                        <p><strong>Nombre:</strong> {selectedUser.name} {selectedUser.firstSurname} {selectedUser.secondSurname}</p>
                        <p><strong>Rol:</strong> {selectedUser.rol}</p>
                        <p><strong>Teléfono:</strong> {selectedUser.phone}</p>
                        <p><strong>Dirección:</strong> {selectedUser.address}</p>
                        <p><strong>Fecha De Creación:</strong> {selectedUser.user_date}</p>
                    </div>
                )}

                {/* Modal para editar el usuario */}
                {modalType === "edit" && 
                <div className="flex flex-col items-center">
                    <form action="" className="flex flex-col gap-2">
                        <FormField
                        labelText={"Nombre"}
                        placeholder={selectedUser.name}
                        id={"name"}
                        />
                        <FormField
                        labelText={"Apellidos"}
                        placeholder={`${selectedUser.firstSurname} ${selectedUser.secondSurname}`}
                        id={"surname"}
                        />
                        <FormField
                        labelText={"Número"}
                        placeholder={selectedUser.phone}
                        id={"phone"}
                        />
                        <FormField
                        labelText={"Dirección"}
                        placeholder={selectedUser.address}
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
                        <p>¿Seguro que deseas eliminar a <span className="font-medium">{selectedUser.name}</span>?</p>
                        
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