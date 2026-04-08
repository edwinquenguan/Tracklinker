import { userStatus } from "../../../../../users/constants/userStatus";
import { useSubcategoriesTableData } from "../../../../hooks/subcategories/useSubcategoriesTableData";

export default function SubcategoriesTable() {
  const { subcategoriesData } = useSubcategoriesTableData();
  return (
    <table className="w-full h-full pt-2">
      <thead className="h-[30px]">
        <tr className="border-b pb-1 text-sm dark:border-[#94909028]">
          <th className="font-normal text-start pl-4">Nombre</th>
          <th className="font-normal text-start pl-4">Categoria</th>
          <th className="font-normal text-start pl-4">Fecha de creación</th>
          <th className="font-normal text-start pl-4">Estado</th>
        </tr>
      </thead>
      {subcategoriesData.map((category) => (
        <tbody>
          <tr className="pb-1 text-sm border-b dark:border-[#94909028]">
            <th className="font-normal text-start pl-4">{category.name}</th>
            <th className="font-normal text-start pl-4">{category.category}</th>
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
