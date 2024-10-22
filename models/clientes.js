'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Clientes extends Model {
    static associate(models) {
      Clientes.hasMany(models.Pedidos,{
        foreignKey: "id_clientes",
        as: "clientes",
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      })
    }
  }

  Clientes.init({
    nombre_cliente: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  }, {
    sequelize,
    modelName: 'Clientes', // Nombre en singular
  });

  return Clientes;
};