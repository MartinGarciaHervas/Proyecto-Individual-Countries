require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

//Importo Los Modelos
const CountryModel = require('./models/Country');
const ActivityModel = require('./models/Activity');
const UserModel = require('./models/User')
const RecordModel = require('./models/Record')


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/proyectoindividualcountries`,
  { logging: false, native: false });


//Ejecuto la funcion de cada modelo
CountryModel(sequelize);
ActivityModel(sequelize);
UserModel(sequelize);
RecordModel(sequelize);

//Relaciono los modelos

const { Country, Activity } = sequelize.models;

Country.belongsToMany(Activity, {through: 'country_activities'})
Activity.belongsToMany(Country, {through: 'country_activities'})


module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  sequelize,     // para importart la conexión { conn } = require('./db.js');
};