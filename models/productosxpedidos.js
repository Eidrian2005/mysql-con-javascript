'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class productosXpedidos extends Model {
    static associate(models) {
    }
  }   

  Pedidos.init({  
    id_pedidos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Pedidos",
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    },
    id_productos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Productos",
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    },

    cantidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    fecha_pedidos: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'ProductosXPedidos', // Nombre en singular
  });

  return productosXpedidos;
};