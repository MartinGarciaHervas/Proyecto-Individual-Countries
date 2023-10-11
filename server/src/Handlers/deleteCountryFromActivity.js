const deleteCountryFromActivityController = require("../Controllers/deleteCountryFromActivityController")

const deleteCountryFromActivityHandler = async(req, res)=>{
    try {
        const id_country = req.params.ids.split(',')[0]
        const id_activity = req.params.ids.split(',')[1]
        const response = await deleteCountryFromActivityController(id_country, id_activity)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = deleteCountryFromActivityHandler