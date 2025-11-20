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
    error, outputDetails= OutputDetailsrepository.find_all_outpuDetails()
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
   def create_outputDetails(outputDetails:OutputDetails):
     error, success, message= OutputDetailsrepository.create(outputDetails)
     if error:
       raise HTTPException(status_code=400, detail=error)
     return{
       "success":success,
       "message":message
     }
   
   @staticmethod
   def update_outputDetails(outputDetails:int, output_details_id: dict):
     error, message, outputDetails = OutputDetailsrepository.update( output_details_id, outputDetails)
     if error:
       raise HTTPException (status_code=400, detail=error)
     return{
       "message": message,
       "data": outputDetails
     }
   
   @staticmethod
   def delete_outputDetails(output_details_id:int):
     error, success, message= OutputDetailsrepository.delete(output_details_id)
     if error:
       raise HTTPException(status_code=400, detail=error)
     return{
       "success": success,
       "message": message
     }