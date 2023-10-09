const {Country} = require('../db');
const axios = require('axios')

//Funcion que toma el texto con tildes y lo devuelve sin ellos
function quitarTildes(texto) {

    //normalize es un metodo de todo string, en NFD lo que hace es separar una letra de su tilde, por ejemplo á = a´
    //entonces despues con el regex, lo que hace es remplazar los caracteres que no sean letras, por '', osea los elimina. 
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}


//Esta Funcion trae toda la informacion de la api, y la mapea devolviendo solo la info que necesito para mi modelo
const getDataFromApi = async ()=>{
    try {
        const {data} = await axios('http://localhost:5000/countries');
        const datosSeleccionados = data.map((pais) => ({
            id: pais.cca3,
            name: quitarTildes(pais?.translations.spa.common),
            flag: pais.flags.png,
            continent: pais.continents[0],
            capital: pais.capital?pais.capital[0]:null,
            subregion: pais.subregion,
            area: pais.area,
            population: pais.population,
            map: pais.maps.googleMaps,
            timezone: pais.timezones,
            independent: pais.independent,
            currency: pais.currencies?Object.keys(pais.currencies)[0]:'usd'
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
        const countries = await Country.findAll()
        
        !countries.length? await Country.bulkCreate(data) : null;
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