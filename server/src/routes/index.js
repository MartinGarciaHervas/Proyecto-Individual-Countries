const { Router } = require("express");

const postCountries = require('../Controllers/postAllCountries')

const mainRouter = Router();

mainRouter.get('/countries', postCountries)

module.exports = mainRouter;
