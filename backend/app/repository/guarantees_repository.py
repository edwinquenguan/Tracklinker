from app.core.database import get_connection
from app.models.guarantiees_model import Guarantee
from datetime import datetime


class GuaranteeRepository:

    @staticmethod
    def find_all_guarantiee():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM WARRANTY_INCIDENTS ORDER BY WARRANTY_INCIDENTS_ID DESC
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
        query = """
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

    @staticmethod
    def update(warranty_incidents_id: int, warranty_data: dict):

        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Construir la consulta de actualización dinámicamente
        fields = []
        values = []
        for key, value in warranty_data.items():
            fields.append(f"{key} = %s")
            values.append(value)
        values.append(warranty_incidents_id)

        query = f"UPDATE WARRANTY_INCIDENTS SET {', '.join(fields)} WHERE warranty_incidents_id = %s"

        try:
            cursor.execute(query, values)
            connection.commit()
            return None, True, "Incidencia actualizada correctamente"
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def delete(warranty_incidents_id: int):
        connection = get_connection()
        cursor = connection.cursor()
        query = """
        DELETE FROM WARRANTY_INCIDENTS WHERE warranty_incidents_id = %s
        """
        try:
            cursor.execute(query, (warranty_incidents_id,))
            connection.commit()
            return None, True, "Incidencia eliminada correctamente"
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_deleted_guarantees_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM WARRANTY_INCIDENTS
        WHERE deleted_at IS NOT NULL
        AND deleted_at BETWEEN %s AND %s
        ORDER BY deleted_at DESC
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
    def find_all_guarantees():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM WARRANTY_INCIDENTS ORDER BY WARRANTY_INCIDENTS_ID DESC
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

    @staticmethod
    def find_disabled_guarantees():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM WARRANTY_INCIDENTS
        WHERE is_active = FALSE
        ORDER BY WARRANTY_INCIDENTS_ID DESC
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
