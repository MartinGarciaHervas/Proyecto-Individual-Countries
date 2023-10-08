const { DataTypes, BOOLEAN } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Country', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
      Validate: {
        len: [3],
        isUpperCase: true,
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    flag: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    continent: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    capital: {
      type: DataTypes.STRING,
    },
    subregion: {
      type: DataTypes.STRING,
    },
    area: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    map: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    timezone: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    },
    independent: {
      type: DataTypes.BOOLEAN,
      allowNull:true,
    },
    currency: {
      type: DataTypes.STRING
    }
  }, { timestamps: false });
};