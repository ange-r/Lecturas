const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');
    dotenv.config();

// Instancio Sequelize
const SeqDB = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    define: {timestamps: false}
});

// Método CONEXIÓN
async function conectar() {
    try {
        await SeqDB.authenticate();
        console.log('Conexión a la DB establecida correctamente.');
    } catch (error) {
        console.error('Error al conectar con la DB', error);
    }
};

// Método  DESCONEXIÓN
async function desconectar() {
    try {
        await SeqDB.close();
        console.log('Conexión cerrada correctamente.');
    } catch(error) {
        console.error('Erros al desconectar la DB', error);
    }
};

module.exports = { SeqDB, conectar, desconectar };