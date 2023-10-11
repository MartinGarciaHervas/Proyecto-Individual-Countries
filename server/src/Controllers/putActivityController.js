const { Activity, Country } = require('../db')

const editActivityController = async (id, name, difficulty, duration, season, CountryId) => {
    try {
        const activity = await Activity.findByPk(id);

        activity.name = name;
        activity.difficulty = difficulty;
        activity.duration = `${duration}Hs`;
        activity.season = season;

        await activity.setCountries([])

        for (const element of CountryId) {
            const country = await Country.findByPk(element);
            await activity.addCountry(country);
        }

        await activity.save()

        return `${name} editada con exito!!`

    } catch (error) {
        return error.message
    }
}

module.exports = editActivityController