const textos = require('../../models/texto')

// Find All
module.exports = async (req, res) => {
    try {
        const resultado = await textos.findAll( {
            attributes: [ ['id', 'ID'], ['titulo', 'Título'], ['autor', 'Autor/a'], ['pais', 'País'], ['año', 'Año'], ['genero', 'Género'], ['texto', ' '] ],
        });
        res.json(resultado);
    } catch(error) {
        console.log('Error al hacer la petición: ', error);
        res.status(500).json({error: 'Error al hacer la petición.'});
    }
};