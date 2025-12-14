from app.core.database import get_connection
from app.models.output_details_model import OutputDetails
from datetime import datetime


class OutputDetailsrepository:

    # Obtener todos los detalles de salida
    @staticmethod
    def find_all_outpuDetails():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM get_output_products ORDER BY out_order_id DESC
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

    @staticmethod
    def create(outputDetails_data: OutputDetails):
         data = outputDetails_data.model_dump()

         connection = get_connection()
         cursor= connection.cursor()

     


         #Arrays vacios para almacenar datos de detalles de salida
         fields = list(data.keys())
         placeholders = ["%s"] * len(fields)
         values = list(data.values())

         #Petición a la base de datos

         query = f"INSERT INTO output_details ({','.join(fields)}) VALUES({','.join(placeholders)})"
         
         try:
             cursor.execute(query, values)
             connection.commit()
             return None, True, "Detalles de salida creados correctamente"
         except Exception as e:
             return f"❌ Error al ejecutar la consulta: {e}", None, None
         finally:
              cursor.close()
              connection.close() 

    @staticmethod
    def update(outputDetails_data: dict, output_details_id: int ):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Construir la consulta de actualización dinámicamente
        fields = []
        values = []
        for key, value in outputDetails_data.items():
            fields.append(f"{key} = %s")
            values.append(value)
        values.append(output_details_id)

        query = f"UPDATE OUTPUT_DETAILS SET {', '.join(fields)} WHERE output_details_id = %s"

        try:
            cursor.execute(query, values)
            connection.commit()
            return None, True, "Detalle de salida actualizada correctamente"
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()
   
    @staticmethod
    def delete(output_details_id: int ):
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM OUTPUT_DETAILS WHERE output_details_id = %s", (output_details_id,))
        user = cursor.fetchone()
        if not user:
            cursor.close()
            connection.close()
            return "Detalle de salida no encontrado", False, None

        query = "DELETE FROM OUTPUT_DETAILS WHERE output_details_id = %s"

        try:
            cursor.execute(query, (output_details_id,))
            connection.commit()
            return None, True, "Detalle de salida eliminado correctamente"
        except Exception as e:
            return f"❌ Error la intentar ejecutar la consulta {e}", False, None
        finally:
            cursor.close()
            connection.close()