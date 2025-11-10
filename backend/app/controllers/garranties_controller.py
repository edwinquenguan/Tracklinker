from datetime import timedelta
from fastapi import HTTPException, Depends
from fastapi.security import OAuth2PasswordRequestForm
from app.repository.garranties_repository import GaranteeRepository
from app.models.garranties_model import Guarantee
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
    def get_all_garranties():
        error, garranties = GaranteeRepository.find_all_garranties()
        if error:
            raise HTTPException(status_code=404, detail=error)
        return {
            "data": garranties
        }