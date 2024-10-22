'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Pedidos extends Model {
    static associate(models) {
      Pedidos.belongsTo(models.Clientes, {
      foreignKey: "id_clientes",
      as: "clientes"
     });

     Pedidos.belongsToMany(models.Productos,{
      through: "productosxpedidos",
      foreignKey: "id_pedido",
      otherKey: "id_productos",
      as: "productos"
     })

    }
  }

  Pedidos.init({
    id_clientes: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Clientes",
        key: "id",
        onUpdate: "CASCADE",
        onDelete: "SET NULL"
      }
    },
    fecha_pedidos: {
      type: sequelize.DATE,
      allowNull: false
    }
  }, {
    sequelize,  
    modelName: 'Pedidos', // Nombre en singular
  });
  return Pedidos;
};