const { Texto } = require('../models/texto');
const textosData = require('../data/textos.json');


//Para poblar de datos la DB
async function seedDatabase() {
  try {
    console.log('Iniciando seed de la base de datos...');
    
    //Inserta datos desde el JSON
    await Texto.bulkCreate(textosData.textos);
    console.log(`${textosData.textos.length} textos insertados`);
    
    //Verificar carga
    const total = await Texto.count();
    console.log(`Total archivos en DB: ${total}`);
    
    process.exit(0);
  } catch (error) {
    console.error('Error en seed:', error);
    process.exit(1);
  }
}

// Ejecutar si se llama directamente
if (require.main === module) {
  seedDatabase();
}

module.exports = seedDatabase;