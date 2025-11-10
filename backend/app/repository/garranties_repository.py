from app.core.database import get_connection
from app.models.garranties_model import Guarantee
from datetime import datetime
import bcrypt

class GaranteeRepository:
   
   @staticmethod
   def find_all_garranties():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM WARRANTY_INCIDENTS
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