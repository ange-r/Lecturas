const express = require('express');
const router = express.Router();
const {textos} = require('../../models/texto')

// Create
router.post('/', async (req, res) => {
  try {
    const { titulo, autor, genero, año, pais, texto} = req.body; // Invoco el dato
    const nuevoTitulo = await textos.create({ titulo, autor, genero, año, pais, texto }); // Creo el nuevo objeto, el id lo genera Sequelize
    res.status(201).json(nuevoTitulo);
  } catch(error) {
    console.error('Error al crear el Título: ', error);
    res.status(500).json({ error: 'Error al crear el Título.'});
  } 
});

module.exports = router;