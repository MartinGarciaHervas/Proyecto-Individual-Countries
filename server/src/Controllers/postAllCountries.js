const {Country} = require('../db');
const axios = require('axios')

const getDataFromApi = async ()=>{
    try {
        const {data} = await axios('http://localhost:5000/countries');
        const datosSeleccionados = data.map((pais) => ({
            id: pais.cca3,
            name: pais.name.official,
            flag: pais.flags.png,
            continent: pais.continents[0],
            capital: pais.capital?pais.capital[0]:null,
            subregion: pais.subregion,
            area: pais.area,
            population: pais.population,
        }))
        if (data.length) return datosSeleccionados;
        throw new Error('No se pudo obtener los datos de la api')
    } catch (error) {
        throw new Error(error.message)
    }
}

const postAllCountries = async (data) => {
    try {
        await Country.bulkCreate(data);
    } catch (error) {
        throw new Error (error.message)
    }
}

const postCountries = async (req, res) => {
    try {
        const data = await getDataFromApi();
        await postAllCountries(data);
        res.status(200).json('Paises almacenados con exito!!');
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postCountries;