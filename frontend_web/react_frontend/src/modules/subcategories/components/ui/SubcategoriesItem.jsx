import { subcategoriesIcons } from "../../../../assets/icons/mainIcons";
import SubcategoriesActions from "../SubcategoriesActions";

export default function SubcategoriesItem({
  subcategory_id,
  subcategory_name, 
  subcategory_description,
  editButtonOnClick,
  deleteButtonOnClick,
  moreInfoOnClick,
}) {
  return (
    <li
      className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300  
                    dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
      key={subcategory_id}
    > 
      {/* Datos de la Subcategoría */}
      <article>
        <address className="flex gap-3 not-italic font-medium dark:text-white">   
          <p className="text-xl">
            {subcategory_name}
          </p>  
          <div className="flex items-center">
            <img
              src={subcategoriesIcons.descriptionIcon}
              alt=""
              className="w-5 h-5 dark:invert"
            />
            <p>{subcategory_description}</p>
          </div>
        </address>
      </article>  
      <SubcategoriesActions
      editButtonOnClick={editButtonOnClick}
      deleteButtonOnClick={deleteButtonOnClick}
      moreInfoOnClick={moreInfoOnClick} 
      />
    </li>
  );
}