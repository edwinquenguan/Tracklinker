import { actionsIcons } from "../../../assets/icons/mainIcons";

export default function ActionButtons({
  children,
  editButtonOnClick,
  deleteButtonOnClick,
}) {
  return (
    <section className="flex items-center justify-center gap-5 dark:invert">
      {children}
      <button onClick={editButtonOnClick}>
        <img
          src={actionsIcons.editInfoIcon}
          alt=""
          className="dark:brightness-200 hover:scale-125 transition-all duration-500"
        />
      </button>
      <button onClick={deleteButtonOnClick}>
        <img
          src={actionsIcons.deleteIcon}
          alt=""
          className="dark:brightness-200 hover:scale-125 transition-all duration-500"
        />
      </button>
    </section>
  );
}
