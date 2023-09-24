const {Country} = require('../db')
const {Op} = require('sequelize')

const getAllCountries = async(req, res) =>{
    try {
        const {name} = req.query

        //Si me llegan Querys, buscamos el pais con el nombre que nos pide, sin ser estricto mediante el iLike
        if(name){
            const countries = await Country.findAll({where:{name:{[Op.iLike]:`%${name}%`}}})
            if(countries.length){
                return res.status(200).json(countries);    
            } 
            return res.status(404).json('No se enontro un pais con ese nombre:(')   
        }

        //En caso de que no hayan Querys, buscamos todos los paises
        const countries = await Country.findAll()
        return res.status(200).json(countries)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = getAllCountries