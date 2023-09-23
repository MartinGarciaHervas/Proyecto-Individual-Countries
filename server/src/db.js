require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

//Importo Los Modelos
const CountryModel = require('./models/Country')


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/proyectoindividualcountries`,
  { logging: false, native: false });


//Ejecuto la funcion de cada modelo
CountryModel(sequelize);

//Relaciono los modelos

const { Country } = sequelize.models;



module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize,     // para importart la conexión { conn } = require('./db.js');
};