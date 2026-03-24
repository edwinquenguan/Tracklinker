from app.core.database import get_connection
from app.models.output_details_model import OutputDetails
from app.repository.output_orders_repository import OutputOrdersRepository
from app.models.output_orders_model import OutputOrder
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

    # Obtener detalle de salida por Id

    @staticmethod
    def find_by_id(output_details_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
         SELECT * FROM OUTPUT_DETAILS WHERE OUTPUT_DETAILS_ID = %s 
        """
        try:
            cursor.execute(query, (output_details_id,))
            result = cursor.fetchall()
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
        cursor = connection.cursor()

        # Petición a la base de datos
        query = """
        INSERT INTO OUTPUT_DETAILS (
            out_order_id,
            product_serial,
            out_product_garanty,
            product_transformation
        ) VALUES (%s, %s, %s, %s)"""

        try:
            error, success, out_order_id = OutputOrdersRepository.create(OutputOrder(
                product_details_id=data["product_details_id"]
            ))

            if error is not None or not success:
                return error, False, None
            
            cursor.execute(query, (
                out_order_id,
                data["product_serial"],
                data["out_product_garanty"],
                data["product_transformation"]
                ))
            connection.commit()
            return None, True, "Orden de salida creada correctamente"
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", False, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def update(outputDetails_data: dict, output_details_id: int):
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
    def delete(output_order_id: int):
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute(
            "SELECT out_order_id FROM OUTPUT_ORDERS WHERE output_order_id = %s", (output_order_id,))
        
        output = cursor.fetchone()
        if not output:
            cursor.close()
            connection.close()
            return "Detalle de salida no encontrado", False, None

        query = "UPDATE OUTPUT_ORDERS SET (out_order_status = 0) WHERE output_order_id = %s"

        try:
            cursor.execute(query, (output_order_id,))
            connection.commit()
            return None, True, "Detalle de salida eliminado correctamente"
        except Exception as e:
            return f"❌ Error la intentar ejecutar la consulta {e}", False, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_transformations_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM output_details
        WHERE transformation_date BETWEEN %s AND %s
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
    def find_deleted_transformations_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM output_details
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
    def find_all_transformations():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM output_details ORDER BY output_details_id DESC
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
