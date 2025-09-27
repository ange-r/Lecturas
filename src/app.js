const express = require('express');
const app = express();
const path = require('path');
const dotenv = require('dotenv');
    dotenv.config();
const { conectar, desconectar } = require('./database');
const router = require('./routes/index');

const PORT = process.env.PORT || 3009

app.use(express.json());

app.get('/', (req, res) => {
        res.json({
        mensaje: "Bienvenido a la API de Textos Literarios",
        endpoints: {
            "CONSULTAS (GET)": {
                "/catalogo": "Todos los textos",
                "/catalogo/id/:id": "Texto por ID específico",
                "/catalogo/autor/:nombre": "Textos por autor (búsqueda parcial)",
                "/catalogo/año/:año": "Textos por año de publicación"
            },
            "GESTIÓN (POST/PUT/DELETE)": {
                "POST /catalogo": "Agregar nuevo texto",
                "PUT /catalogo/:id": "Modificar texto existente", 
                "DELETE /catalogo/:id": "Eliminar texto"
            }
        },
        ejemplo: "http://localhost:3008/catalogo/autor/garcia",
        nota: "Reemplaza '/:id' - '/:autor' - '/:año' con valores reales"
    
    });
});

app.use('/', router) // Manejo Endpoints


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

