from app.core.database import get_connection
from app.utils.date_formatter import date_formatter
from app.utils.period_map import period_map


class ReportsRepository:

    #   ------------ REPORTES DE USUARIOS ------------

    @staticmethod
    def find_recent_users():
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
    def find_users_by_rol(period: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        try:
            if period not in period_map:
                period = "30d"

            interval = period_map.get(period, "30 DAY")

            query = f"""
            SELECT
                r.rol_name,
                COUNT(u.user_id) as users
            FROM USERS AS u 
            INNER JOIN ROLES AS r
            ON u.rol_id = r.rol_id
            WHERE u.user_date >= DATE_SUB(NOW(), INTERVAL {interval})
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
    def find_monthly_users_growth(period: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        if period not in period_map:
            period = "30d"

        interval = period_map.get(period, "30 DAY")

        query = f"""
        SELECT
            MONTH(user_date) as month_num,
            COUNT(user_id) as users
        FROM USERS
        WHERE user_date >= DATE_SUB(NOW(), INTERVAL {interval})
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
    def find_recent_products():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            pd.product_detail_date,
            ps.product_serial,
            pd.product_detail_model,
            pb.product_brand_name
        FROM PRODUCT_SERIALS as ps
        INNER JOIN PRODUCTS as p
        ON ps.product_id = p.product_id
        INNER JOIN PRODUCT_DETAILS as pd
        ON p.product_details_id = pd.product_details_id
        INNER JOIN PRODUCT_BRANDS as pb
        ON pd.product_brand_id = pb.product_brand_id
        ORDER BY MONTH(pd.product_detail_date) DESC
        LIMIT 6
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            data = [
                {
                    "input_date": date_formatter(item["product_detail_date"]),
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
            (SELECT COUNT(*)
            FROM PRODUCT_SERIALS
            WHERE product_garanty_input >= DATE_SUB(NOW(), INTERVAL 30 DAY)
            ) AS recent_products,

            (SELECT COUNT(*)
            FROM PRODUCT_SERIALS
            ) AS total_products,    

            (SELECT COUNT(DISTINCT product_serial)
            FROM WARRANTY_INCIDENTS
            ) AS warranties_products,

            (SELECT COUNT(DISTINCT product_serial)
            FROM OUTPUT_DETAILS
            ) AS transformations_products;
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
    def find_monthly_products_growth(period: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        if period not in period_map:
            period = "30d"

        interval = period_map.get(period, "30 DAY")

        query = f"""
        SELECT
            MONTH(pd.product_detail_date) as month_num,
            COUNT(DISTINCT ps.product_serial) as products
        FROM PRODUCT_SERIALS as ps
        INNER JOIN INPUT_ORDERS as io
            ON ps.input_order_id = io.input_order_id
        INNER JOIN PRODUCTS as p
            ON ps.product_id = p.product_id
        INNER JOIN PRODUCT_DETAILS as pd
            ON p.product_details_id = pd.product_details_id
        WHERE pd.product_detail_date >= DATE_SUB(NOW(), INTERVAL {interval})
        GROUP BY MONTH(pd.product_detail_date)
        ORDER BY MONTH(pd.product_detail_date) ASC
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
    def find_products_by_brand(period: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        interval = period_map.get(period, "30 DAY")

        query = f"""
        SELECT
            pb.product_brand_name,
            COUNT(DISTINCT p.product_id) as products
        FROM PRODUCTS as p
        INNER JOIN PRODUCT_DETAILS as pd
            ON p.product_details_id = pd.product_details_id
        INNER JOIN PRODUCT_BRANDS as pb
            ON pd.product_brand_id = pb.product_brand_id
        WHERE pd.product_detail_date >= DATE_SUB(NOW(), INTERVAL {interval})
        GROUP BY pb.product_brand_name
        ORDER BY pb.product_brand_name ASC
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()

            data = [
                {
                    "name": item["product_brand_name"],
                    "value": item["products"]
                }
                for item in results
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()


#   ------------ REPORTES DE CATEGORIAS ------------

    @staticmethod
    def find_recent_categories():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            category_name,
            category_date,
            category_description,
            category_status
        FROM CATEGORIES
        ORDER BY category_id DESC
        LIMIT 6
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            data = [
                {
                    "name": item["category_name"],
                    "date": date_formatter(item["category_date"]),
                    "description": item["category_description"],
                    "status": item["category_status"],
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
    def find_categories_by_status():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            (SELECT COUNT(*)
            FROM CATEGORIES
            WHERE category_date >= DATE_SUB(NOW(), INTERVAL 30 DAY)
            ) AS recent_categories,
            (SELECT COUNT(*) FROM CATEGORIES) AS total_categories,
            SUM(CASE WHEN category_status = 0 THEN 1 ELSE 0 END) AS inactive_categories,
            SUM(CASE WHEN category_status = 1 THEN 1 ELSE 0 END) AS active_categories
        FROM CATEGORIES
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
    def find_monthly_categories_growth(period: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        if period not in period_map:
            period = "30d"

        interval = period_map.get(period, "30 DAY")

        query = f"""
        SELECT
            MONTH(category_date) as month_num,
            COUNT(category_id) as categories
        FROM CATEGORIES
        WHERE category_date >= DATE_SUB(NOW(), INTERVAL {interval})
        GROUP BY MONTH(category_date)
        ORDER BY MONTH(category_date) ASC
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
