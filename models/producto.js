  'use strict';
  const { Model, DataTypes } = require('sequelize');

  module.exports = (sequelize) => {
    class Productos extends Model {
      static associate(models) {
        
      }
    }

    Productos.init({
      nombre_producto: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precio: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      cantidad_inventario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    }, {
      sequelize,
      modelName: 'Productos'
    });

    return Productos;
  };