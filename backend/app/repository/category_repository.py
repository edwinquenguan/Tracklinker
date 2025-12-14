from app.core.database import get_connection

class CategoryRepository:

    # Obtener todas las categorias
    @staticmethod
    def find_all_categories():

        connection  = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM categories"

        try:
            cursor.execute(query)
            result = cursor.fetchall()
            return None, result
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()
    
    # Obtener una categoria por el ID
    @staticmethod
    def find_by_id(category_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM categories WHERE category_id = %s"

        try:
            cursor.execute(query, (category_id,))
            result = cursor.fetchone()
            return None, result
        except Exception as e:
            return f"❌ Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def create(category_data: dict):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            # Validar nombre duplicado con una consulta separada
            cursor.execute("SELECT COUNT(*) as count FROM categories WHERE category_name = %s", (category_data["name"],))
            count_result = cursor.fetchone()
            
            if count_result["count"] > 0:
                cursor.close()
                connection.close()
                return "❌ La categoría ya existe", None, None

            # Resto del código igual...
            data_for_db = {
                "category_name": category_data["name"]
            }

            fields = list(data_for_db.keys())
            placeholders = ["%s"] * len(fields)
            values = list(data_for_db.values())

            query = f"INSERT INTO categories ({','.join(fields)}) VALUES ({','.join(placeholders)})"

            cursor.execute(query, values)
            connection.commit()
            
            new_category_id = cursor.lastrowid
            
            cursor.execute("SELECT * FROM categories WHERE category_id = %s", (new_category_id,))
            result = cursor.fetchone()
            
            return None, "✅ Categoría creada correctamente", result
            
        except Exception as e:
            connection.rollback()
            return f"❌ Error al ejecutar la consulta: {e}", None, None
            
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def update(category_id: int, category_data: dict):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        # Verificar si existe la categoría
        cursor.execute("SELECT * FROM categories WHERE category_id = %s", (category_id,))
        category = cursor.fetchone()

        if not category:
            cursor.close()
            connection.close()
            return "Categoría no encontrada", None, None

        # ✅ VALIDACIÓN CRÍTICA: Verificar que hay campos para actualizar
        if not category_data:
            cursor.close()
            connection.close()
            return "❌ No se proporcionaron datos para actualizar", None, None

        # ✅ VALIDACIÓN: Verificar que category_data no esté vacío
        fields = list(category_data.keys())
        values = list(category_data.values())
        
        if not fields:
            cursor.close()
            connection.close()
            return "❌ No hay campos válidos para actualizar", None, None

        set_clause = ",".join([f"{field} = %s" for field in fields])
        
        # Construir la query
        query = f"UPDATE categories SET {set_clause} WHERE category_id = %s"
        
        # Agregar category_id a values
        values.append(category_id)

        try:
            cursor.execute(query, values)
            connection.commit()

            # Consultar y devolver la categoría actualizada
            cursor.execute("SELECT * FROM categories WHERE category_id = %s", (category_id,))
            result = cursor.fetchone()

            return None, "Categoría actualizada correctamente", result

        except Exception as e:
            connection.rollback()
            return f"❌ Error al ejecutar la consulta: {e} | Query: {query}", None, None

        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def delete(category_id: int):
        connection = get_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT * FROM CATEGORIES WHERE category_id = %s", (category_id,))
        category = cursor.fetchone()
        if not category:
            cursor.close()
            connection.close()
            return "Categoría no encontrada", False, None

        query = "DELETE FROM CATEGORIES WHERE category_id = %s"

        try:
            cursor.execute(query, (category_id,))
            connection.commit()
            return None, True, "Categoría eliminada correctamente"
        except Exception as e:
            return f"❌ Error al intentar ejecutar la consulta: {e}", False, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_categories_by_date_range(start_date: str, end_date: str):
        connection  = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM CATEGORIES WHERE CATEGORY_DATE BETWEEN %s AND %s"

        try:
            cursor.execute(query, (start_date, end_date))
            result = cursor.fetchall()
            return None, result
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def find_deleted_categories_by_date_range(start_date: str, end_date: str):
        connection  = get_connection()
        cursor = connection.cursor(dictionary=True)

        query = "SELECT * FROM CATEGORIES WHERE DELETION_DATE BETWEEN %s AND %s"

        try:
            cursor.execute(query, (start_date, end_date))
            result = cursor.fetchall()
            return None, result
        except Exception as e:
            return f"Error al ejecutar la consulta: {e}", None
        finally:
            cursor.close()
            connection.close()