import { userStatus } from "../../../../../users/constants/userStatus";
import { useCategoriesTableData } from "../../../../hooks/categories/useCategoriesTableData";

export default function CategoriesTable() {
  const { categoriesData } = useCategoriesTableData();
  return (
    <table className="w-full h-full pt-2">
      <thead className="h-[30px]">
        <tr className="border-b pb-1 text-sm dark:border-[#94909028]">
          <th className="font-normal text-start pl-4">Nombre</th>
          <th className="font-normal text-start pl-4">Descripción</th>
          <th className="font-normal text-start pl-4">Fecha de creación</th>
          <th className="font-normal text-start pl-4">Estado</th>
        </tr>
      </thead>
      {categoriesData.map((category) => (
        <tbody>
          <tr className="pb-1 text-sm border-b dark:border-[#94909028]">
            <th className="font-normal text-start pl-4">{category.name}</th>
            <th className="font-normal text-start pl-4">{category.description}</th>
            <th className="font-normal text-start pl-4">{category.date}</th>
            <th className="font-normal text-start pl-4">
              <span
                className={`px-2 py-1 rounded-md ${userStatus[category.status]?.styles}`}
              >
                {userStatus[category.status]?.text}
              </span>
            </th>
          </tr>
        </tbody>
      ))}
    </table>
  );
}
