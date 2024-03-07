const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Greenhouse extends Model {}

Greenhouse.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    greenhouse_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    plant_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "plant",
          key: "id",
        },
      },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "greenhouse",
  }
);

module.exports = Greenhouse;
