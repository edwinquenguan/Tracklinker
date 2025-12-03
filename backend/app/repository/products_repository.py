from app.core.database import get_connection

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
                    "input_date": item[0],
                    "input_order": item[1],
                    "category": item[2],
                    "subcategory": item[3],
                    "product_id": item[4],
                    "supplier": item[5],
                    "product_serial": item[6],
                    "model": item[7],
                    "description": item[8],
                    "brand": item[9],
                    "stock": item[10],
                    "warranty_time": item[11]
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


