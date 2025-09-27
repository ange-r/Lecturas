const textos = require('../../models/texto')
const { Op } = require('sequelize');

// Find All (búsqueda por autor)
module.exports = async (req, res) => {
    try {
        const nombreAutor = req.params.autor.trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const resultado = await textos.findAll({
             where : { autor : { [Op.like] : `%${nombreAutor}%`} }
            });
            if (resultado.length === 0) {
                return res.status(404).json({ error: 'Autor no encontrado.'});
            }
        res.json(resultado);
    } catch(error) {
        res.status(500).json({ error: 'Error al buscar el autor/a.'});
        
    }
};
