export default function MoreInfoCategoryModal({ category }) {
  return (
    <section className="flex flex-col justify-center dark:text-white">
      <p>
        <strong>Nombre de la Categoría: </strong>
        {category.category_name}
      </p>
      <p>
        <strong>Fecha de Creación: </strong>
        {category.category_date}
      </p>
    </section>
  );
}
