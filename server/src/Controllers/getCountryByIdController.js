const { Country } = require('../db');

const getCountryByIdController = async (idPais) => {
    try {
        const pais = await Country.findOne({ where: { id: idPais } })


        const allActivities = await pais.getActivities()
        const activities = allActivities.map(activity => (
            {
                name: activity.name,
                difficulty: activity.difficulty,
                duration: activity.duration,
                season: activity.season,
                id: activity.id
            }))


        return { pais, activities }
    } catch (error) {
        return error.message
    }
}

module.exports = getCountryByIdController