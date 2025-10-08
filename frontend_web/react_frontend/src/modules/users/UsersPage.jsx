import { useState, useEffect } from "react";
// import { users } from "../data/users";
import { getUsersWithRol } from "../../services/getUsersWithRol";
import { usersIcons, actionsIcons } from "../../assets/icons/mainIcons";
import Modal from "../../globals/components/modals/Modal";
import FilterModal from "../../globals/components/modals/FilterModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import SelectMenu from "../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../globals/components/modals/ConfirmCancelButtons";
import ActionButtons from "../../globals/components/ui/ActionButtons";
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import FormField from "../../globals/components/ui/FormField";
import SearchBar from "../../globals/components/ui/SearchBar";

export default function UsersPage() {
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
        setLoading(true);
        const data = await getUsersWithRol();
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

  return (
    <Layout
      avatarOnClick={() => {
        openModal(null, "user");
        setIsOpen(true);
      }}
    >
      <TopSection
        sectionName={"Usuarios"}
        addButtonIcon={usersIcons.addUserIcon}
        addButtonText={"Agregar Usuario"}
        createOnClick={() => {
          openModal(null, "add");
          setIsOpen(true);
        }}
        filterOnClick={() => {
          openModal(null, "filter");
          setIsOpen(true);
        }}
      >
        <SearchBar />
      </TopSection>

      {/* Contenedor de los usuarios */}
      <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
        <ul className="pt-3 flex flex-col gap-1">
          {users.map((user) => (
            // Usuarios
            <li
              className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300
                        dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
              key={user.user_id}
            >
              {/* Datos del Usuario */}
              <article>
                <address className="flex gap-3 not-italic font-medium dark:text-white">
                  <p className="text-xl">
                    {user.user_name} {user.user_first_surname}{" "}
                    {user.user_second_surname}
                  </p>
                  <div className="flex items-center">
                    <img
                      src={usersIcons.phoneIcon}
                      alt=""
                      className="w-5 h-5 dark:invert"
                    />
                    <p>{user.user_phone}</p>
                  </div>
                  <div className="flex items-center">
                    <img
                      src={usersIcons.rolIcon}
                      alt=""
                      className="w-5 h-5 dark:invert"
                    />
                    <p>{user.roles.rol_name}</p>
                  </div>
                </address>
              </article>

              {/* Botones para interactuar con el usuario */}
              <nav className="flex gap-4">
                <ActionButtons
                  editButtonOnClick={() => {
                    openModal(user, "edit");
                    setIsOpen(true);
                  }}
                  deleteButtonOnClick={() => {
                    openModal(user, "delete");
                    setIsOpen(true);
                  }}
                >
                  {/* Botón de más información del usuario */}
                  <button
                    onClick={() => {
                      openModal(user, "info");
                      setIsOpen(true);
                    }}
                  >
                    <img src={actionsIcons.moreInfoIcon} alt="" />
                  </button>
                </ActionButtons>
              </nav>
            </li>
          ))}
        </ul>
      </section>

      {/* Modales */}
      {modalType && (
        <Modal
          title={
            modalType === "user"
              ? "Configuración"
              : modalType === "filter"
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
            closeModal();
            setIsOpen(false);
          }}
        >
          {modalType === "user" && (
            <ProfileModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            />
          )}
          {modalType === "filter" && (
            <FilterModal
              onClose={() => {
                closeModal();
                setIsOpen(false);
              }}
            ></FilterModal>
          )}
          {modalType === "add" && (
            <section className="flex flex-col items-center">
              <form action="" className="flex flex-col gap-1">
                <SelectMenu
                  id={"user_rol_menu"}
                  name={"user_rol_menu"}
                  spanText={"Rol"}
                >
                  <option value="admin"> Administrador </option>
                  <option value="almacen"> Almacén </option>
                  <option value="tecnico"> Técnico </option>
                </SelectMenu>

                <FormField
                  labelText={"Nombre Completo"}
                  placeholder={"Felipe Contreras Aguilar"}
                  id={"name"}
                  autoComplete="name"
                />

                <FormField
                  labelText={"Número"}
                  placeholder={"300012124"}
                  id={"phone"}
                  autoComplete="tel"
                />

                <FormField
                  labelText={"Email"}
                  placeholder={"pepito@gmail.com"}
                  id={"email"}
                  autoComplete="email"
                />

                <FormField
                  labelText={"Dirección"}
                  placeholder={"KR 124 # 12-124"}
                  id={"address"}
                  autoComplete="address"
                />
              </form>

              {/* Botones */}
              <ConfirmCancelButtons
                confirmText={"Confirmar"}
                cancelText={"Cancelar"}
                confirmButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
                cancelButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
              />
            </section>
          )}
          {/* Modal para mas información del usuario */}
          {modalType === "info" && (
            <section className="flex flex-col justify-center dark:text-white">
              <p>
                <strong>Rol:</strong> {selectedUser.roles.rol_name}
              </p>
              <p>
                <strong>Nombre:</strong> {selectedUser.user_name}{" "}
                {selectedUser.user_first_surname}{" "}
                {selectedUser.user_second_surname}
              </p>
              <p>
                <strong>Teléfono:</strong> {selectedUser.user_phone}
              </p>
              <p>
                <strong>Correo:</strong> {selectedUser.user_email}
              </p>
              <p>
                <strong>Dirección:</strong> {selectedUser.user_address}
              </p>
              <p>
                <strong>Fecha De Creación:</strong> {selectedUser.user_date}
              </p>
            </section>
          )}

          {/* Modal para editar el usuario */}
          {modalType === "edit" && (
            <section className="flex flex-col items-center">
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
                  labelText={"Correo Electrónico"}
                  placeholder={selectedUser.user_email}
                  id={"email"}
                />
                <FormField
                  labelText={"Dirección"}
                  placeholder={selectedUser.user_address}
                  id={"address"}
                />
              </form>

              {/* Botones */}
              <ConfirmCancelButtons
                confirmText={"Confirmar"}
                cancelText={"Cancelar"}
                confirmButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
                cancelButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
              />
            </section>
          )}

          {/* Modal para eliminar el usuario */}
          {modalType === "delete" && (
            <section className="flex flex-col justify-center items-center dark:text-white">
              <p>
                ¿Seguro que deseas eliminar a{" "}
                <span className="font-medium">
                  {selectedUser.user_name} {selectedUser.user_first_surname}
                </span>
                ?
              </p>

              {/* Botones */}
              <ConfirmCancelButtons
                confirmText={"Eliminar"}
                confirmBgColor="red-600"
                confirmDarkBgColor=""
                cancelText={"Cancelar"}
                confirmButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
                cancelButtonOnClick={() => {
                  closeModal();
                  setIsOpen(false);
                }}
              />
            </section>
          )}
        </Modal>
      )}
    </Layout>
  );
}
