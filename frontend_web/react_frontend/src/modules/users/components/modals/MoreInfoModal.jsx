export default function MoreInfoModal({user}) {
  return (
    <section className="flex flex-col justify-center dark:text-white">
      <p>
        <strong>Rol:</strong> {user.rol_name}
      </p>
      <p>
        <strong>Nombre: </strong>
        {user.user_name} {user.user_first_surname} {user.user_second_surname}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.user_phone}
      </p>
      <p>
        <strong>Correo:</strong> {user.user_email}
      </p>
      <p>
        <strong>Dirección:</strong> {user.user_address}
      </p>
      <p>
        <strong>Fecha De Creación:</strong> {user.user_date}
      </p>
    </section>
  );
}
