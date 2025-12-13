export default function MoreInfoCategoryModal({
  category_name,
  category_description,
  category_status,
  category_date,
}) {
  return (
    <section className="flex flex-col justify-center dark:text-white">
      <p>
        <strong>Nombre de la Categoría: </strong>
        {category_name}
      </p>

      <p>
        <strong>Descripción: </strong>
        {category_description}
      </p>

      <p>
        <strong>Estado: </strong>
        {category_status}
      </p>

      <p>
        <strong>Fecha de Creación: </strong>
        {category_date}
      </p>
    </section>
  );
}
