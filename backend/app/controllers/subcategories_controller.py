from app.repository.subcategories_repository import subcategoriesRepository

class SubcategoriesController:
    @staticmethod
    def  get_all_subcategories():
         error, subcategories = SubcategoriesRepository()
         
         if error:
              raise HTTPException(status_code=404, detail=error)
         return {
              "data":subcategories
         }