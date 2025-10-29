from app.core.database import get_connection
from app.models.user_model import User
from jose import jwt, JWTError
import bcrypt

class UserRepository:

# Obtener todos los usuarios
    @staticmethod
    def find_all_users():
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
    @staticmethod
    def find_by_id(user_id: int):
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
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_by_email():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = "SELECT * FROM USERS WHERE user_email = %s"

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            return result
        except Exception as e:
            print(f"❌ Error al ejecutar la consulta: {e}")
        finally:
            cursor.close()
            connection.close()

    # Crear usuario
    @staticmethod
    def create(user_data: dict):

        # Validación de que la contraseña existe
        if password not in user_data:
            raise ValueError("La contraseña es necesaria")

        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Arrays vacios para almacenar los datos del usuario
        fields = []
        values = []
        placeholders = []

        for key, value in user_data.items():
            fields.append(key)
            placeholders.append("%s")
            values.append(value)

        # Hashear la contraseña
        password = user_data["password"].encode("utf-8")
        hash = bcrypt.hashpw(password, bcrypt.gensalt())
        user_data["password"] = hash.decode("utf-8")

        # Petición a la base de datos
        query = f"INSERT INTO USERS ({','.join(fields)}) VALUES({','.join(placeholders)})"

        cursor.execute(query)

        try:
            cursor.execute(query)
            result = cursor.commit()
            return result
        except Exception as e:
            print(f"❌ Error al ejecutar la consulta: {e}")
        finally:
            cursor.close()
            connection.close()

    # Actualizar la información del usuario
    @staticmethod
    def update(user_id: int, user_data: dict):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        fields = []
        values = []

        if user_data.password:
            hash = 

        values.append(user_id)
        query = "UPDATE USERS SET {user_data} WHERE user_id = ({values})"

        try:
            cursor.execute(query, (user_id))
            cursor.commit()
            cursor.execute("SELECT * FROM USERS WHERE id = %s", (user_id,))
            result = cursor.fetchone()
            return result
        except Exception as e:
            print(f"❌ Error al ejecutar la consulta: {e}")
        finally:
            cursor.close()
            connection.close()


    # Eliminar un usuario
    @staticmethod
    def delete(user_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "DELETE FROM USERS WHERE user_id = %s"

        try:
            cursor.execute(query, (user_id))
            result = cursor.commit()
            return result
        except Exception as e:
            print(f"❌ Error la intentar ejecutar la consulta {e}")
        finally:
            cursor.close()
            connection.close()