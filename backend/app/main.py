from fastapi import FastAPI
from app.core.database import get_connection
from app.routes import user_routes

# Instancia principal de la app FastAPI
app = FastAPI(
    title="API con FastAPI y MySQL",
    description="Api para tracklinker",
    version="1.0.0",
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
    
# Endpoint raíz para probar ejecución de la API
@app.get("/")
def root():
    return {
        "message": "API funcionando"
    }

# Rutas para el modúlo de Usuarios
app.include_router(user_routes.router)