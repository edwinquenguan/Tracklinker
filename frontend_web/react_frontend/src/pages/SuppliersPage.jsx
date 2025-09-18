import { actionsIcons } from "../assets/icons/mainIcons";
import { usersIcons } from "../assets/icons/mainIcons";
import { suppliers } from "../data/suppliers";
import Layout from "../components/Layout/Layout";
import TopSection from "../components/ui/TopSection";

export default function SuppliersPage(){
    return(
        <Layout>
            <TopSection
            sectionName={"Proveedores"}
            addButtonIcon={actionsIcons.addIcon}
            addButtonText={"Agregar Proveedor"}
            />
            {/* Listado de proveedores */}
            <ul className="max-h-[95%] max-w-full pt-3 flex flex-col gap-1 overflow-x-auto overflow-y-auto">
                {suppliers.map((supplier) => (    
                    <li className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-xl shadow-md">
                        <article className="flex">
                            <address className="flex gap-5 not-italic font-medium">
                                <p className="text-2xl">{supplier.name}</p>
                                <div className="flex items-center">
                                    <img src={usersIcons.phoneIcon} alt="" className="w-5 h-5" />
                                    <p>{supplier.phone}</p>
                                </div>
                                <div className="flex items-center">
                                    <img src={usersIcons.rolIcon} alt="" className="w-5 h-5" />
                                    <p>{supplier.address}</p>
                                </div>
                            </address>
                        </article>
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