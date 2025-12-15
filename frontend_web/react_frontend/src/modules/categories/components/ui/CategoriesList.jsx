import Loader from "../../../../globals/components/ui/Loader";
import CategoryItem from "./CategoryItem";

export default function CategoriesList({ categories, loading, error, openModal, refetch }) {

  if (error) {
    return <div>Error: {error.message}</div>;
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
            moreInfoOnClick={() => openModal(category, "info", refetch)}
            editButtonOnClick={() => openModal(category, "edit", refetch)}
            deleteButtonOnClick={() => openModal(category, "delete", refetch)}
          />
        ))}
      </ul>
    </section>
  );
}
