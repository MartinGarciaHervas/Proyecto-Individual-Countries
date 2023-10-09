const { Router } = require("express");

//Controllers
const getCountryById = require("../Controllers/getCountrieById");
const postActivity = require("../Controllers/postActivity");
const getAllActivitiesHandler = require("../Handlers/getAllActivitiesHandler");
const getAllCountriesHandler = require("../Handlers/getAllCountriesHandler");
const deleteActivityHandler = require("../Handlers/deleteActivityHandler");
const postUserHandler = require("../Handlers/postUserHandler");
const loginHandler = require("../Handlers/login");
const recordHandler = require("../Handlers/postRecordHandler");
const getRecordHandler = require("../Handlers/getRecordHandler");

//Router
const mainRouter = Router();

//Rutas
mainRouter.get('/countries', getAllCountriesHandler);
mainRouter.get('/countries/:idPais', getCountryById);
mainRouter.post('/activities', postActivity);
mainRouter.get('/activities', getAllActivitiesHandler);
mainRouter.delete('/activities/:idActivity', deleteActivityHandler)
mainRouter.post('/user', postUserHandler)
mainRouter.get('/user', loginHandler)
mainRouter.get('/record', getRecordHandler)
mainRouter.post('/record', recordHandler)

module.exports = mainRouter;
