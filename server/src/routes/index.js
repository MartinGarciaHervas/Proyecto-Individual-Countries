const { Router } = require("express");

//Controllers
const postActivity = require("../Controllers/postActivity");
const getAllActivitiesHandler = require("../Handlers/getAllActivitiesHandler");
const getAllCountriesHandler = require("../Handlers/getAllCountriesHandler");
const deleteActivityHandler = require("../Handlers/deleteActivityHandler");
const postUserHandler = require("../Handlers/postUserHandler");
const loginHandler = require("../Handlers/login");
const recordHandler = require("../Handlers/postRecordHandler");
const getRecordHandler = require("../Handlers/getRecordHandler");
const deleteCountryFromActivityHandler = require("../Handlers/deleteCountryFromActivity");
const editActivityHandler = require("../Handlers/putActivityHandler");
const getCountryByIdHandler = require("../Handlers/getCountryByIdHandler");

//Router
const mainRouter = Router();

//Rutas
mainRouter.get('/countries', getAllCountriesHandler);
mainRouter.get('/countries/:idPais', getCountryByIdHandler);
mainRouter.post('/activities', postActivity);
mainRouter.get('/activities', getAllActivitiesHandler);
mainRouter.get('/activities/:ids', deleteCountryFromActivityHandler)
mainRouter.delete('/activities/:idActivity', deleteActivityHandler)
mainRouter.post('/user', postUserHandler)
mainRouter.get('/user', loginHandler)
mainRouter.get('/record', getRecordHandler)
mainRouter.post('/record', recordHandler)
mainRouter.put('/activities', editActivityHandler)

module.exports = mainRouter;
