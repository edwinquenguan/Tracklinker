import {
  actionsIcons,
  warrantiesIcons,
} from "../../../../assets/icons/mainIcons";
import ActionButtons from "../../../../globals/components/ui/ActionButtons";

export default function WarrantiesTable({ warranties, openModal, refetch }) {
  const getStatusIcon = (status) => {
    switch (status) {
      case 0:
        return warrantiesIcons.incompleteIcon;
      case 1:
        return warrantiesIcons.inprocessIcon;
      case 2:
        return warrantiesIcons.completeIcon;
      default:
        return warrantiesIcons.incompleteIcon;
    }
  };

  return (
    <section className="max-h-[95%] max-w-full border border-gray-200 rounded-xl shadow-md overflow-y-auto overflow-x-auto overflow-hidden">
      <table className="min-w-full min-h-full border-collapse">
        <thead className="sticky top-0 z-10">
          <tr className="h-[50px] border-b border-gray-200 text-base dark:border-[#303033]">
            <th className="font-medium text-start pl-4">Fecha de creación</th>
            <th className="font-medium text-start pl-4">Caso con Número</th>
            <th className="font-medium text-start pl-4">Cliente</th>
            <th className="font-medium text-start pl-4">Teléfono</th>
            <th className="font-medium text-start pl-4">Dirección</th>
            <th className="font-medium text-start pl-4">Ciudad</th>
            <th className="font-medium text-start pl-4">Serial Producto</th>
            <th className="font-medium text-start pl-4">Descripción</th>
            <th className="font-medium text-start">Estado</th>
            <th className="font-medium text-center pl-4">Acción</th>
          </tr>
        </thead>

        {/* Filas de datos - CENTRADO APLICADO */}
        {warranties.map((warranty) => (
          <tbody className="font-normal dark:text-gray-300">
            <tr
              key={warranty.warranty_incidents_id}
              className="h-12 text-base overflow-x-auto overflow-y-auto transition duration-500 text-[#45474d] 
                          hover:bg-[#e3e2e4] hover:shadow-md
                          dark:hover:bg-[#101012]"
            >
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.warranty_date}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.warranty_incidents_id}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.warranty_customer}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.warranty_phone}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.warranty_address}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.warranty_city}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.product_serial}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <p>{warranty.warranty_description}</p>
              </th>
              <th className="font-normal text-start pl-4 text-sm">
                <img
                  src={getStatusIcon(warranty.warranty_status)}
                  alt="Icono de estado"
                  className="w-5 h-5 dark:invert"
                />
              </th>
              <th className="font-normal text-end text-sm">
                <ActionButtons
                  editButtonOnClick={() => openModal(warranty, "edit", refetch)}
                  deleteButtonOnClick={() =>
                    openModal(warranty, "delete", refetch)
                  }
                >
                  <button
                    className="dark:brightness-200 hover:scale-125 transition-all duration-500"
                    onClick={() => openModal(warranty, "info", refetch)}
                  >
                    <img src={actionsIcons.moreInfoIcon} alt="Más Info" />
                  </button>
                </ActionButtons>
              </th>
            </tr>
          </tbody>
        ))}
      </table>
    </section>
  );
}
