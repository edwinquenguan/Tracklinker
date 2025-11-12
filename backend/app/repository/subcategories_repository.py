from app.core.database import get_connection

class SubcategoriesRepository:
    
    @staticmethod
    def find_all_subcategories():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM SUBCATEGORIES
    
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
            
        

        
