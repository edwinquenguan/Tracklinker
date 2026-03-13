import SubcategoriesActions from "./SubcategoriesActions";
import { asideIcons } from "../../../../assets/icons/asideIcons";

export default function SubcategoriesItem({
  subcategory,
  editButtonOnClick,
  deleteButtonOnClick,
  moreInfoOnClick,
}) {
  return (
    <li
      className="flex items-center justify-between p-5 bg-[#f3eef5] rounded-lg shadow-md transition duration-300  
                    dark:bg-[#0f0f11] dark:hover:bg-[#212125]"
      key={subcategory.subcategory_id}
    > 
      {/* Datos de la Subcategoría */}
      <article>
        <address className="flex gap-3 not-italic font-medium dark:text-white">   
          <p className="text-xl">
            {subcategory.subcategory_name}
          </p>  
          <div className="flex items-center gap-2">
            <asideIcons.categoriesIcon className="w-5 h-5 stroke-[60] stroke-black"/>
            <p>{subcategory.category_name}</p>
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