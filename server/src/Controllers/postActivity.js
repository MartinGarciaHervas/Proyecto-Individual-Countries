const {Activity, Country} = require('../db');

const postActivity = async(req, res)=>{
    try {
        const {name, difficulty, duration, season, CountryId} = req.body

        //Creo la nueva Actividad
        const newActivity = await Activity.create({ name: name, difficulty: difficulty, duration: duration, season: season })

        //Asocio la acitivity con el CountryId que me pasan por Body
        const country = await Country.findByPk(CountryId);
        await newActivity.addCountry(country);

        res.status(200).json('Activity creada con Exito!!')

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postActivity