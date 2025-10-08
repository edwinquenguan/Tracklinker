import { useCatalog } from "../../hooks/useCatalog";
import FilterModal from "../../../../globals/components/modals/FilterModal";
import SelectMenu from "../../../../globals/components/modals/SelectMenu";

export default function ProductsFilterModal({ onCloseModal }) {
  const { categories, subcategories } = useCatalog();

  return (
    <FilterModal fieldName="Ingreso" onClose={onCloseModal}>
      {/* Ordenar Por Categoría */}
      <SelectMenu
        id={"order-by-category-menu"}
        name={"order-by-category-menu"}
        spanText={"Ordenar Por Categoria"}
      >
        {categories.map((category) => (
          <option key={category.category_id} value={category.category_name}>
            {category.category_name}
          </option>
        ))}
      </SelectMenu>
      {/* Ordenar Por Subcategoria */}
      <SelectMenu
        spanText={"Ordenar Por Subcategoria"}
        id={"order-by-subcategory-menu"}
        name={"order-by-subcategory-menu"}
      >
        {subcategories.map((subcategory) => (
          <option
            key={subcategory.subcategory_id}
            value={subcategory.subcategory_name}
          >
            {subcategory.subcategory_name}
          </option>
        ))}
      </SelectMenu>
      {/* Ordenar por Stock */}
      <SelectMenu
        spanText={"Ordenar Por Stock"}
        id={"order-by-stock-menu"}
        name={"order-by-stock-menu"}
      >
        <option value="minus of 20"> &lt; de 20 </option>
        <option value="minus of 50"> &lt; de 50 </option>
        <option value="minus of 100"> &lt; de 100 </option>
        <option value="more than 100"> &gt; de 100 </option>
      </SelectMenu>
      {/* Ordenar por Tiempo de Garantía */}
      <SelectMenu
        spanText={"Ordenar Por Tiempo De Garantía"}
        id={"order-by-warranty-menu"}
        name={"order-by-warranty-menu"}
      >
        <option value="minus of 6 months"> &lt; de 6 meses </option>
        <option value="minus of 12 months"> &lt; de 12 Meses </option>
        <option value="minus of 18 months"> &lt; de 18 Meses </option>
        <option value="minus of 24 months"> &lt; de 24 Meses </option>
      </SelectMenu>
    </FilterModal>
  );
}
