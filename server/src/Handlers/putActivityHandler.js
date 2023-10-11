const editActivityController = require("../Controllers/putActivityController")

const editActivityHandler= async()=>{
    try {
        const {name, difficulty, duration, season, CountryId} = req.body
        await editActivityController(name, difficulty, duration, season, CountryId)
        res.status(200).json(`${name} editada con exito!!`)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = editActivityHandler