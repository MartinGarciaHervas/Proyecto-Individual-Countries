const {Activity, Country} = require('../db');

const postActivityController = async(name, difficulty, duration, season, CountryId)=>{
    try {

        //Creo la nueva Actividad
        const newActivity = await Activity.create({ name: name, difficulty: difficulty, duration: `${duration}Hs`, season: season })

        //Asocio la acitivity con el CountryId que me pasan por Body
        //Como una actividad puede estar asociada a muchos paises, vienen dentro de un array los id's de los paises, por lo que mediante un for of, hago una asociacion por cada id
        for(const element of CountryId){
            const country = await Country.findByPk(element);
            await newActivity.addCountry(country);
        };

        return{message:`Has creado la actividad ${name} con exito!`}

    } catch (error) {
        return{error: error.message}
    }
}

module.exports = postActivityController