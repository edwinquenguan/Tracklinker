from app.repository.subcategories_repository import SubcategoriesRepository

class SubcategoriesController:

    @staticmethod
    def  get_all_subcategories():
         error, subcategories = SubcategoriesRepository.find_all_subcategories()
         
         if error:
              raise HTTPException(status_code=404, detail=error)
         return {
              "data": subcategories
         }     