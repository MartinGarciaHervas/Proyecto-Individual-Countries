const { Country, Activity } = require('../db')
const { Op } = require('sequelize')

const getAllCountries = async (name) => {
    try {

        //Si me llegan Querys, buscamos el pais con el nombre que nos pide, sin ser estricto mediante el iLike
        if (name) {
            const countries = await Country.findAll({ where: { name: { [Op.iLike]: `%${name}%` } } })
            return countries
        }

        //En caso de que no hayan Querys, buscamos todos los paises
        const countries = await Country.findAll({
            include: [
                {
                    model: Activity,
                    through: { attributes: [] }
                }
            ]
        })
        return countries
    } catch (error) {
        return error
    }
}

module.exports = getAllCountries