const { Texto } = require('../models/texto');
const fs = require('fs');
const path = require('path');



async function exportDatabase() {
  try {
    
    //Traer set data
    const textos = await Texto.findAll({
      raw: true, // Datos simples, sin instancias de Sequelize
      order: [['id', 'ASC']]
    });
    
    // 2. Crear estructura JSON
    const exportData = {
      textos: textos,
      exportado: new Date().toISOString(),
      total: textos.length
    };
    
    // 3. Guardar archivo
    const exportPath = path.join(__dirname, '../data/textos-export.json');
    fs.writeFileSync(exportPath, JSON.stringify(exportData, null, 2));
    
    console.log(`✅ ${textos.length} textos exportados a: ${exportPath}`);
    process.exit(0);
  } catch (error) {
    console.error('❌ Error en exportación:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  exportDatabase();
}

module.exports = exportDatabase;