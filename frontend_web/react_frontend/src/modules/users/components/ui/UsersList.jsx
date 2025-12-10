import { useUsers } from "../../hooks/useUsers";
import UserItem from "./UserItem";

export default function UsersList({ openModal }) {
  const { users, loading, error } = useUsers();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    /* Contenedor de los usuarios */
    <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
      <ul className="pt-3 flex flex-col gap-1">
        {users.map((user) => (
          // Usuarios
          <UserItem
            key={user.user_id}
            user_id={user.user_id}
            user_name={user.user_name}
            user_first_surname={user.user_first_surname}
            user_second_surname={user.user_second_surname}
            user_phone={user.user_phone}
            user_rol={user.rol_name}
            moreInfoOnClick={() => openModal(user, "info")}
            editButtonOnClick={() => openModal(user, "edit")}
            deleteButtonOnClick={() => openModal(user, "delete")}
          />
        ))}
      </ul>
    </section>
  );
}
