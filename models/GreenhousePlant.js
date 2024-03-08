const { Model, DataTypes } = require("sequelize");
//need to figure out correct file path
const sequelize = require("../config/connection");

class GreehousePlant extends Model {}

GreehousePlant.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          greenhouse_id: {
            type: DataTypes.INTEGER,
            references: {
                model: "greenhouse",
                key: "id"
                }
          },
          plant_id:{
            type: DataTypes.INTEGER,
            references: {
                model: "plant",
                key: "id"
                }
          }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: "greenhousePlant",
      }
)

module.exports =  GreehousePlant