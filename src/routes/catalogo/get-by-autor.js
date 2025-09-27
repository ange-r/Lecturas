const express = require('express');
const router = express.Router();
const {textos} = require('../../models/texto')
const { Op } = require('sequelize');

// Find All (búsqueda por autor)
router.get('/', async (req, res) => {
    try {
        const nombreAutor = req.params.autor;
        const resultado = await textos.findAll({
             where : { autor : { [Op.like] : `%${nombreAutor}%`} }
            });
            if (resultado.length === 0) {
                res.status(404).json({ error: 'Autor no encontrado.'});
            }
        res.json(resultado);
    } catch(error) {-
        res.status(500).json({ error: ''});
        
    }
});

module.exports = router;