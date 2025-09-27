const express = require('express');
const router = express.Router();

// Importo rutas
const crearTitulo = require('./catalogo/create');
const updateTitulo = require('./catalogo/update');
const deleteTitulo = require('./catalogo/delete');

const catalogo = require('./catalogo/get-all');
const tituloID = require('./catalogo/get-by-id');
const titulosAutor = require('./catalogo/get-by-autor');
const titulosAño = require('./catalogo/get-by-año');
// Completar busqueda por genero - pais

// Configuro rutas
router.post('/catalogo', crearTitulo); //POST
router.put('/catalogo/:id', updateTitulo); //PUT
router.delete('/catalogo/:id', deleteTitulo); //DELETE 
router.get('/catalogo', catalogo); //GET All
router.get('/catalogo/id/:id', tituloID); //GET One 
router.get('/catalogo/autor/:autor', titulosAutor); //GET según Autor
router.get('/catalogo/año/:año', titulosAño); //GET según Año

module.exports = router;