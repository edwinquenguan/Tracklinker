import ConfirmCancelButtons from "../../../../globals/components/modals/ConfirmCancelButtons";

export default function MoreInfoModal({
  transformationId,
  customerName,
  phone,
  city,
  email,
  date,
  requirement,
  status,
  onCloseModal,
}) {
  return (
    <address className="flex flex-col justify-center items-center not-italic gap-2">
      <section className="flex flex-col items-center dark:text-white">
        <section>
          <span>
            <strong>ID</strong>
          </span>
          <p>{transformationId}</p>
        </section>
        <section className="flex flex-col items-center">
          <span>
            <strong>Nombre Del Cliente</strong>
          </span>
          <p> {customerName}</p>
        </section>
        <section className="flex flex-col items-center">
          <span>
            <strong>Teléfono</strong>
          </span>
          <p> {phone}</p>
        </section>
        <section className="flex flex-col items-center">
          <span>
            <strong>Ciudad</strong>
          </span>
          <p> {city}</p>
        </section>
        <section className="flex flex-col items-center">
          <span>
            <strong>Correo</strong>
          </span>
          <p> {email}</p>
        </section>
        <section className="flex flex-col items-center">
          <span>
            <strong>Fecha De Creación</strong>
          </span>
          <p>{requirement}</p>
        </section>
        <section className="flex flex-col items-center">
          <span>
            <strong>Estado</strong>
          </span>
          <p>{status}</p>
        </section>
      </section>
      <ConfirmCancelButtons
        confirmText="Finalizar"
        cancelText="Salir"
        cancelButtonOnClick={onCloseModal}
        confirmButtonOnClick={onCloseModal}
      />
    </address>
  );
}
