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