const express = require('express');
const router = express.Router();
const {textos} = require('../../models/texto')

// Find All (búsqueda por año)
router.get('/año/:año', async (req, res) => {
    try {
        const año = req.params.año;
        const resultado = await textos.findAll({
             where : { año : {año} }
            });
            if (resultado.length === 0) {
                res.status(404).json({ error: 'No existen titulos guardados para ese año.'});
            }
        res.json(resultado);
    } catch(error) {
        res.status(500).json({ error: 'Error al ejecutar la búsqueda.'});
        
    }
});

module.exports = router;