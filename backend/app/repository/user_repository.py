from app.core.database import get_connection
from app.models.users_model import User

# Obtener todos los usuarios
def get_all_users():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    # Petición a la base de datos
    query = "SELECT * FROM USERS"

    try:
        cursor.execute(query)
        results = cursor.fetchall()
        return results
    except Exception as e:
        print(f"❌ Error al ejecutar la consulta: {e}")
    finally:
        cursor.close()
        connection.close()

# Obtener un usuario por el ID
def get_user_by_id(user_id: int):
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)

    # Petición a la base de datos
    query = "SELECT * FROM USERS WHERE user_id = %s"
    
    try:
        cursor.execute(query, (user_id,))
        result = cursor.fetchall()
        return result
    except Exception as e:
        print(f"❌ Error al ejecutar la consulta: {e}")