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
router.put('/catalogo', updateTitulo); //PUT
router.delete('/catalogo', deleteTitulo); //DELETE 
router.get('/catalogo', catalogo); //GET All
router.get('/catalogo/:id', tituloID); //GET One 
router.get('/catalogo/:autor', titulosAutor); //GET según Autor
router.get('/catalogo/:año', titulosAño); //GET según Año

module.exports = router;