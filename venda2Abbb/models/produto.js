'use strict';
const {
  Model
} = require('sequelize');
const item = require('./item');
module.exports = (sequelize, DataTypes) => {
  class Produto extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Produto.hasMany(item, {
        foreignKey: 'ProdutoId',
      });
    }
  }
  Produto.init({
    nome: DataTypes.STRING,
    unidade: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Produto',
  });
  return Produto;
};