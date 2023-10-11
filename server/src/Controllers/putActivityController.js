const { Activity, Country } = require('../db')

const editActivityController = async (id, name, difficulty, duration, season, CountryId) => {
    try {
        const activity = await Activity.findByPk(id);

        activity.name = name;
        activity.difficulty = difficulty;
        activity.duration = `${duration}Hs`;
        activity.season = season;

        CountryId.forEach(async(element) => {
            const country = await Country.findByPk(element);
            await activity.setCountries(country);
        })

        await activity.save()

        return `${name} editada con exito!!`

    } catch (error) {
        return error.message
    }
}

module.exports = editActivityController