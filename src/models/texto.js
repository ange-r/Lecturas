const { DataTypes } = require('sequelize');
const { SeqDB } = require('../database');

const Texto = SeqDB.define('Texto', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  titulo: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  autor: {
    type: DataTypes.STRING(100),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  genero: {
    type: DataTypes.STRING(50),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  año: {
    type: DataTypes.INTEGER,
    allowNull: true,
    validate: {
      isInt: true,
      min: 1000,
      max: new Date().getFullYear()
    }
  },
  pais: {
    type: DataTypes.STRING(50),
    allowNull: true
  },
  texto: {
    type: DataTypes.TEXT('long'),
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
}, {
  tableName: 'Textos',
  timestamps: true // Agrega createdAt y updatedAt automáticamente
});

module.exports = Texto;