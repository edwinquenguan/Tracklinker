from app.core.database import get_connection
from app.models.suppliers_model import Supplier


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
        cursor.execute("SELECT * FROM SUPPLIERS WHERE supplier_id = %s", (supplier_id,))
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
