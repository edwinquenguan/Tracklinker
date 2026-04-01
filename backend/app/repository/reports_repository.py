from app.core.database import get_connection
from app.utils.date_formatter import date_formatter

class ReportsRepository:

#   ------------ REPORTES DE USUARIOS ------------

    @staticmethod
    def find_users():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:

            query = """
            SELECT
                user_name,
                user_first_surname,
                user_email,
                user_phone,
                user_date,
                user_status
            FROM USERS
            ORDER BY user_date DESC
            LIMIT 6
            """

            cursor.execute(query)
            result = cursor.fetchall()

            data = [
                {
                    "name": item["user_name"],
                    "surname": item["user_first_surname"],
                    "email": item["user_email"],
                    "phone": item["user_phone"],
                    "date": date_formatter(item["user_date"]),
                    "status": item["user_status"]
                }
                for item in result
            ]

            return None, data

        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None

        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_by_rol():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:

            query = """
            SELECT
                r.rol_name,
                COUNT(u.user_id) as users
            FROM USERS AS u 
            LEFT JOIN ROLES AS r
            ON u.rol_id = r.rol_id
            GROUP BY r.rol_name
            """

            cursor.execute(query)
            result = cursor.fetchall()

            return None, result

        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None

        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_by_month():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:

            query = """
            SELECT
                DATE_FORMAT(u.user_date, '%Y-%m-01') as month,
                COUNT(u.user_id) as users
            FROM USERS AS u
            WHERE YEAR(u.user_date) = 2025
            GROUP BY DATE_FORMAT(u.user_date, '%Y-%m-01')
            ORDER BY month
            """

            cursor.execute(query)
            result = cursor.fetchall()
            
            data = [
                {
                    "month": date_formatter(item["month"]),
                    "users": item["users"]
                }
                for item in result
            ]

            return None, data

        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None

        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_monthly_user_growth():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            MONTH(user_date) as month_num,
            COUNT(user_id) as users
        FROM USERS
        WHERE YEAR(user_date) = 2025
        GROUP BY MONTH(user_date)
        ORDER BY MONTH(user_date) ASC
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_users_by_status():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            COUNT(CASE WHEN user_date >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 END) as recent_users,
            COUNT(CASE WHEN user_status = 1 THEN 1 END) as active_users,
            COUNT(CASE WHEN user_status = 0 THEN 1 END) as inactive_users,
            COUNT(user_id) as total_users
        FROM USERS
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()


#   ------------ REPORTES DE PRODUCTOS ------------

    @staticmethod
    def find_products():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            io.input_order_date,
            ps.product_serial,
            pd.product_detail_model,
            pb.product_brand_name
        FROM INPUT_ORDERS as io
        INNER JOIN PRODUCT_SERIALS as ps
        ON io.input_order_id = ps.input_order_id
        INNER JOIN PRODUCTS as p
        ON ps.product_id = p.product_id
        INNER JOIN PRODUCT_DETAILS as pd
        ON p.product_details_id = pd.product_details_id
        INNER JOIN PRODUCT_BRANDS as pb
        ON pd.product_brand_id = pb.product_brand_id
        ORDER BY p.product_id DESC
        LIMIT 6
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            data = [
                {
                    "input_date": date_formatter(item["input_order_date"]),
                    "serial": item["product_serial"],
                    "model": item["product_detail_model"],
                    "brand": item["product_brand_name"]
                }
                for item in results
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_products_by_status():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            COUNT(CASE WHEN ps.product_garanty_input >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 END) as recent_products,
            COUNT(ps.poroduct_serial) as total_products,
            COUNT(DISTINCT wi.product_serial) as warranties_products,
            COUNT(DISTINCT od.product_serial) as tranformations_warranties
        FROM PRODUCTS as p
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_monthly_products_growth():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            MONTHNAME(io.input_order_date) as month,
            COUNT(DISTINCT ps.product_serial) as products
        FROM PRODUCT_SERIALS as ps
        INNER JOIN INPUT_ORDERS as io
            ON ps.input_order_id = io.input_order_id
        WHERE YEAR(io.input_order_date) = 2024
        GROUP BY MONTHNAME(io.input_order_date)
        ORDER BY MONTHNAME(io.input_order_date) ASC
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            data = [
                {
                    "month": item["month"],
                    "products": item["products"]
                }
                for item in results
            ]
            return None, results
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()


    @staticmethod
    def get_count_of_all():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            COUNT(DISTINCT p.product_id) as products,
            COUNT(DISTINCT CASE WHEN u.rol_id = 4 THEN u.user_id END) as clients,
            COUNT(DISTINCT u.user_id) as users
        FROM USERS as u
        CROSS JOIN PRODUCTS AS p
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()