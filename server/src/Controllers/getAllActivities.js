const {Activity, Country} = require('../db');

const getAllActivities = async()=>{
    try {
        return await Activity.findAll({
            include: [
                {
                    model: Country,
                    through: { attributes: [] }
                }
            ]
        });
    } catch (error) {
        return error
    }
}

module.exports = getAllActivities