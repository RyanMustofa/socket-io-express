'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class socket extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  socket.init({
    _id: DataTypes.STRING,
    auth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'socket',
  });
  return socket;
};