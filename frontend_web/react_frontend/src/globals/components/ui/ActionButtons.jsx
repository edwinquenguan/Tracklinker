import { actionsIcons } from "../../../assets/icons/mainIcons";

export default function ActionButtons({children, editButtonOnClick, deleteButtonOnClick}) {
    return(
        <section className="flex items-center justify-center gap-5">
            {children}
            <button onClick={editButtonOnClick}> 
                <img src={actionsIcons.editInfoIcon} alt="" className="dark:invert" />     
            </button>
            <button onClick={deleteButtonOnClick}>  
                <img src={actionsIcons.deleteIcon} alt="" className="dark:invert" />
            </button>
        </section>
    );
}