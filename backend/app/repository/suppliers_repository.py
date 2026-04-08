from app.core.database import get_connection
from app.models.suppliers_model import Supplier
from app.utils.periods import period_map, daily_periods
from app.utils.date_formatter import date_formatter


class SuppliersRepository:

    @staticmethod
    def find_all_suppliers():
        connection = get_connection()
        cursor = connection.cursor()

        query = "SELECT * FROM SUPPLIERS"

        try:
            cursor.execute(query)
            result = cursor.fetchall()

            data = [
                {
                    "supplier_id": item[0],
                    "supplier_name": item[1],
                    "supplier_city": item[2],
                    "supplier_address": item[3],
                    "supplier_email": item[4],
                    "supplier_phone": item[5]
                }
                for item in result
            ]
            return None, data
        except Exception as e:
            return f"Error al intentar obtener los usuarios: {e}", None
        finally:
            connection.close()
            cursor.close()

    @staticmethod
    def find_supplier_by_id(supplier_id):
        connection = get_connection()
        cursor = connection.cursor()

        query = "SELECT * FROM SUPPLIERS WHERE supplier_id = %s"

        try:
            cursor.execute(query, (supplier_id,))
            result = cursor.fetchall()
            data = [
                {
                    "supplier_id": item[0],
                    "supplier_name": item[1],
                    "supplier_city": item[2],
                    "supplier_address": item[3],
                    "supplier_email": item[4],
                    "supplier_phone": item[5]
                }
                for item in result
            ]
            return None, data
        except Exception as e:
            return f"Error al intentar obtener el usuario: {e}", None
        finally:
            connection.close()
            cursor.close()

    @staticmethod
    def create_supplier(supplier_data: Supplier):
        data = supplier_data.model_dump()
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Arrays vacios para almacenar los datos del proveedor
        fields = list(data.keys())
        placeholders = ["%s"] * len(fields)
        values = list(data.values())

        # Petición a la base de datos
        query = f"INSERT INTO SUPPLIERS ({','.join(fields)}) VALUES({','.join(placeholders)})"

        try:
            cursor.execute(query, values)
            connection.commit()
            return None, True, "Proveedor creado correctamente"
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def update_supplier(supplier_id: int, supplier_data: dict):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Verificar si existe el usuario
        cursor.execute(
            "SELECT * FROM SUPPLIERS WHERE supplier_id = %s", (supplier_id,))
        supplier = cursor.fetchone()

        if not supplier:
            cursor.close()
            connection.close()
            return "Proveedor no encontrado", None, None

        # Campos vacios para almacenar todo lo que va a actualizar
        fields = list(supplier_data.keys())
        values = list(supplier_data.values())

        set_clause = ",".join([f"{field} = %s" for field in fields])
        values.append(supplier_id)

        query = f"UPDATE SUPPLIERS SET {set_clause} WHERE supplier_id = %s"

        try:
            cursor.execute(query, values)
            connection.commit()

            # Consultar y devolver el usuario que actualizamos
            cursor.execute(
                "SELECT * FROM SUPPLIERS WHERE supplier_id = %s", (supplier_id,))
            result = cursor.fetchone()

            return None, "Proveedor actualizado correctamente", result
        except Exception as e:
            connection.rollback()
            return f"Error al ejecutar la consulta: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def delete_supplier(supplier_id: int):
        connection = get_connection()
        cursor = connection.cursor()

        # Comprobar si el proveedor existe
        cursor.execute(
            "SELECT * FROM SUPPLIERS WHERE supplier_id = %s", (supplier_id,))
        supplier = cursor.fetchone()
        if not supplier:
            cursor.close()
            connection.close()
            return "Proveedor no encontrado", False, None

        query = "DELETE FROM SUPPLIERS WHERE supplier_id = %s"

        try:
            cursor.execute(query, (supplier_id,))
            connection.commit()
            return None, True, "Proveedor eliminado correctamente"
        except Exception as e:
            return None, False, f"Error al intentar eliminar el usuario: {e}"
        finally:
            cursor.close()
            connection.close()

#   ------------ REPORTES DE PROVEEDORES ------------

    @staticmethod
    def find_recent_suppliers():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            supplier_name,
            supplier_city,
            supplier_address,
            supplier_email,
            supplier_phone,
            supplier_date,
            supplier_status
        FROM SUPPLIERS as c
        ORDER BY supplier_id DESC
        LIMIT 6
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()
            data = [
                {
                    "name": item["supplier_name"],
                    "city": item["supplier_city"],
                    "address": item["supplier_address"],
                    "email": item["supplier_email"],
                    "phone": item["supplier_phone"],
                    "date": date_formatter(item["supplier_date"]),
                    "status": item["supplier_status"],
                }
                for item in results
            ]
            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta :{e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_suppliers_by_brand(period: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        interval = period_map.get(period, "30 DAY")

        query = f"""
        SELECT
            pb.product_brand_name,
            COUNT(DISTINCT s.supplier_id) as suppliers
        FROM SUPPLIERS AS s
        INNER JOIN INPUT_ORDERS AS io
            ON s.supplier_id = io.supplier_id
        INNER JOIN PRODUCT_SERIALS AS ps
            ON io.input_order_id = ps.input_order_id
        INNER JOIN PRODUCTS AS p
            ON ps.product_id = p.product_id
        INNER JOIN PRODUCT_DETAILS AS pd
            ON p.product_details_id = pd.product_details_id
        INNER JOIN PRODUCT_BRANDS AS pb
            ON pd.product_brand_id = pb.product_brand_id
        WHERE s.supplier_date >= DATE_SUB(NOW(), INTERVAL {interval})
        GROUP BY pb.product_brand_name
        ORDER BY pb.product_brand_name ASC
        """

        try:
            cursor.execute(query)
            results = cursor.fetchall()

            data = [
                {
                    "name": item["product_brand_name"],
                    "value": item["suppliers"]
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
    def find_suppliers_by_status():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT
            (SELECT COUNT(*) FROM SUPPLIERS) AS total_suppliers,
            COUNT(CASE WHEN supplier_date >= DATE_SUB(NOW(), INTERVAL 30 DAY) THEN 1 END) as recent_suppliers,
            SUM(CASE WHEN supplier_status = 0 THEN 0 ELSE 0 END) AS inactive_suppliers,
            SUM(CASE WHEN supplier_status = 1 THEN 1 ELSE 0 END) AS active_suppliers
        FROM SUPPLIERS
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
    def find_suppliers_growth(period: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        if period not in period_map:
            period = "30d"

        interval = period_map.get(period, "30 DAY")
        use_daily = period in daily_periods

        if use_daily:
            group_expr = "DATE(supplier_date)"
            select_expr = "DATE(supplier_date) as label"
        else:
            group_expr = "DATE_FORMAT(supplier_date, '%Y-%m')"
            select_expr = "DATE_FORMAT(supplier_date, '%Y-%m') as label"

        query = f"""
        SELECT
            {select_expr},
            COUNT(DISTINCT supplier_id) as suppliers
        FROM SUPPLIERS
        WHERE supplier_date >= DATE_SUB(NOW(), INTERVAL {interval})
        GROUP BY {group_expr}
        ORDER BY {group_expr} ASC
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
