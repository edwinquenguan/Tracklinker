import ActionButtons from "../../../../globals/components/ui/ActionButtons";
import { actionsIcons } from "../../../../assets/icons/mainIcons";

export default function SupplierActions({
  editButtonOnClick,
  deleteButtonOnClick,
  moreInfoOnClick,
}) {
  return (
    // Botones para interactuar
    <nav className="flex gap-4">
      <ActionButtons
        editButtonOnClick={editButtonOnClick}
        deleteButtonOnClick={deleteButtonOnClick}
      >
        {/* Botón de más información del usuario */}
        <button onClick={moreInfoOnClick}>
          <img src={actionsIcons.moreInfoIcon} alt="" />
        </button>
      </ActionButtons>
    </nav>
  );
}
