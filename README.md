# ProyectoGeneraData




**1. Estructura del proyecto**



![image](https://user-images.githubusercontent.com/20029761/204121372-29f4d343-68bd-461c-a498-bd6733c2c390.png)

- Los tests estan dividos por el tipo de herramienta utilizada para la genenración de datos faker/mockaroo.
- En el directorio **schema** se encuentran la data generada con la herramienta Mockaroo para los escenarios de prueba **A priori**


**2. Instalación del proyecto**
 - Clonar el repositorio en un directorio local
 - En una ventana de comandos ubicarse en el directorio local y ejecutar el comando **npm install** 

**3. Ejecutar Tests**
- Ejecutar la app ghots v 5.18
- En el archivo **properties.json** modificar las propiedades de la URL, usuario y password de la aplicación
- **Ejecución en modo consola**
- 
  - Ejecución de todos los tests
      - Ejecutar el comando **npx playwright test --headed**
      - Despues de terminada la ejecución para visualizar los resultados ejecuar el comando **npx playwright show-report**
      - Nota: Para esta ejecución se recomienda no ejecutar los test de Login porque puede que se genere el error **"Too many attempts try again in an hour"** y esto no permitirá ejecuar de forma existosa  los siguientes tests donde se realice autenticación.
   - Ejecución de test por funcionalidad
      - Ejecutar el comando **npx playwright test login.spec.ts --headed**
        Si el test existe en el directorio faker y mockaroo se ejecutaran a la vez y los resultados se visualizarán en el reporte de las ejecución de los 2 tests 
      - Despues de terminada la ejecución para visualizar los resultados ejecuar el comando **npx playwright show-report**   
      - 
- **Ejecución en modo visual**

    - Abrir el proyecto en Visual Code

    - Ejecución de todos los tests
        - En el modulo Testing , checkear la opción "Show Browser" y dar click en el icono de la acción play  que se encuentra al lado derecho del directorio **tests**

        ![image](https://user-images.githubusercontent.com/20029761/204122337-11c0e6a8-f17f-4202-aa46-4b7851827298.png)


        - Despues de terminada la ejecución el sistema abre la venta del navegaro web para visualizar los resultados de la ejecución de los test
        - Nota: Para esta ejecución se recomienda no ejecutar los test de Login porque puede que se genere el error **"Too many attempts try again in...."** y esto no permitirá ejecuar de forma existosa  los siguientes tests donde se realice autenticación.
        - 
     - Ejecución de test por funcionalidad
     
         - En el modulo Testing , checkear la opción "Show Browser" y dar click en el icono de la acción play  que se encuentra al lado derecho del archivo que contiene el grupo de test para una funcionalidad específica



     ![image](https://user-images.githubusercontent.com/20029761/204122490-a3d2ac91-5829-4080-8618-6421d741b1ec.png)

     - Despues de terminada la ejecución el sistema abre la venta del navegaro web para visualizar los resultados de la ejecución de los test


    
