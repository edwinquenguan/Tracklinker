from app.core.database import get_connection
from datetime import datetime
import bcrypt


class SubcategoriesRepository:
    # Obtener todas las subcategorías
    @staticmethod
    def find_all_subcategories():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        # Petición a la base de datos

        query = """
        SELECT
        c.category_id,
        c.category_name,
        s.subcategory_id,
        s.subcategory_name
        FROM SUBCATEGORIES AS s
        INNER JOIN CATEGORIES AS c 
        ON s.category_id = c.category_id
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            return None, result
        except Exception as e:
            return f"❌ Error al ejecutar mla consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Obtener una subcategoría por el ID
    @staticmethod
    def find_by_id(subcategory_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT * FROM SUBCATEGORIES WHERE subcategory_id 
        INNER JOIN CATEGORIES 
        ON SUBCATEGORIES.category_id = CATEGORIES.category_id
        WHERE subcategory_id = %s

        """

        try:
            cursor.execute(query, (subcategory_id,))
            result = cursor.fetchone()
            return None, result
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Crear una nueva subcategoría
    @staticmethod
    def create_subcategory(subcategory_data: dict):
        connection = get_connection()
        cursor = connection.cursor()

        # Petición a la base de datos
        query = """
        INSERT INTO SUBCATEGORIES (subcategory_name, category_id)
        VALUES (%s, %s)
        """

        try:
            cursor.execute(query, (
                subcategory_data["subcategory_name"],
                subcategory_data["category_id"]
            ))
            connection.commit()
            return None, cursor.lastrowid
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Actualizar una subcategoría existente
    @staticmethod
    def update_subcategory(subcategory_id: int, subcategory_data: dict):
        connection = get_connection()
        cursor = connection.cursor()

        # Petición a la base de datos
        query = """
        UPDATE SUBCATEGORIES
        SET subcategory_name = %s, category_id = %s
        WHERE subcategory_id = %s
        """

        try:
            cursor.execute(query, (
                subcategory_data["subcategory_name"],
                subcategory_data["category_id"],
                subcategory_id
            ))
            connection.commit()
            cursor.execute(
                "SELECT * FROM SUBCATEGORIES WHERE subcategory_id = %s", (subcategory_id,))
            result = cursor.fetchall()

            data = [
                {
                    "category_id": item[0],
                    "subcategory_id": item[1],
                    "subcategory_name": item[2]
                }
                for item in result
            ]
            return None, cursor.rowcount, data
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    # Eliminar una subcategoría por el ID
    @staticmethod
    def delete_subcategory(subcategory_id: int):
        connection = get_connection()
        cursor = connection.cursor()

        # Petición a la base de datos
        query = "DELETE FROM SUBCATEGORIES WHERE subcategory_id = %s"

        try:
            cursor.execute(query, (subcategory_id,))
            connection.commit()
            return None, cursor.rowcount
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Obtener subcategorías por categoría ID
    @staticmethod
    def find_by_category_id(category_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT * FROM SUBCATEGORIES 
        WHERE category_id = %s
        """

        try:
            cursor.execute(query, (category_id,))
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_subcategories_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT * FROM SUBCATEGORIES 
        WHERE created_at BETWEEN %s AND %s
        """

        try:
            cursor.execute(query, (start_date, end_date))
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_deleted_subcategories_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT * FROM SUBCATEGORIES 
        WHERE deleted_at BETWEEN %s AND %s
        """

        try:
            cursor.execute(query, (start_date, end_date))
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()


    @staticmethod
    def find_disabled_subcategories():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT * FROM SUBCATEGORIES 
        WHERE is_disabled = TRUE
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Obtener subcategorías actualizadas antes de una fecha específica
    @staticmethod
    def find_updated_before(date: datetime):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT * FROM SUBCATEGORIES 
        WHERE updated_at < %s
        """

        try:
            cursor.execute(query, (date,))
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Obtener subcategorías por estado (activo/inactivo)
    @staticmethod
    def find_by_status(is_active: bool):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT * FROM SUBCATEGORIES 
        WHERE is_active = %s
        """

        try:
            cursor.execute(query, (is_active,))
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Activar o desactivar una subcategoría
    @staticmethod
    def set_active_status(subcategory_id: int, is_active: bool):
        connection = get_connection()
        cursor = connection.cursor()

        # Petición a la base de datos
        query = """
        UPDATE SUBCATEGORIES
        SET is_active = %s
        WHERE subcategory_id = %s
        """

        try:
            cursor.execute(query, (is_active, subcategory_id))
            connection.commit()
            return None, cursor.rowcount
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()
