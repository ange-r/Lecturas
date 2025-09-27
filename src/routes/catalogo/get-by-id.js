const textos = require('../../models/texto')

// Find by Primary Key (Búsqueda por ID)
module.exports = async (req, res) => {
    try {
        const resultado = await textos.findByPk(req.params.id);
        if (!resultado) {
            res.status(404).json({error: 'No se ha encontrado el título solicitado.'})
        } else {
        res.status(200).json(resultado);
        }
    } catch(error) {
        console.log('Error al hacer la petición: ', error);
        res.status(500).json({error: 'Error al hacer la petición.'});
    }
};