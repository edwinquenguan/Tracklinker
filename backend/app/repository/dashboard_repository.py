from app.core.database import get_connection

class DashboardRepository:

    @staticmethod
    def find_all_suppliers_inputs():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT 
            s.supplier_name, 
            COUNT(*) AS orders
            FROM INPUT_ORDERS io
            JOIN SUPPLIERS s ON io.supplier_id = s.supplier_id
            GROUP BY s.supplier_id;
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            return None, result
        except Exception as e:
            return f"Error al ejecutar la consulta {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_all_outputs():
        connection = get_connection()
        cursor = connection.cursor()

        query = """
        SELECT 
            DATE_FORMAT(out_order_date, '%Y-%m') AS month,
            COUNT(*) AS output_orders
            FROM OUTPUT_ORDERS
            GROUP BY month
            ORDER BY month;
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()

            # Mapeamos lo que devuelve la consulta para que tenga llaves y pueda ser usada
            data = [
                {
                    "month": item[0],
                    "output_orders": item[1]
                }
                for item in result
            ]
            
            return None, data
        except Exception as e:
            return f"Error al ejecutar al consulta {e}", None
        finally:
            cursor.close()
            connection.close()