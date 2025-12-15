from app.core.database import get_connection
from app.models.product_model import Product


class ProductsRepository:

    @staticmethod
    def find_all_products():
        connection = get_connection()
        cursor = connection.cursor()

        query = """
        SELECT * FROM get_all_products
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            # Mapeamos cada item que devuelve la query y le agregamos una llave para identificarlos
            data = [
                {
                    "input_order_id": item[0],
                    "input_date": item[1],
                    "input_order": item[2],
                    "category": item[3],
                    "subcategory": item[4],
                    "product_id": item[5],
                    "supplier": item[6],
                    "product_serial": item[7],
                    "model": item[8],
                    "product_details_id": item[9],
                    "description": item[10],
                    "brand": item[11],
                    "stock": item[12],
                    "warranty_time": item[13]
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
    def find_all_and_new_products_ammount():
        connection = get_connection()
        cursor = connection.cursor()

        query = """
        SELECT 
            (SELECT COUNT(*) FROM PRODUCTS) AS total,
            (SELECT COUNT(*) 
            FROM PRODUCTS AS p
            INNER JOIN PRODUCT_SERIALS AS ps
            ON p.product_id = ps.product_id
            INNER JOIN INPUT_ORDERS AS io
            ON ps.input_order_id = io.input_order_id
            WHERE MONTH(io.input_order_date) = MONTH(CURDATE())
            AND YEAR(io.input_order_date) = YEAR(CURDATE())
            ) AS new_products;
        """

        try:
            cursor.execute(query)
            result = cursor.fetchall()

            data = [
                {
                    "products": item[0],
                    "new_products": item[1]
                }
                for item in result
            ]

            return None, data
        except Exception as e:
            return f"Error al ejecutar la consulta {e}", None
        finally:
            connection.close()
            cursor.close()
    
    @staticmethod
    def find_products_added_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM PRODUCTS
        WHERE input_date BETWEEN %s AND %s
        ORDER BY input_date DESC
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
    def find_products_deleted_by_date_range(start_date: str, end_date: str):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM PRODUCTS
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
    def find_products_out_of_stock():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = """
        SELECT * FROM PRODUCTS
        WHERE stock = 0
        ORDER BY product_id DESC
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
    def create_product(product_data: Product):
        data = product_data.model_dump()
        connection = get_connection()
        cursor = connection.cursor()

        if "product_brand" in data:
            try:
                cursor.execute(
                    "SELECT * FROM PRODUCT_BRANDS WHERE product_brand_name = %s", (data["product_brand"],))
                brand = cursor.fetchone()
                if not brand:
                    cursor.execute(
                        f"INSERT INTO PRODUCT_BRANDS (product_brand_name) VALUES (%s)",
                        (data["product_brand"],)
                    )
                    connection.commit()
                del data["product_brand"]
            except Exception as e:
                return f"Error al intentar obtener la marca del producto {e}", None, None
        
        if "input_order_id" in data:
            try:
                cursor.execute("SELECT * FROM INPUT_ORDERS WHERE input_order_id = %s", (data["input_order_id"],))
                result = cursor.fetchone()

                if not result:
                    cursor.execute()

                del data["input_order_id"]
            except Exception as e:
                return f"Error al intentar obtener la orden de entrada {e}", None, None

        # Arrays vacios para almacenar los datos del producto
        fields = list(data.keys())
        placeholders = ["%s"] * len(fields)
        values = list(data.values())

        query = f"""
        INSERT INTO PRODUCTS ({','.join(fields)}) VALUES ({','.join(placeholders)})
        """
        try:
            cursor.execute(query, values)
            connection.commit()
            return None, True, "Producto Creado Correctamente"
        except Exception as e:
            return f"Error al ejecutar la consulta {e}", None, None
        finally:
            cursor.close()
            connection.close()
