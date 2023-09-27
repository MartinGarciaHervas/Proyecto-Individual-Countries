const { Router } = require("express");

//Controllers
const getCountryById = require("../Controllers/getCountrieById");
const postActivity = require("../Controllers/postActivity");
const getAllActivitiesHandler = require("../Handlers/getAllActivitiesHandler");
const getAllCountriesHandler = require("../Handlers/getAllCountriesHandler");

//Router
const mainRouter = Router();

//Rutas
mainRouter.get('/countries', getAllCountriesHandler);
mainRouter.get('/countries/:idPais', getCountryById);
mainRouter.post('/activities', postActivity);
mainRouter.get('/activities', getAllActivitiesHandler);

module.exports = mainRouter;
