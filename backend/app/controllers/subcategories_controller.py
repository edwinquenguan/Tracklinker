from app.repository.subcategories_repository import SubcategoriesRepository
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from app.core.security import create_access_token

class SubcategoriesController:

     @staticmethod
     def get_all_subcategories():
         error, subcategories = SubcategoriesRepository.find_all_subcategories()
         
         if error:
              raise HTTPException(status_code=404, detail=error)
         return {
              "data": subcategories
         }     

     @staticmethod
     def get_subcategory_by_id(subcategory_id: int):
         error, subcategory = SubcategoriesRepository.find_by_id(subcategory_id)
         
         if error:
              raise HTTPException(status_code=404, detail=error)
         return {
              "data": subcategory
         }