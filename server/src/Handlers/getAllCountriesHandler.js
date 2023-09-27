const getAllCountries = require('../Controllers/getAllCountries');

const getAllCountriesHandler = async(req,res)=>{
    try {
        const {name} = req.query;
        if(name){
            const countries = await getAllCountries(name);
            if(countries.length){
                return res.status(200).json(countries);
            }
            return res.status(404).json('No se encontro un pais con ese nombre')
        }

        const countries = await getAllCountries();
        return res.status(200).json(countries)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getAllCountriesHandler