import Loader from "../../../../globals/components/ui/Loader";
import { useCategories } from "../../hooks/useCategories";
import CategoryItem from "./CategoryItem";

export default function CategoriesList({ openModal }) {
  const { categories, loading, error } = useCategories();

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    /* Contenedor de categorías */
    <section className="max-h-[95%] max-w-full overflow-x-auto overflow-y-auto overflow-hidden">
      <ul className="pt-3 flex flex-col gap-1">
        {categories.map((category) => (
          <CategoryItem
            category={category}
            moreInfoOnClick={() => openModal(category, "info")}
            editButtonOnClick={() => openModal(category, "edit")}
            deleteButtonOnClick={() => openModal(category, "delete")}
          />
        ))}
      </ul>
    </section>
  );
}
