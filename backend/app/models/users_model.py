from app.core.database import get_connection

def get_all_users():
    connection = get_connection()
    cursor = connection.cursor(dictionary=True)
    query = "SELECT * FROM USERS"

    try:
        cursor.execute(query)
        results = cursor.fetchall()
        return results
    except Exception as e:
        print(f"❌ Error al ejecutar la consulta: {e}")
