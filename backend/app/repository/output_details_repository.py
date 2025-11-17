from app.core.database import get_connection
from app.models.output_details_model import OutputDetails
from datetime import datetime


class OutputDetailsrepository:

    # Obtener todos los detalles de salida
    @staticmethod
    def find_all_outpuDetails():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query =  """
        SELECT * FROM OUTPUT_DETAILS
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


    # Ontener detalle de salida por Id
    @staticmethod
    def find_by_id(output_details_id: int):
       connection = get_connection()
       cursor = connection.cursor(dictionary=True)
    
       query = """
         SELECT * FROM OUTPUT_DETAILS WHERE OUTPUT_DETAILS_ID = %s 
        """
       try:
             cursor.execute(query,(output_details_id,))
             result= cursor.fetchall()
             return None, result
       except Exception as e:
             f"❌ Error al ejecutar la consulta: {e}", None
       finally:
            cursor.close()
            connection.close()

