const { Activity, Country } = require('../db')

const deleteCountryFromActivityController = async (id_country, id_activity) => {
    try {
        const activity = await Activity.findByPk(id_activity);
        const country = await Country.findByPk(id_country);

        await activity.removeCountry(country);
        return `${country.name} ha sido eliminado de ${activity.name}`
    } catch (error) {
        return error.message
    }
}

module.exports = deleteCountryFromActivityController