export default function MoreInfoModal({
  rol_name,
  user_name,
  user_first_surname,
  user_second_surname,
  user_phone,
  user_email,
  user_address,
  user_date,
}) {
  return (
    <section className="flex flex-col justify-center dark:text-white">
      <p>
        <strong>Rol:</strong> {rol_name}
      </p>
      <p>
        <strong>Nombre: </strong>
        {user_name} {user_first_surname} {user_second_surname}
      </p>
      <p>
        <strong>Teléfono:</strong> {user_phone}
      </p>
      <p>
        <strong>Correo:</strong> {user_email}
      </p>
      <p>
        <strong>Dirección:</strong> {user_address}
      </p>
      <p>
        <strong>Fecha De Creación:</strong> {user_date}
      </p>
    </section>
  );
}
