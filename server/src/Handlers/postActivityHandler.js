const postActivityController = require("../Controllers/postActivity")

const postActivityHandler = async(req, res)=>{
    try {
        const {name, difficulty, duration, season, CountryId} = req.body
        const response = await postActivityController(name, difficulty, duration, season, CountryId)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postActivityHandler