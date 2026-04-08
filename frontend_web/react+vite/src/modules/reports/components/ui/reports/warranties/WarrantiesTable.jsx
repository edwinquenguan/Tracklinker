import { warrantyStatusConfig } from "../../../../../warranties/constants/warrantyStatus";
import { useWarrantiesTableData } from "../../../../hooks/warranties/useWarrantiesTableData";

export default function WarrantiesTable() {
  const { warranties } = useWarrantiesTableData();
  return (
    <table className="w-full h-full pt-2">
      <thead className="h-[30px]">
        <tr className="border-b pb-1 text-sm dark:border-[#94909028]">
          <th className="font-normal text-start pl-4">Serial</th>
          <th className="font-normal text-start pl-4">Cliente</th>
          <th className="font-normal text-start pl-4">Descripción</th>
          <th className="font-normal text-start pl-4">Fecha de creación</th>
          <th className="font-normal text-start pl-4">Estado</th>
        </tr>
      </thead>
      {warranties.map((warranty) => (
        <tbody>
          <tr className="pb-1 text-sm border-b dark:border-[#94909028]">
            <th className="font-normal text-start pl-4">{warranty.serial}</th>
            <th className="font-normal text-start pl-4">{warranty.customer}</th>
            <th className="font-normal text-start pl-4">
              {warranty.description}
            </th>
            <th className="font-normal text-start pl-4">{warranty.date}</th>
            <th className="font-normal text-start pl-4">
              <span
                className={`px-2 py-1 rounded-md ${warrantyStatusConfig[warranty.status]?.styles}`}
              >
                {warrantyStatusConfig[warranty.status]?.text}
              </span>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
