from app. core.database import get_connection
from app.models.output_orders_model import OutputOrder
from datetime import datetime


class OutputOrdersRepository:

    @staticmethod
    def find_all_output_orders():
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

    # Obtener una orden de salida por ID

    @staticmethod
    def find_by_id(out_order_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """ 
        SELECT * FROM OUTPUT_ORDERS WHERE out_order_id = %s
        """
        try:
            cursor.execute(query, (out_order_id,))
            result = cursor.fetchall()
            return None, result
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def create(output_order_data: OutputOrder):
        data = output_order_data.model_dump()

        connection = get_connection()
        cursor = connection.cursor()

        # Construir la consulta SQL dinamicamente
        query = """
        INSERT INTO OUTPUT_ORDERS (product_details_id)
        VALUES (%s)
        """
        try:
            cursor.execute(query, (data["product_details_id"],))
            connection.commit()
            output_order_id = cursor.lastrowid
            return None, True, output_order_id
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", False, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def update(output_order_id: int, output_order_data: dict):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Construir la consulta SQL dinamicamente
        fields = ", ".join([f"{key} = %s" for key in output_order_data.keys()])
        values = list(output_order_data.values())
        values.append(output_order_id)  # Agregar el ID al final de los valores

        query = f"""
        UPDATE OUTPUT_ORDERS
        SET {fields}
        WHERE out_order_id = %s
        """
        try:
            cursor.execute(query, values)
            connection.commit()

            # Obtener la orden de salida actualizada
            cursor.execute(
                "SELECT * FROM OUTPUT_ORDERS WHERE out_order_id = %s", (output_order_id,))
            updated_order = cursor.fetchone()

            return None, "✅ Orden de salida actualizada exitosamente.", updated_order
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def delete(output_order_id: int):
        connection = get_connection()
        cursor = connection.cursor()

        query = """
        DELETE FROM OUTPUT_ORDERS WHERE out_order_id = %s
        """
        try:
            cursor.execute(query, (output_order_id,))
            connection.commit()
            return None, True, "✅ Orden de salida eliminada exitosamente."
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", False, None
        finally:
            cursor.close()
            connection.close()
