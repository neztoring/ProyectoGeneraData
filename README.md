# ProyectoGeneraData
Instrucciones:
1. Clonar repositorio
2. Correr comando "npm install"
3. Correr ghost 5.18.0
4. Crear una nueva cuenta de admin
5. Guardar las credenciales en el archivo properties.json
6. Agregar la cuenta admin a miembros
7. Correr el comando npx playwright test






**1. Estructura del proyecto**



![image](https://user-images.githubusercontent.com/20029761/204121372-29f4d343-68bd-461c-a498-bd6733c2c390.png)

Los tests estan dividos por el tipo de herramienta utilizada para la genenración de datos faker/mockaroo.


**2. Instalación del proyecto**
 - Descargar el proyecto en un directorio local
 - En una ventana de comandos ubicarse en el directorio local y ejecutar el comando **npm install** 

**3. Ejecutar Tests**
- Ejecutar la app ghots v 5.18
- En el archivo **properties.json** modificar las propiedades de la URL, usuario y password de la aplicación
- Ejecución de todos los tests
    - Ejecutar el comando **npx playwright test --headed**
    - Despues de terminada la ejecución para visualizar los resultados ejecuar el comando **npx playwright show-report**
 - Ejecución de test de forma individual
    - Ejecutar el comando **npx playwright test login.spec.ts --headed**
    - Despues de terminada la ejecución para visualizar los resultados ejecuar el comando **npx playwright show-report**   
    
