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
router.use('/catalogo', crearTitulo); //POST
router.use('/catalogo', updateTitulo); //PUT
router.use('/catalogo', deleteTitulo); //DELETE 
router.use('/catalogo', catalogo); //GET All
router.use('/catalogo/:id', tituloID); //GET One 
router.use('/catalogo/:autor', titulosAutor); //GET según Autor
router.use('/catalogo/:año', titulosAño); //GET según Año


module.exports = router;