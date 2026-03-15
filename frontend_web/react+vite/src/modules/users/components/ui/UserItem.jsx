import { usersIcons } from "../../../../assets/icons/mainIcons";
import UserActions from "./UserActions";

export default function UserItem({
  user_id,
  user_name,
  user_first_surname,
  user_second_surname,
  user_phone,
  user_rol,
  editButtonOnClick,
  deleteButtonOnClick,
  moreInfoOnClick,
}) {
  return (
    <li
      className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300 cursor-pointer
                    dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
      key={user_id}
      onClick={moreInfoOnClick}
    >
      {/* Datos del Usuario */}
      <article>
        <address className="flex gap-3 not-italic font-medium dark:text-white">
          <p className="text-xl">
            {user_name} {user_first_surname} {user_second_surname}
          </p>
          <div className="flex items-center">
            <img
              src={usersIcons.phoneIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <p>{user_phone}</p>
          </div>
          <div className="flex items-center">
            <img
              src={usersIcons.rolIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <p>{user_rol}</p>
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
