import { userStatus } from "../../../../../users/constants/userStatus";
import { useOutputsTableData } from "../../../../hooks/outputs/useOutputsTableData";

export default function OutputsTable() {
  const { outputs } = useOutputsTableData();
  return (
    <table className="w-full h-full pt-2">
      <thead className="h-[30px]">
        <tr className="border-b pb-1 text-sm dark:border-[#94909028]">
          <th className="font-normal text-start pl-4">Serial</th>
          <th className="font-normal text-start pl-4">
            Fecha final de garantía
          </th>
          <th className="font-normal text-start pl-4">Fecha de creación</th>
          <th className="font-normal text-start pl-4">Correo</th>
        </tr>
      </thead>
      {outputs.map((supplier) => (
        <tbody>
          <tr className="pb-1 text-sm border-b dark:border-[#94909028]">
            <th className="font-normal text-start pl-4">{supplier.serial}</th>
            <th className="font-normal text-start pl-4">
              {supplier.warranty_time}
            </th>
            <th className="font-normal text-start pl-4">{supplier.date}</th>
            <th className="font-normal text-start pl-4">
              <span
                className={`px-2 py-1 rounded-md ${userStatus[supplier.status]?.styles}`}
              >
                {userStatus[supplier.status]?.text}
              </span>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
