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
            r.rol_id,
            r.rol_name,
            u.user_id,
            u.user_name,
            u.user_first_surname,
            u.user_second_surname,
            u.user_phone,
            u.user_email,
            u.user_address,
            u.user_city,
            u.user_date
        FROM USERS AS u 
        INNER JOIN ROLES AS r 
        ON u.rol_id = r.rol_id
        WHERE DATE(u.user_date) BETWEEN %s AND %s
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
    def find_users_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            r.rol_id,
            r.rol_name,
            u.user_id,
            u.user_name,
            u.user_first_surname,
            u.user_second_surname,
            u.user_phone,
            u.user_email,
            u.user_address,
            u.user_city,
            u.user_date
        FROM USERS AS u 
        INNER JOIN ROLES AS r 
        ON u.rol_id = r.rol_id
        WHERE DATE(u.user_date) BETWEEN %s AND %s
        """

        try:
            cursor.execute(query, (start_date, end_date))
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_users_grouped_by_create_date():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT 
            DATE(u.user_date) AS create_date,
            COUNT(*) AS user_count
        FROM USERS AS u
        GROUP BY DATE(u.user_date)
        ORDER BY create_date;
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
    def find_disabled_users():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT
            r.rol_id,
            r.rol_name,
            u.user_id,
            u.user_name,
            u.user_first_surname,
            u.user_second_surname,
            u.user_phone,
            u.user_email,
            u.user_address,
            u.user_city,
            u.user_date
        FROM USERS AS u 
        INNER JOIN ROLES AS r 
        ON u.rol_id = r.rol_id
        WHERE u.is_active = FALSE
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
    def find_deleted_users_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Petición a la base de datos
        query = """
        SELECT
            r.rol_id,
            r.rol_name,
            u.user_id,
            u.user_name,
            u.user_first_surname,
            u.user_second_surname,
            u.user_phone,
            u.user_email,
            u.user_address,
            u.user_city,
            u.user_date,
            u.deleted_at
        FROM USERS AS u 
        INNER JOIN ROLES AS r 
        ON u.rol_id = r.rol_id
        WHERE u.deleted_at BETWEEN %s AND %s
        """

        try:
            cursor.execute(query, (start_date, end_date))
            results = cursor.fetchall()
            return None, results
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

#   ------------ REPORTES DE ------------