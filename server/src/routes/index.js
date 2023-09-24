const { Router } = require("express");

//Controllers
const getAllCountries = require("../Controllers/getAllCountries");
const getCountryById = require("../Controllers/getCountrieById");
const postActivity = require("../Controllers/postActivity");
const getAllActivities = require("../Controllers/getAllActivities");

//Router
const mainRouter = Router();

//Rutas
mainRouter.get('/countries', getAllCountries);
mainRouter.get('/countries/:idPais', getCountryById);
mainRouter.post('/activities', postActivity);
mainRouter.get('/activities', getAllActivities);

module.exports = mainRouter;
