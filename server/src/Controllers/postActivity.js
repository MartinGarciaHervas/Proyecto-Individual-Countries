const {Activity, Country} = require('../db');

const postActivity = async(req, res)=>{
    try {
        const {name, difficulty, duration, season, CountryId} = req.body

        //Creo la nueva Actividad
        const newActivity = await Activity.create({ name: name, difficulty: difficulty, duration: `${duration}Hs`, season: season })

        //Asocio la acitivity con el CountryId que me pasan por Body
        //Como una actividad puede estar asociada a muchos paises, vienen dentro de un array los id's de los paises, por lo que mediante un for each, hago una asociacion por cada id
        CountryId.forEach(async(element) => {
            const country = await Country.findByPk(element);
            await newActivity.addCountry(country);
        });

        res.status(200).json({message:`Has creado la actividad ${name} con exito!`})

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postActivity