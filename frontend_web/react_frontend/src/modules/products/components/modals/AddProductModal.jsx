import { useCatalog } from "../../hooks/useCatalog";
import { productsIcons } from "../../../../assets/icons/mainIcons";
import FormField from "../../../../globals/components/ui/FormField";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";
import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function AddProductModal({onCloseModal}) {
    
    const { categories, subcategories } = useCatalog();

    return(
        <section className="flex flex-col items-center">
            <form action="" className="flex flex-col gap-1">
                <SelectMenu
                width={"64"}
                spanText={"Categoria"}>
                    {categories.map((category) => (
                        <option 
                        key={category.category_id}
                        value={category.category_name}> 
                            {category.category_name} 
                        </option>
                    ))}
                </SelectMenu>
                <SelectMenu
                width={"64"}
                spanText={"Subcategoria"}>
                    {subcategories.map((subcategory) => (
                        <option 
                        key={subcategory.subcategory_id}
                        value={subcategory.subcategory_name}> 
                            {subcategory.subcategory_name} 
                        </option>
                    ))}
                </SelectMenu>
                <FormField
                labelText={"Modelo"}
                placeholder={"Impresora HP z1455"} 
                id={"model"}
                />
                <FormField
                labelText={"Serial"}
                placeholder={"10KQ340"} 
                id={"serial"}
                />
                <SelectMenu
                width={"64"}
                spanText={"Tiempo De Garantía"}>
                    <option value="a"> 6 Meses </option>
                    <option value=""> 12 Meses </option>
                    <option value=""> 18 Meses </option>
                    <option value=""> 24 Meses </option>
                </SelectMenu>
                <div className="flex items-center justify-center p-3">
                    <span className="dark:text-white">o</span>
                </div>
                {/* Botón de leer codigó de barras */}
                <section className="flex items-center justify-center">
                    <button className="flex items-center py-2 px-4 gap-2 border rounded-lg transition duration-300 
                    hover:bg-gray-300
                    dark:bg-[#2020226c] dark:hover:bg-[#2c2c2e] dark:border-[#101012]"
                    onClick={onCloseModal}>
                        <img src={productsIcons.barcodeIcon} alt="" className="dark:invert dark:brightness-0"/>
                        <span className="text-sm dark:text-white">Leer código de barras</span>
                    </button>
                </section>
            </form>

            {/* Botones */}
            <ConfirmCancelButtons 
            cancelButtonOnClick={onCloseModal}
            confirmButtonOnClick={onCloseModal}/>
        </section>
    );
}