import { actionsIcons } from "../../../../assets/icons/mainIcons";
import ActionButtons from "../../../../globals/components/ui/ActionButtons";

export default function UserActions() {
  return (
    /* Botones para interactuar con el usuario */
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
  );
}
