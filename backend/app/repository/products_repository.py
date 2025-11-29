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

