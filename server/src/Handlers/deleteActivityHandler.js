const deleteActivityController = require('../Controllers/deleteActivityController')

const deleteActivityHandler = async(req, res)=>{
    try {
        const {idActivity} = req.params
        const response = await deleteActivityController(idActivity)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = deleteActivityHandler