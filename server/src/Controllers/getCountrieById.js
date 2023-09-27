const { Country } = require('../db');

const getCountryById = async (req, res) => {
    try {
        const { idPais } = req.params;
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


        res.status(200).json({ pais, activities })
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCountryById