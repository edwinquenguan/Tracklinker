from fastapi import FastAPI
from app.core.database import get_connection
from app.models.users_model import get_all_users

app = FastAPI(
    title="API con FastAPI y MySQL",
    description="Api para tracklinker",
    version="1.0.0"
)

# Endpoint para probar conexión a la base de datos
@app.get("/ping-db")
def ping_db():
    connection = get_connection()
    if connection:
        connection.close()
        return{
            "status": "Conexion Exitosa a la base de datos"
        }
    else:
        return {
            "status": "Error al intentar conectarse a la base de datos"
        }
    
# Endpoint raíz
@app.get("/")
def root():
    return {
        "message": "API funcionando"
    }

@app.get("/users")
def get_users():
    data = get_all_users()
    return{
        "data": data
    }