from app.core.database import get_connection
from app.models.guarantiees_model import Guarantee
from datetime import datetime


class GuaranteeRepository:
   
   @staticmethod
   def find_all_guarantiee():
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


    # Obtener una incidencia por ID
   @staticmethod
   def find_by_id(warranty_incidents_id: int):
       connection = get_connection()
       cursor = connection.cursor(dictionary=True)

       # Petición a la base de datos
       query= """ 
        SELECT * FROM WARRANTY_INCIDENTS WHERE warranty_incidents_id = %s
        """
       try:
            cursor.execute(query, (warranty_incidents_id,))
            result = cursor.fetchall()
            return None, result
       except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
       finally:
            cursor.close()
            connection.close()

   @staticmethod
   def create(warranty_data: Guarantee):
       
        data = warranty_data.model_dump()

        connection = get_connection()
        cursor = connection.cursor()
        

         # Fecha actual para indicar la hora a la que se creo la incidencia
        data["warranty_date"] = datetime.now()
        
        # Arrays vacios para almacenar los datos de la incidencia
        fields = list(data.keys())
        placeholders = ["%s"] * len(fields)
        values = list(data.values())

        # Petición a la base de datos
        query = f"INSERT INTO warranty_incidents ({','.join(fields)}) VALUES({','.join(placeholders)})"

        try:
           cursor.execute(query, values)
           connection.commit()
           return None, True, "Incidencia creado correctamente"
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()