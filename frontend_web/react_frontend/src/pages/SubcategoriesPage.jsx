import { subcategories } from "../data/subcategories"
import { actionsIcons } from "../assets/icons/mainIcons";
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";

export default function SubcategoriesPage(){
    return(
        <Layout>
            <TopSection
            sectionName={"Subcategorias"}
            addButtonIcon={actionsIcons.addIcon}
            addButtonText={"Agregar Subcategoria"}
            />
            {/* Listado de subcategorias */}
                <ul className="min-h-[90%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {subcategories.map((subcategory) => (
                    // Categorias
                        <li className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-xl">
                            <span className="text-2xl font-medium">{subcategory.name}</span>
                            {/* Botones para interactuar */}
                            <nav className="flex gap-2">
                                <button> <img src={actionsIcons.moreInfoIcon} alt="" /> </button>
                                <button> <img src={actionsIcons.editInfoIcon} alt="" /> </button>
                                <button> <img src={actionsIcons.deleteIcon} alt="" /></button>
                            </nav>
                        </li>
                ))}
                </ul>
        </Layout>
    )
}