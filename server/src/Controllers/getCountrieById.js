const {Country} = require('../db');

const getCountryById = async(req, res)=>{
    try {
        const {idPais} = req.params;
        const pais = await Country.findOne({where: {id: idPais}})
        res.status(200).json(pais)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getCountryById