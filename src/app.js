const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
    dotenv.config();
const { conectar, desconectar } = require('./database');
const routes = require('./routes/index');

const PORT = process.env.PORT || 3009

app.use(express.json());

app.get('/', (req, res) => {
        res.json({
        message: "API de Textos",
        rutas_disponibles: {
            textos: {
                "GET /catalogo": "Muestra todos los títulos",
                "GET /catalogo/:id": "Muestra título por ID",
                "GET /catalogo/autor/:autor": "Muestra titulos por autor",
                "GET /catalogo/año/:año": "Muestra titulos por año",               
                "POST /catalogo": "Crear nuevo titulo",
                "PUT /catalogo/:id": "Actualizar título",
                "DELETE /catalogo/:id": "Eliminar titulo"
            },
            catalogo: {
                "GET /catalogo": "Lista completa del catálogo",
                "GET /catalogo/autor/:autor": "Buscar por autor",
                "GET /catalogo/genero/:genero": "Buscar por género",
                "GET /catalogo/año/:año": "Buscar por año"
            }
        }
    });
});

app.use('/', routes) // Manejo Endpoints


// Middleware ERROR 404
app.use((req, res) => {
    res.status(404).send('La página que buscas no existe - Ruta no encontrada');
});

// Inicio del servidor con conexión a la DB
(async () => {
    try {
        await conectar(); 
        app.listen(PORT, () => {
            console.log(`Servidor inicializado en el puerto: ${PORT}`);
        });
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
    }
})();

// Desconexión a la DB
process.on('SIGINT', async () => {
    console.log('Desconectando el servidor');
    await desconectar();
    process.exit();
});

