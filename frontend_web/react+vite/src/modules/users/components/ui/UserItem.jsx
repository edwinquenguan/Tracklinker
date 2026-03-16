import { usersIcons } from "../../../../assets/icons/mainIcons";
import UserActions from "./UserActions";

export default function UserItem({
  user,
  editButtonOnClick,
  deleteButtonOnClick,
  moreInfoOnClick,
}) {
  return (
    <li
      className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300 cursor-pointer
                    dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
      key={user.id}
      onClick={moreInfoOnClick}
    >
      {/* Datos del Usuario */}
      <article>
        <address className="flex gap-3 not-italic font-medium dark:text-white">
          <p className="text-xl">
            {user.name} {user.first_surname} {user.second_surname}
          </p>
          <div className="flex items-center">
            <img
              src={usersIcons.phoneIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <p>{user.phone}</p>
          </div>
          <div className="flex items-center">
            <img
              src={usersIcons.rolIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <p>{user.rol_name}</p>
          </div>
        </address>
      </article>

      <UserActions
        editButtonOnClick={editButtonOnClick}
        deleteButtonOnClick={deleteButtonOnClick}
        moreInfoOnClick={moreInfoOnClick}
      />
    </li>
  );
}
