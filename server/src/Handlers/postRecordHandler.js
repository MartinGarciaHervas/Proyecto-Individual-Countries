const recordController = require("../Controllers/postRecordController")

const recordHandler = async(req, res) =>{
    try {
        const {score} = req.body
        const newRecord = await recordController(score);
        res.status(200).json(newRecord)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = recordHandler