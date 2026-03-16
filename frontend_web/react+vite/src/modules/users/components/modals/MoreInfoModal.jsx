export default function MoreInfoModal({ user }) {
  return (
    <section className="flex flex-col justify-center dark:text-white">
      <p>
        <strong>Rol:</strong> {user.rol_name}
      </p>
      <p>
        <strong>Nombre: </strong>
        {user.name} {user.first_surname} {user.second_surname}
      </p>
      <p>
        <strong>Teléfono:</strong> {user.phone}
      </p>
      <p>
        <strong>Correo:</strong> {user.email}
      </p>
      <p>
        <strong>Dirección:</strong> {user.address}
      </p>
      <p>
        <strong>Fecha De Creación:</strong> {user.date}
      </p>
    </section>
  );
}
