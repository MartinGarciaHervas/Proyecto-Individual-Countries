// const axios = require("axios");
const server = require("./src/server");
const { sequelize } = require('./src/db.js');
const postCountries = require("./src/Controllers/postAllCountries");
const PORT = process.env.PORT


const startServer = async () => {
  try {
    await sequelize.sync({ force: false }); // Espera a que la DB se actualice
    server.listen(PORT, '0.0.0.0', () => {
      console.log(`Server raised in port: ${PORT}`);
    });
    await postCountries()
  } catch (error) {
    console.error('Error starting server:', error);
  }
};

startServer();