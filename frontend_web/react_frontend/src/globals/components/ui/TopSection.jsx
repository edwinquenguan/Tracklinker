import FilterButton from "./FilterButton";
import CreateButton from "./CreateButton";

export default function TopSection({sectionName, addButtonIcon, addButtonText, children, filterOnClick, createOnClick}){
    return(
        <section className="flex items-center justify-between px-2 pb-3">
            <h1 className="font-medium dark:text-white">{sectionName}</h1>
            <section className="flex gap-4">
                {children}
                <FilterButton 
                onClick = {filterOnClick}
                />
                <CreateButton 
                icon = {addButtonIcon}
                text = {addButtonText}
                onClick = {createOnClick}
                />
            </section>
        </section>
    );
}