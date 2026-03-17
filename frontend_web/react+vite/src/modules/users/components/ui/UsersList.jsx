import UserItem from "./UserItem";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
        {loading ? (
          <SkeletonTheme baseColor="#f3eef5" highlightColor="#848185">
            <li>
              <Skeleton height={"68px"} count={13} borderRadius={"8px"} />
            </li>
          </SkeletonTheme>
        ) : (
          users.map((user) => (
            // Usuarios
            <UserItem
              key={user.id}
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
          ))
        )}
      </ul>
    </section>
  );
}
