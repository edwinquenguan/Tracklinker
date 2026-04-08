from app.core.database import get_connection
from app.models.category_model import CategoryUpdate
from app.utils.date_formatter import date_formatter

class CategoryRepository:

    # Obtener todas las categorias
    @staticmethod
    def find_all_categories():

        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT category_id, category_name, category_description, category_date FROM categories"

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            data = [
                {
                    "category_id": item["category_id"],
                    "category_name": item["category_name"],
                    "category_description": item["category_description"],
                    "category_date": date_formatter(item["category_date"])
                }
                for item in result
            ]
            return None, data
        except Exception:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    # Obtener una categoria por el ID
    @staticmethod
    def find_by_id(category_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM categories WHERE category_id = %s"

        try:
            cursor.execute(query, (category_id,))
            result = cursor.fetchone()
            return None, result
        except Exception:
            return f"Error al ejecutar la consulta", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def create(category_data: dict):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            # Validar nombre duplicado
            cursor.execute(
                "SELECT COUNT(*) as count FROM categories WHERE category_name = %s", (category_data["name"],))
            count_result = cursor.fetchone()

            if count_result["count"] > 0:
                cursor.close()
                connection.close()
                return "La categoría ya existe", None, None

            query = "INSERT INTO categories (category_name, category_description) VALUES (%s, %s)"

            cursor.execute(query, (category_data["name"], category_data["description"]))
            connection.commit()

            return None, True, "Categoría creada correctamente"

        except Exception:
            connection.rollback()
            return f"Error al ejecutar la consulta", None, None

        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def update(category_id: int, category_data: CategoryUpdate):
        data = category_data.model_dump()

        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Verificar si existe la categoría
        cursor.execute(
            "SELECT * FROM categories WHERE category_id = %s", (category_id,))
        category = cursor.fetchone()

        if not category:
            cursor.close()
            connection.close()
            return "Categoría no encontrada", None, None

        if not category_data:
            cursor.close()
            connection.close()
            return "No se proporcionaron datos para actualizar", None, None

        query = """
        UPDATE CATEGORIES SET
            category_name = %s,
            category_description = %s
        WHERE category_id = %s"""

        try:
            cursor.execute(query, (
                data["name"],
                data["description"],
                category_id,
                ))
            connection.commit()

            return None, True, "Categoría actualizada correctamente"

        except Exception:
            connection.rollback()
            return f"Error al ejecutar la consulta", None, None

        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def delete(category_id: int):
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute(
            "SELECT * FROM CATEGORIES WHERE category_id = %s", (category_id,))
        category = cursor.fetchone()
        if not category:
            cursor.close()
            connection.close()
            return "Categoría no encontrada", False, None

        query = "DELETE FROM CATEGORIES WHERE category_id = %s"

        try:
            cursor.execute(query, (category_id,))
            connection.commit()
            return None, True, "Categoría eliminada correctamente"
        except Exception:
            return f"Error al intentar ejecutar la consulta", False, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_categories_by_date_range(start_date: str, end_date: str):
        connection  = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM CATEGORIES WHERE CATEGORY_DATE BETWEEN %s AND %s"

        try:
            cursor.execute(query, (start_date, end_date))
            result = cursor.fetchall()
            return None, result
        except Exception:
            return f"Error al ejecutar la consulta", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_deleted_categories_by_date_range(start_date: str, end_date: str):
        connection  = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM CATEGORIES WHERE DELETION_DATE BETWEEN %s AND %s"

        try:
            cursor.execute(query, (start_date, end_date))
            result = cursor.fetchall()
            return None, result
        except Exception:
            return f"Error al ejecutar la consulta", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_disabled_categories():
        connection  = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM CATEGORIES WHERE STATUS = 'DISABLED'"

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            return None, result
        except Exception:
            return f"Error al ejecutar la consulta", None
        finally:
            cursor.close()
            connection.close()
