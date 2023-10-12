const { Router } = require("express");

//Handlers
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
const postActivityHandler = require("../Handlers/postActivityHandler");

//Router
const mainRouter = Router();

//Rutas

//Post
mainRouter.post('/user', postUserHandler)
mainRouter.post('/activities', postActivityHandler);
mainRouter.post('/record', recordHandler)

//Get
mainRouter.get('/countries', getAllCountriesHandler);
mainRouter.get('/countries/:idPais', getCountryByIdHandler);
mainRouter.get('/activities', getAllActivitiesHandler);
mainRouter.get('/user', loginHandler)
mainRouter.get('/record', getRecordHandler)

//Put
mainRouter.put('/activities', editActivityHandler)

//Delete
mainRouter.delete('/activities/:ids', deleteCountryFromActivityHandler)
mainRouter.delete('/activity/:idActivity', deleteActivityHandler)

module.exports = mainRouter;
