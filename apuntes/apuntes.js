// Directorio de un proyecto de python
manager.py // Archivo principal, donde se ejecuta el proyecto de python. En este archivo se importan los módulos de la carpeta app y se ejecuta la aplicación. 

asgi.py // Archivo de configuración de ASGI (Asynchronous Server Gateway Interface). ASGI es una especificación que permite a las aplicaciones web de Python comunicarse con servidores web asíncronos.
wsgi.py // Archivo de configuración de WSGI (Web Server Gateway Interface). WSGI es una especificación que describe cómo un servidor web debe comunicarse con aplicaciones web de Python.
setings.py // Archivo de configuración de Django. En este archivo se definen las configuraciones de la aplicación, como la base de datos, las aplicaciones instaladas, las rutas de los archivos estáticos, entre otros.    

urls.py // Archivo de configuración de las rutas de la aplicación. En este archivo se definen las rutas de la aplicación y se asocian con las vistas correspondientes.


// PAra levantar el entorno virtual en windows
.\venv\Scripts\activate    // Se  debe ejecutar en el directorio donde se encuentra el entorno virtual



/* 
PARA DESPLEGAR UNA APLICACIÓN EN DJANGO
*/

// Para desplegar la aplicación en un servidor de producción
python manage.py runserver    // Se debe ejecutar en el directorio donde se encuentra el archivo manage.py

// PAra  ver todos los paquetes instalados en el entorno virtual
pip freeze    // Se debe ejecutar en el entorno virtual

//  
DEBUG=True  // DEBUG, para mostrar errores

// Internationlization
LANGUAGE_CODE = 'es'  // Idioma de la aplicación, Se encuentra en el archivo settings.py








/* 
CREAR UNA APLICACIÓN EN DJANGO
*/
// Crear una aplicación en Django
python manage.py startapp nombre_app    // Se debe ejecutar en el directorio donde se encuentra el archivo manage.py

// Registrar la aplicación en el archivo settings.py
INSTALLED_APPS = [
    ...
    'nombre_app',
    ...
]

// Diretorio y archivos de una aplicación en Django
migrations/ // Directorio que contiene los archivos de migraciones de la aplicación. Las migraciones son archivos que describen los cambios en la base de datos.
__init__.py // Archivo que indica que la carpeta es un paquete de Python.
admin.py // Archivo de configuración de la interfaz de administración de la aplicación.
apps.py // Archivo de configuración de la aplicación.
models.py // Archivo que contiene las clases de los modelos de la aplicación.
tests.py // Archivo que contiene las pruebas de la aplicación.
views.py // Archivo que contiene las vistas de la aplicación.




/* 
WAITRESS, Es un servidor web WSGI que se puede utilizar para desplegar aplicaciones web de Python. 
*/



/*  
DOCUMENTACIÓN DE DJANGO
*/
https://docs.djangoproject.com/es/5.0/    // Documentación oficial de Django en español.

// Otras fuentes de información
https://tutorial.djangogirls.org/es/    // Tutorial de Django
https://www.djangoproject.com/start/    // Tutorial de Django







/* 
INSTALAR REQUIREMENTS.TXT
*/
pip install -r requirements.txt    // Se debe ejecutar en el directorio donde se encuentra el archivo








/* 
PIP FREEZE, comando que permite generar un archivo requirements.txt con las dependencias de un proyecto de Python.  
*/

pip freeze > requirements.txt    // Sirve para generar un archivo requirements.txt con las dependencias de un proyecto de Python.

pip install -r requirements.txt    // Sirve para instalar las dependencias de un proyecto de Python.

gac "mensaje"    // Sirve para agregar todos los archivos al área de preparación y hacer un commit con un mensaje.









/* 
MIGRACTIONS, comando que permite crear y aplicar migraciones en Django.
*/

python manage.py makemigrations    // Sirve para crear las migraciones de los modelos de la aplicación.







/* 
DATABASES, configuración de la base de datos en Django. En el archivo settings.py se encuentra la configuración de la base de datos de la aplicación.
*/
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',    // Motor de la base de datos
        'NAME': BASE_DIR / 'db.sqlite3',    // Nombre de la base de datos
    }
}

// Instalación del driver de postgresql
pip install psycopg2-binary    // Se debe ejecutar en el entorno virtual de la aplicación.  


// Ejemplo de conexión a una base de datos de PostgreSQL. 
// Este ejemplo se encuentra en la pagina de documentación de Django. En la sección de DATABASES.
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'nombre_db',
        'USER': 'usuario',
        'PASSWORD': 'contraseña',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}

// Hacemos un migrate para que se cree la base de datos
python manage.py migrate    // Se debe ejecutar en el directorio donde se encuentra el archivo manage.py

// 
pyton manage.py shell //  


