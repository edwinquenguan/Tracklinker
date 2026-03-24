from datetime import timedelta
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from app.repository.output_details_repository import OutputDetailsrepository
from app.models.output_details_model import OutputDetails
from app.core.security import create_access_token
from app.core.config import settings

class OutputDetailsController:
    
   @staticmethod
   def get_all_outputDetails():
    error, outputDetails = OutputDetailsrepository.find_all_outpuDetails()
    if error:
      raise HTTPException(status_code=400, detail=error)
    return{
      "data":outputDetails
    }
    
   @staticmethod
   def get_outputDetails_by_id(output_details_id:int):
     error, outputDetails = OutputDetailsrepository.find_by_id(output_details_id)
     if error:
       raise HTTPException(status_code=400 , detail=error)
     return{
       "data": outputDetails
     }
   
   @staticmethod
   def create_outputDetails(output_details_data:OutputDetails):
     error, success, message = OutputDetailsrepository.create(output_details_data)
     if error:
       raise HTTPException(status_code=400, detail=error)
     return{
       "success":success,
       "message":message
     }
   
   @staticmethod
   def update_outputDetails(output_details_id:int, output_details_data: dict):
     error, success, message = OutputDetailsrepository.update(output_details_id, output_details_data)
     if error:
       raise HTTPException (status_code=400, detail=error)
     return{
        "success": success,
        "message": message
     }
   
   @staticmethod
   def disable_output(out_order_id:int):
     error, success, message = OutputDetailsrepository.disable(out_order_id)
     if error:
       raise HTTPException(status_code=400, detail=error)
     return{
       "success": success,
       "message": message
     }
   
   @staticmethod
   def enable_output(out_order_id):
      error, success, message = OutputDetailsrepository.enable(out_order_id)
      if error:
         raise HTTPException(status_code=400, detail=error)
      return {
         "success": success,
         "message": message
      }

   @staticmethod
   def get_transformations_by_date_range(start_date: str, end_date: str):
     error, transformations = OutputDetailsrepository.find_transformations_by_date_range(start_date, end_date)
     if error:
       raise HTTPException(status_code=400, detail=error)
     return {
       "data": transformations
     }
   
   @staticmethod
   def get_deleted_transformations_by_date_range(start_date: str, end_date: str):
       error, transformations = OutputDetailsrepository.find_deleted_transformations_by_date_range(start_date, end_date)

       if error:
           raise HTTPException(status_code=404, detail=error)
       
       return{
           "data": transformations
       }
   
   @staticmethod
   def get_all_transformations():
       error, transformations= OutputDetailsrepository.find_all_transformations()
       if error:
           raise HTTPException(status_code=400, detail=error)
       return{
           "data":transformations
       }
   
   @staticmethod
   def get_completed_transformations():
       error, transformations= OutputDetailsrepository.find_completed_transformations()
       if error:
           raise HTTPException(status_code=400, detail=error)
       return{
           "data":transformations
       }