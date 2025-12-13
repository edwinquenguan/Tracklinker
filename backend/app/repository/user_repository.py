from app.core.database import get_connection
from app.models.user_model import User
from datetime import datetime
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
            r.rol_id,
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
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            return None, results
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
            r.rol_id,
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
            "SELECT user_id FROM USERS WHERE user_email = %s", (data["user_email"],))
        if cursor.fetchone():
            cursor.close()
            connection.close()
            return None, False, "El correo ya está registrado"

        # Hashear la contraseña
        password = data["user_password"].encode("utf-8")
        data["user_password"] = bcrypt.hashpw(
            password, bcrypt.gensalt()).decode("utf-8")

        # Fecha actual para indicar la hora a la que se creo el usuario
        data["user_date"] = datetime.now()

        # Arrays vacios para almacenar los datos del usuario
        fields = list(data.keys())
        placeholders = ["%s"] * len(fields)
        values = list(data.values())

        # Petición a la base de datos
        query = f"INSERT INTO USERS ({','.join(fields)}) VALUES({','.join(placeholders)})"

        try:
            cursor.execute(query, values)
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

        if "user_password" in user_data:
            # Hashear la nueva contraseña
            password = user_data["user_password"].encode("utf-8")
            user_data["user_password"] = bcrypt.hashpw(
                password, bcrypt.gensalt()).decode("utf-8")

        # Verificar si existe el usuario
        cursor.execute("SELECT * FROM USERS WHERE user_id = %s", (user_id,))
        user = cursor.fetchone()

        if not user:
            cursor.close()
            connection.close()
            return "Usuario no encontrado", None, None

        # Campos vacios para almacenar todo lo que va a actualizar
        fields = list(user_data.keys())
        values = list(user_data.values())

        set_clause = ",".join([f"{field} = %s" for field in fields])
        values.append(user_id)

        query = f"UPDATE USERS SET {set_clause} WHERE user_id = %s"

        try:
            cursor.execute(query, values)
            connection.commit()

            # Consultar y devolver el usuario que actualizamos
            cursor.execute(
                "SELECT * FROM USERS WHERE user_id = %s", (user_id,))
            result = cursor.fetchone()

            return None, "Usuario actualizado correctamente", result
        except Exception as e:
            connection.rollback()
            return f"Error al ejecutar la consulta: {e} {query}", None, None
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
    def find_by_rol(rol_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:

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
            WHERE r.rol_id = %s
            """

            # 2. Ejecutar y obtener resultados
            cursor.execute(query, (rol_id,))
            result = cursor.fetchall()  # Obtiene la lista completa de usuarios

            return None, result

        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None

        finally:

            cursor.close()
            connection.close()

    @staticmethod
    def find_all_roles():
        connection = get_connection()
        cursor = connection.cursor()

        query = "SELECT * FROM ROLES"

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
