const express = require('express');
const router = express.Router();
const { textos } = require('../../models/texto')

// Update
router.put('/', async (req, res) => {
  try {
    const tituloID = req.params.id;
    const resultado = await textos.findByPk(tituloID);
        if(!resultado) {
            res.status(404).json({error: 'No se ha encontrado el título solicitado.'})
        } else {
            const {titulo, autor, genero, año, pais, texto} = req.body;
            await resultado.update({ titulo, autor, genero, año, pais, texto});
            res.json({mensaje: 'Título actualizado correctamente.', resultado});
        };
  } catch(error) {
    console.error('Error al actualizar el título: ', error);
    res.status(500).json({ error: 'Error al actualizar el título.'});
  } 
});

module.exports = router;