Para correr el backend es necesario ejecutar estos comandos

```bash
# 1: Entrar a la carpeta del backend
cd backend

# 2: Crear el entorno virtual
python -m venv venv

# 3: Activar el entorno virtual 
# En Windows:
venv\Scripts\activate
# En mac o linuxÑ
source venv/bin/activate

# 4: Instalar todas las dependencias
pip install -r requirements.txt

# 5: Iniciar el servidor de FastAPI
uvicorn app.main:app --reload

# 6: Y al terminar se desactivar el entorno virtual
deactivate

# Si agregas nuevas dependencias utiliza el siguiente comando para actualizar el requirements.txt
pip freeze > requirements.txt
