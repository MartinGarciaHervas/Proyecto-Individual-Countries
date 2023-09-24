const {Country} = require('../db')

const getAllCountries = async(req, res) =>{
    try {
        const {name} = req.query
        if(name){
            const countries = await Country.findAll({where:{name:name}})
            return res.status(200).json(countries)
        }
        const countries = await Country.findAll()
        return res.status(200).json(countries)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getAllCountries