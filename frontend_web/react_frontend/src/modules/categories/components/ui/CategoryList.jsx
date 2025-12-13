import { useCategories } from "../../hooks/useCategories";
import CategoryItem from "./CategoryItem";

export default function CategoriesList({ openModal }) {
  const { categories, loading, error } = useCategories();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    /* Contenedor de categorías */
    <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
      <ul className="pt-3 flex flex-col gap-1">
        {categories.map((category) => (
          <CategoryItem
            category_id={category.category_id}
            category_name={category.category_name}
            category_description={category.category_description}
            category_status={category.category_status}
            moreInfoOnClick={() => openModal(category, "info")}
            editButtonOnClick={() => openModal(category, "edit")}
            deleteButtonOnClick={() => openModal(category, "delete")}
          />
        ))}
      </ul>
    </section>
  );
}
