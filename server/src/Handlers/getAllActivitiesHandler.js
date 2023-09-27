const getAllActivities = require("../Controllers/getAllActivities")

const getAllActivitiesHandler = async(req, res)=>{
    try {
        const activities = await getAllActivities();
        res.status(200).json(activities)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}

module.exports = getAllActivitiesHandler