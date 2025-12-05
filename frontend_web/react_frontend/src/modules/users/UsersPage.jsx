// Hooks
import { useModal } from "../../globals/hooks/useModal";
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

  return (
    <Layout avatarOnClick={() => openModal(null, "user")}>
      <TopSection
        sectionName={"Usuarios"}
        addButtonIcon={usersIcons.addUserIcon}
        addButtonText={"Agregar Usuario"}
        createOnClick={() => {
          openModal(null, "add");
        }}
        filterOnClick={() => openModal(null, "filter")}
      >
        <SearchBar />
      </TopSection>

      {/* Contenedor de los usuarios */}
      <UsersList openModal={openModal} />

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
          {modalType === "add" && <AddUserModal onClose={() => closeModal()} />}
          {/* Modal para mas información del usuario */}
          {modalType === "info" && (
            <MoreInfoModal
              rol_name={modalData.rol_name}
              user_name={modalData.user_name}
              user_first_surname={modalData.user_first_surname}
              user_second_surname={modalData.user_second_surname}
              user_phone={modalData.user_phone}
              user_email={modalData.user_email}
              user_address={modalData.user_address}
              user_date={modalData.user_date}
              onClose={() => closeModal()}
            />
          )}

          {/* Modal para editar el usuario */}
          {modalType === "edit" && (
            <EditUserInfoModal
              user_id={modalData.user_id}
              user_name={modalData.user_name}
              user_first_surname={modalData.user_first_surname}
              user_second_surname={modalData.user_second_surname}
              user_phone={modalData.user_phone}
              user_email={modalData.user_email}
              user_address={modalData.user_phone}
              onClose={() => closeModal()}
            />
          )}

          {/* Modal para eliminar el usuario */}
          {modalType === "delete" && (
            <DeleteUserModal
              user_name={modalData.user_name}
              user_first_surname={modalData.user_first_surname}
              onClose={() => closeModal()}
            />
          )}
        </Modal>
      )}
    </Layout>
  );
}
