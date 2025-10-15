import mysql.connector
from mysql.connector import Error
from app.core.config import settings

# Función para conectar a la base de datos
def get_connection():
    try:
        connection = mysql.connector.connect(
            host=settings.DB_HOST,
            port=settings.DB_PORT,
            user=settings.DB_USER,
            password=settings.DB_PASSWORD,
            database=settings.DB_NAME
        )
        if connection.is_connected():
            print("✅ Conexión exitosa a la base de datos")
        return connection

    except Error as e:
        print(f"⚠️ Error al conectar a la base de datos: {e}")
        return None

get_connection()