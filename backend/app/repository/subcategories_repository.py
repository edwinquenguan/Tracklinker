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
        c.categories,
        
        * FROM SUBCATEGORIES
        INNER JOIN CATEGORIES 
        ON SUBCATEGORIES.category_id = CATEGORIES.category_id

    
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
            
        

        
