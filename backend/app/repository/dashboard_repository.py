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
            DATE_FORMAT(out_order_date, '%M') AS month,
            COUNT(*) AS output_orders
        FROM OUTPUT_ORDERS
        GROUP BY 
            DATE_FORMAT(out_order_date, '%M');
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

    @staticmethod
    def find_all_warranty_status():
        connection = get_connection()
        cursor = connection.cursor()

        query = """
        SELECT 
            warranty_status,
            COUNT(*) AS total
        FROM WARRANTY_INCIDENTS
        GROUP BY warranty_status;
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()

            data = [
                {
                    "status": item[0],
                    "total": item[1]
                }
                for item in result
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_all_and_new_users():

        connection = get_connection()
        cursor = connection.cursor()

        query = """
        SELECT 
        (SELECT COUNT(*) FROM USERS) AS total_users,
        (SELECT COUNT(*) 
        FROM USERS 
        WHERE MONTH(user_date) = MONTH(CURDATE())
        AND YEAR(user_date) = YEAR(CURDATE())
        ) AS new_users;
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()

            data = [
                {
                    "users": item[0],
                    "new_users": item[1]
                }
                for item in result
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_stock_by_brand():
        connection = get_connection()
        cursor = connection.cursor()

        query = """
        SELECT 
            b.product_brand_name AS brand,
            SUM(p.product_stock) AS products
        FROM PRODUCTS p
        INNER JOIN PRODUCT_DETAILS d 
        ON p.product_details_id = d.product_details_id
        INNER JOIN PRODUCT_BRANDS b ON d.product_brand_id = b.product_brand_id
        GROUP BY b.product_brand_name
        ORDER BY products DESC
        LIMIT 7;
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            data = [
                {
                    "brand": item[0],
                    "products": item[1]
                }
                for item in result
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta {e}", None
        finally:
            connection.close()
            cursor.close()
