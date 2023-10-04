const { Router } = require("express");

//Controllers
const getCountryById = require("../Controllers/getCountrieById");
const postActivity = require("../Controllers/postActivity");
const getAllActivitiesHandler = require("../Handlers/getAllActivitiesHandler");
const getAllCountriesHandler = require("../Handlers/getAllCountriesHandler");
const deleteActivityHandler = require("../Handlers/deleteActivityHandler");

//Router
const mainRouter = Router();

//Rutas
mainRouter.get('/countries', getAllCountriesHandler);
mainRouter.get('/countries/:idPais', getCountryById);
mainRouter.post('/activities', postActivity);
mainRouter.get('/activities', getAllActivitiesHandler);
mainRouter.delete('/activities/:idActivity', deleteActivityHandler)

module.exports = mainRouter;
