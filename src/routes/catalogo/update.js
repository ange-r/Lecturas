const textos = require('../../models/texto')

// Update
module.exports = async (req, res) => {
  try {
    const resultado = await textos.findByPk(req.params.id);
        if(!resultado) {
            res.status(404).json({error: 'No se ha encontrado el título solicitado.'})
        } else {
            const {titulo, autor, genero, año, pais, texto} = req.body;
            await resultado.update(req.body);
            res.json({mensaje: 'Título actualizado correctamente.', resultado});
        };
  } catch(error) {
    console.error('Error al actualizar el título: ', error);
    res.status(500).json({ error: 'Error al actualizar el título.'});
  } 
};