import { useSubcategories } from "../../hooks/useSubcategories";
import SubcategoriesItem from "./SubcategoriesItem";

export default function SubcategoriesList({openModal}) {
  const { subcategories, loading, error } = useSubcategories();
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (loading) {
    return <div>Cargando...</div>;
  }
  return (
    /* Contenedor de las subcategorías */
    <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
      <ul className="pt-3 flex flex-col gap-1">
        {subcategories.map((subcategory) => (
          // Subcategorías
          <SubcategoriesItem
            subcategory={subcategory}
            moreInfoOnClick={() => openModal(subcategory, "info")}
            editButtonOnClick={() => openModal(subcategory, "edit")}
            deleteButtonOnClick={() => openModal(subcategory, "delete")}
          />
        ))}
      </ul>
    </section>
  );
}
