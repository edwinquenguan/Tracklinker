import { categoryIcons } from "../../../../assets/icons/mainIcons";
import CategoryActions from "./CategoryActions";

export default function CategoryItem({
  category_id,
  category_name,
  category_description,
  category_status,
  editButtonOnClick,
  deleteButtonOnClick,
  moreInfoOnClick,
}) {
  return (
    <li
      className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300
                    dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
      key={category_id}
    >
      {/* Datos de la Categoría */}
      <article>
        <div className="flex gap-3 font-medium dark:text-white">
          <p className="text-xl">{category_name}</p>

          <div className="flex items-center">
            <img
              src={categoryIcons.descriptionIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <p>{category_description}</p>
          </div>

          <div className="flex items-center">
            <img
              src={categoryIcons.statusIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <p>{category_status}</p>
          </div>
        </div>
      </article>

      <CategoryActions
        editButtonOnClick={editButtonOnClick}
        deleteButtonOnClick={deleteButtonOnClick}
        moreInfoOnClick={moreInfoOnClick}
      />
    </li>
  );
}
