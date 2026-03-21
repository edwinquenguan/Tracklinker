from app.core.database import get_connection
from app.models.user_model import User
from datetime import datetime
from app.utils.date_formatter import date_formatter
import bcrypt


class UserRepository:

    # Obtener todos los usuarios
    @staticmethod
    def find_all_users():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT
            r.rol_name,
            r.rol_id,
            u.user_id,
            u.user_name,
            u.user_first_surname,
            u.user_second_surname,
            u.user_phone,
            u.user_email,
            u.user_address,
            u.user_city,
            u.user_date
        FROM USERS AS u 
        INNER JOIN ROLES AS r 
        ON u.rol_id = r.rol_id
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            data = [
                {
                    "rol_id": item["rol_id"],
                    "rol_name": item["rol_name"],
                    "id": item["user_id"],
                    "name": item["user_name"],
                    "first_surname": item["user_first_surname"],
                    "second_surname": item["user_second_surname"],
                    "phone": item["user_phone"],
                    "email": item["user_email"],
                    "address": item["user_address"],
                    "city": item["user_city"],
                    "date": date_formatter(item["user_date"]),
                }
                for item in results
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Obtener un usuario por el ID
    @staticmethod
    def find_by_id(user_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT
            r.rol_name,
            u.user_id,
            u.user_name,
            u.user_first_surname,
            u.user_second_surname,
            u.user_phone,
            u.user_email,
            u.user_address,
            u.user_city,
            u.user_date
        FROM USERS AS u 
        INNER JOIN ROLES AS r 
        ON u.rol_id = r.rol_id
        WHERE user_id = %s
        """

        try:
            cursor.execute(query, (user_id,))
            result = cursor.fetchall()
            return None, result
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Obtener un usuario mediante el correo
    @staticmethod
    def find_by_email(user_email: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT
            r.rol_name,
            u.user_id,
            u.user_name,
            u.user_first_surname,
            u.user_second_surname,
            u.user_email, 
            u.user_password
        FROM USERS AS u 
        INNER JOIN ROLES AS r 
        ON r.rol_id = u.rol_id 
        WHERE user_email = %s
        """

        try:
            cursor.execute(query, (user_email,))
            result = cursor.fetchone()
            return result
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}"
        finally:
            cursor.close()
            connection.close()

    # Crear un usuario
    @staticmethod
    def create(user_data: User):

        data = user_data.model_dump()

        connection = get_connection()
        cursor = connection.cursor()

        # Validar email duplicado
        cursor.execute(
            "SELECT user_id FROM USERS WHERE user_email = %s", (data["email"],))
        if cursor.fetchone():
            cursor.close()
            connection.close()
            return None, False, "El correo ya está registrado"

        # Hashear la contraseña
        password = data["password"].encode("utf-8")
        data["password"] = bcrypt.hashpw(
            password, bcrypt.gensalt(rounds=12)).decode("utf-8")

        # Petición a la base de datos
        query = """INSERT INTO USERS (
            rol_id,
            user_name,
            user_first_surname,
            user_second_surname,
            user_address,
            user_city,
            user_password,
            user_email,
            user_phone
        ) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s)"""

        try:
            cursor.execute(query, (
                data["rol_id"], 
                data["name"], 
                data["first_surname"], 
                data["second_surname"], 
                data["address"], 
                data["city"], 
                data["password"], 
                data["email"], 
                data["phone"]))
            connection.commit()
            return None, True, "Usuario creado correctamente"
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    # Actualizar la información de un usuario
    @staticmethod
    def update(user_id: int, user_data: dict):

        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Verificar si existe el usuario
        cursor.execute("SELECT * FROM USERS WHERE user_id = %s", (user_id,))
        user = cursor.fetchone()

        if not user:
            cursor.close()
            connection.close()
            return "Usuario no encontrado", None, None
        
            
        # Verificar si existe el correo y no duplicarlo
        if "user_email" in user_data:
            print(user_data["user_email"])
            cursor.execute("SELECT user_id FROM USERS WHERE user_email = %s", (user_data["user_email"],))
            if cursor.fetchone():
                cursor.close()
                connection.close()
                return None, False, "El correo ya está registrado"
        
        if "user_password" in user_data:
            # Hashear la nueva contraseña
            password = user_data["user_password"].encode("utf-8")
            user_data["user_password"] = bcrypt.hashpw(
                password, bcrypt.gensalt()).decode("utf-8")

        # Campos vacios para almacenar todo lo que va a actualizar
        fields = list(user_data.keys())
        values = list(user_data.values())

        set_clause = ",".join([f"{field} = %s" for field in fields])
        values.append(user_id)

        query = f"UPDATE USERS SET {set_clause} WHERE user_id = %s"

        try:
            cursor.execute(query, values)
            connection.commit()

            return None, True, "Usuario actualizado correctamente"
        except Exception as e:
            connection.rollback()
            return f"Error al ejecutar la consulta: {e}", False, None
        finally:
            cursor.close()
            connection.close()

    # Eliminar un usuario
    @staticmethod
    def delete(user_id: int):
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM USERS WHERE user_id = %s", (user_id,))
        user = cursor.fetchone()
        if not user:
            cursor.close()
            connection.close()
            return "Usuario no encontrado", False, None

        query = "DELETE FROM USERS WHERE user_id = %s"

        try:
            cursor.execute(query, (user_id,))
            connection.commit()
            return None, True, "Usuario eliminado correctamente"
        except Exception as e:
            return f"Error la intentar ejecutar la consulta {e}", False, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_all_roles():
        connection = get_connection()
        cursor = connection.cursor()

        query = "SELECT rol_id, rol_name FROM ROLES"

        try:
            cursor.execute(query)
            result = cursor.fetchall()

            data = [
                {
                    "id": item[0],
                    "name": item[1]
                }
                for item in result
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}"
        finally:
            connection.close()
            cursor.close()
