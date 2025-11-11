from datetime import timedelta
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from app.repository.guarantees_repository import GuaranteeRepository
from app.models.guarantiees_model import Guarantee
from app.repository.user_repository import UserRepository
from app.core.security import create_access_token
from app.core.config import settings

class GuarantieeController:
    @staticmethod
    def login(form_data: OAuth2PasswordRequestForm = Depends()):
        error, email = UserRepository.find_by_email(form_data.email)

        expires = timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE)
        token = create_access_token({"sub": form_data.email}, expires_delta=expires)

        if error:
            raise HTTPException(status_code=404, detail=error)
        
        if email:
            raise 

        return{
            "token": token
        }
    
    @staticmethod
    def get_all_guarantee():
        error, guarantiee = GuaranteeRepository.find_all_guarantiee()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": guarantiee
        }
    
    @staticmethod
    def get_guarantiee_by_id(warranty_incidents_id: int):
        error, guarantiee = GuaranteeRepository.find_by_id(warranty_incidents_id)
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": guarantiee
        }
   
    @staticmethod
    def create_guarantiee(warranty_data: Guarantee):
        error, success, message = GuaranteeRepository.create(warranty_data)
        if error:
            raise HTTPException (status_code=400, detail=error)
        return{
            "seccess":success,
            "message": message
        }