const { Model, DataTypes } = require("sequelize");
//need to figure out correct file path
const sequelize = require("../config/connection");

class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    plant_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plant_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    plant_height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sunlight: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    water: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    humidity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "plant",
  }
);

module.exports = Plant;
