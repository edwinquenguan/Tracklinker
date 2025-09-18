import { categories } from "../data/categories";
import { actionsIcons } from "../assets/icons/mainIcons";
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";

export default function CategoriesPage(){
    return(
        <Layout>
            <TopSection
            sectionName={"Categorias"}
            addButtonIcon={actionsIcons.addIcon}
            addButtonText={"Agregar Categoria"}
            />
            {/* Listado de categorias */}
                <ul className="min-h-[90%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {categories.map((category) => (
                    // Categorias
                        <li className="flex items-center justify-between p-4 bg-[#f3eef5] rounded-xl">
                            <span className="text-2xl font-medium">{category.name}</span>
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