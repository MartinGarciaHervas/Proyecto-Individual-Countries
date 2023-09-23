// const axios = require("axios");
const server = require("./src/server");
const { sequelize } = require('./src/db.js');
const postCountries = require("./src/Controllers/postAllCountries");
const PORT = 3001;

postCountries().then(()=>{

  server.listen(PORT, () => {
    sequelize.sync({ force: true })
    console.log(`Server raised in port: ${PORT}`);
  })
}).catch(error=>{
  console.log(error.message);
})
