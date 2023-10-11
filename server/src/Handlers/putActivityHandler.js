const editActivityController = require("../Controllers/putActivityController")

const editActivityHandler= async(req, res)=>{
    try {
        const {id, name, difficulty, duration, season, CountryId} = req.body
        const response = await editActivityController(id, name, difficulty, duration, season, CountryId)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = editActivityHandler