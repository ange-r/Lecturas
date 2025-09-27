const express = require('express');
const router = express.Router();
const {textos} = require('../../models/texto')

// Find by Primary Key (Búsqueda por ID)
router.get('/', async (req, res) => {
    try {
        const tituloID = req.params.id;
        const resultado = await textos.findByPk(tituloID);
        if (!resultado) {
            res.status(404).json({error: 'No se ha encontrado el título solicitado.'})
        } else {
        res.status(200).json(resultado);
        }
    } catch(error) {
        console.log('Error al hacer la petición: ', error);
        res.status(500).json({error: 'Error al hacer la petición.'});
    }
});

module.exports = router;