const textos = require('../../models/texto')

// Delete Find One (búsqueda por id)
module.exports = async (req, res) => {
    try {
        const resultado = await textos.findByPk(req.params.id);
            if (!resultado) {
                res.status(404).json({ error: 'ID no encontrado.'});
            }
        await resultado.destroy();
        res.json({ message: 'Título eliminado correctamente'});
    } catch(error) {
        res.status(500).json({ error: 'Error al eliminar el título.'});
        
    }
};
