from pydantic import BaseModel
from typing import Optional

from pydantic import BaseModel
from typing import Optional
from app.core.database import get_connection

class CategoryCreate(BaseModel):
    name: str
    description: Optional[str] = None

class CategoryUpdate(BaseModel):
    name: Optional[str] = None
    description: Optional[str] = None

class CategoryModel:
    @staticmethod
    def get_all():
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        
        try:
            cursor.execute("SELECT * FROM categories")
            result = cursor.fetchall()
            return None, "Categorías obtenidas correctamente", result
            
        except Exception as e:
            return f"❌ Error al obtener categorías: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def get_by_id(category_id: int):
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)
        
        try:
            cursor.execute("SELECT * FROM categories WHERE category_id = %s", (category_id,))
            result = cursor.fetchone()
            if not result:
                return "Categoría no encontrada", None, None
            return None, "Categoría obtenida correctamente", result
            
        except Exception as e:
            return f"❌ Error al obtener categoría: {e}", None, None
        finally:
            cursor.close()
            connection.close()

    @staticmethod
    def create(category_data: dict):  
        connection = get_connection()
        cursor = connection.cursor(dictionary=True)

        try:
            # Validar nombre duplicado 
            cursor.execute("SELECT category_id FROM categories WHERE category_name = %s", (category_data["name"],))
            existing_category = cursor.fetchone()
            
            
            if existing_category:
                while cursor.fetchone() is not None:
                    pass
                return "❌ La categoría ya existe", None, None

            data_for_db = {
                "category_name": category_data["category_name"],  
                "description": category_data.get("description")
            }

            fields = list(data_for_db.keys())
            placeholders = ["%s"] * len(fields)
            values = list(data_for_db.values())

            # Construir la consulta
            query = f"INSERT INTO categories ({','.join(fields)}) VALUES ({','.join(placeholders)})"

            cursor.execute(query, values)
            connection.commit()
            
            # Obtener el ID de la categoría recién creada
            new_category_id = cursor.lastrowid
            
            # Consultar y devolver la categoría creada
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

        # Validar que hay campos para actualizar
        if not category_data:
            cursor.close()
            connection.close()
            return "❌ No se proporcionaron datos para actualizar", None, None

        fields = list(category_data.keys())
        values = list(category_data.values())
        
        if not fields:
            cursor.close()
            connection.close()
            return "❌ No hay campos válidos para actualizar", None, None

        set_clause = ",".join([f"{field} = %s" for field in fields])
        query = f"UPDATE categories SET {set_clause} WHERE category_id = %s"
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
