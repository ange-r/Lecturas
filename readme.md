# 👩🏻‍💻 LECTURAS - API para gestionar textos
## API Restful usando Express - Sequelize - MySQL

### OBJETIVO
>El objetivo de este proyecto es trabajar en conjunto con otr@ desarrolladores trainee/jr.
>
>La idea es que quien guste esplorar, estudiar, probar, sumar o mejorar pueda ir haciendolo.
>
>En este momento solo cuenta con estructura backend.>

  
#### Tecnologías principales
- Node.js
- Express.js
- Sequelize
- MySQL
- Dotenv
- Nodemon
---

#### Endpoints
| Método | Ruta                 | Descripción                             |
|--------|----------------------|-----------------------------------------|
| GET | `/` | Podemos ver mensaje JSON con listado de endpoints para pruebas. |
| GET | `/catalogo` | Lista todos los textos que están dentro del catálogo. |
| GET | `/catalogo/id/:id` | Busqueda de textos según ID. Se espera numero entrero '5' |
| GET | `/catalogo/autor/:autor` | Muestra textos según autor/a. Búsqueda configurada parcial, y normalizada para suplir caracteres especiales, espacios y acentos. Se esperan caracteres 'Emily'|
| GET | `/catalogo/año/:año` | Busqueda de textos según año. Se espera número tipo '1896' |
| POST | `/catalogo` | Crea nuevo texto en la DB. Se esperan datos por BODY, en formato JSON (ver /data/textos.json)|
| PUT | `/catalogo/:id` | Actualizar/modificar datos en textos existentes. Se espera id '4', para la consulta y los cambios realizados por BODY en formato JSON. |
| DELETE | `/catalogo/:id` | Eliminar textos de la DB. Se espera ID '10'. |
---
#### Estructura del proyecto

```
 .env (Variables de entorno) -->> CREAR
 /src
   /app.js  (main)
   /database.js  (Conexión Sequelize)
   /data  
    /Lecturas.sql  (Archivos para cración DB + Tabla en MySQL)
    /textos.json   (Set datos para pruebas)
   /routes
     /index.js 
     /catalogo (Endpoint)
      /create.js
      /update.js
      /delete.js
      /get-all.js
      /get-by-id.js
      /get-by-autor.js
      /get-by-año
      /get-by-genero  (INCOMPLETO)
      /get-by-pais   (INCOMPLETO)
   /models
     /texto.js (Modelo Sequelize)
```
--- 

#### Instalación

1. Cloná el repositorio 
   ```bash
    git clone https://github.com/ange-r/Lecturas
   ```
2. Copialo en tu carpeta y abrilo en tu terminal
3. Instala dependencias
   ```
    cd PracticaProyectoFinal
    npm install
   ```
---
#### Configuración Variables de entorno:

- Crear un archivo .env en la raíz del proyecto con el siguiente contenido:
  ```
    PORT=3008
    DB_NAME=Lecturas
    DB_USER=root
    DB_PASSWORD=(tu_contraseña_MySQL)
    DB_HOST=localhost
    DB_PORT=3306
  ```
---
#### Cómo correr el servidor
  ```
    npm run dev
  ```

##### El servidor se levanta en:
#### http://localhost:3005
---
#### Checklist de tareas

  Podes trabajar lo que gustes y agregar a las casillas:

- [x] Clonación repositorio e instalación de dependencias
- [x] Creación DB en MySQL + data
- [x] Creación Variables de entorno
- [x] Conexión a DB
- [x] CRUD de textos
- [x] Endpoints para consultas por ID - Autor/a - Año
