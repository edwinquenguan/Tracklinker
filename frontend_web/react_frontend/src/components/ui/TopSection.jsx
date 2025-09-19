import FilterButton from "./FilterButton";
import CreateButton from "./CreateButton";

export default function TopSection({sectionName, addButtonIcon, addButtonText, children}){
    return(
        <section className="flex items-center justify-between px-2 pb-3">
            <h1 className="font-medium">{sectionName}</h1>
            <section className="flex gap-4">
                {children}
                <FilterButton />
                <CreateButton 
                icon = {addButtonIcon}
                text = {addButtonText}
                />
            </section>
        </section>
    );
}