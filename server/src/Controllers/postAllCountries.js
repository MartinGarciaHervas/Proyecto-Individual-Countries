const {Country} = require('../db');
const axios = require('axios')


//Esta Funcino trae toda la informacion de la api, y la mapea devolviendo solo la info que esta en mi modelo
const getDataFromApi = async ()=>{
    try {
        const {data} = await axios('http://localhost:5000/countries');
        const datosSeleccionados = data.map((pais) => ({
            id: pais.cca3,
            name: pais.name.common,
            flag: pais.flags.png,
            continent: pais.continents[0],
            capital: pais.capital?pais.capital[0]:null,
            subregion: pais.subregion,
            area: pais.area,
            population: pais.population,
            map: pais.maps.googleMaps,
            timezone: pais.timezones,
            independent: pais.independent
        }))
        if (data.length) return datosSeleccionados;
        throw new Error('No se pudo obtener los datos de la api')
    } catch (error) {
        throw new Error(error.message)
    }
}


//Esta funcion usa la informacion que obtengo en la anterior, y la agrega a mi base de datos
const postAllCountries = async (data) => {
    try {
        await Country.bulkCreate(data);
    } catch (error) {
        throw new Error (error.message)
    }
}

//Esta es la funcion que ejecuta las dos anteriores, y es la que maneja los errores
const postCountries = async () => {
    try {
        const data = await getDataFromApi();
        await postAllCountries(data);
    } catch (error) {
        console.log(error);
    }
}

module.exports = postCountries;