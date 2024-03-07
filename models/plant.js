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
      allowNull: true,
    },
    plant_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plant_height: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sunlight: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    water: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    humidity: {
      type: DataTypes.STRING,
      allowNull: true,
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
