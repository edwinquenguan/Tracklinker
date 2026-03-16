import UserItem from "./UserItem";

export default function UsersList({
  users,
  loading,
  error,
  refetch,
  openModal,
}) {

  return (
    /* Contenedor de los usuarios */
    <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
      <ul className="flex flex-col gap-1">
        {users.map((user) => (
          // Usuarios
          <UserItem
            key={user.user_id}
            user={user}
            moreInfoOnClick={(e) => {
              e.stopPropagation();
              openModal(user, "info");
            }}
            editButtonOnClick={(e) => {
              e.stopPropagation();
              openModal(user, "edit", refetch);
            }}
            deleteButtonOnClick={(e) => {
              e.stopPropagation();
              openModal(user, "delete", refetch);
            }}
          />
        ))}
      </ul>
    </section>
  );
}
