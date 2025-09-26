const express = require('express');
const router = express.Router();
const {textos} = require('../../models/texto')
const { Op } = require('sequelize');

// Delete Find One (búsqueda por id)
router.delete('/:id', async (req, res) => {
    try {
        const tituloID = req.params.id;
        const resultado = await textos.findOne( {
             where : { id : tituloID }
            });
            if (!resultado) {
                res.status(404).json({ error: 'Título no encontrado.'});
            }
        await resultado.destroy();
        res.json({ message: 'Título eliminado correctamente'});
    } catch(error) {
        res.status(500).json({ error: 'Error al eliminar el título.'});
        
    }
});

module.exports = router;