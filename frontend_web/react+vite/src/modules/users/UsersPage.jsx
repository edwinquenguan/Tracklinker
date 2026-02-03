// Hooks
import { useModal } from "../../globals/hooks/useModal";
import { useUsers } from "./hooks/useUsers";
// Iconos
import { usersIcons } from "../../assets/icons/mainIcons";
// Modales
import Modal from "../../globals/components/modals/Modal";
import FilterUserModal from "./components/modals/FilterUserModal";
import ProfileModal from "../../globals/components/modals/ProfileModal";
import MoreInfoModal from "./components/modals/MoreInfoModal";
import EditUserInfoModal from "./components/modals/EditUserInfoModal";
import DeleteUserModal from "./components/modals/DeleteUserModal";
import AddUserModal from "./components/modals/AddUserModal";
// Componentes
import Layout from "../../globals/components/Layout/Layout";
import TopSection from "../../globals/components/ui/TopSection";
import SearchBar from "../../globals/components/ui/SearchBar";
import UsersList from "./components/ui/UsersList";

export default function UsersPage() {
  // Traer todos los datos o states de sus hooks
  const { modalType, isOpen, modalData, openModal, closeModal } = useModal();
  const { users, loading, error, fetchUsers } = useUsers();

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName={"Usuarios"}
        addButtonIcon={usersIcons.addUserIcon}
        addButtonText={"Agregar Usuario"}
        createOnClick={() => openModal(null, "add", fetchUsers)}
        filterOnClick={() => openModal(null, "filter", fetchUsers)}
      >
        <SearchBar />
      </TopSection>

      {/* Contenedor de los usuarios */}
      <UsersList
        users={users}
        loading={loading}
        error={error}
        refetch={fetchUsers}
        openModal={openModal}
      />

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
          onClose={() => closeModal()}
        >
          {modalType === "user" && (
            <ProfileModal onClose={() => closeModal()} />
          )}
          {modalType === "filter" && (
            <FilterUserModal onClose={() => closeModal()} />
          )}
          {/* Modal para agregar un usuario */}
          {modalType === "add" && (
            <AddUserModal onClose={() => closeModal()} openModal={openModal} />
          )}
          {/* Modal para mas información del usuario */}
          {modalType === "info" && <MoreInfoModal user={modalData} />}

          {/* Modal para editar el usuario */}
          {modalType === "edit" && (
            <EditUserInfoModal user={modalData} onClose={() => closeModal()} />
          )}

          {/* Modal para eliminar el usuario */}
          {modalType === "delete" && (
            <DeleteUserModal user={modalData} onClose={() => closeModal()} />
          )}
        </Modal>
      )}
    </Layout>
  );
}
