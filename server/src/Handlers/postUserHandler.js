const postUserController = require("../Controllers/postUserController")

const postUserHandler=async(req, res)=>{
    try {
        const user = req.body
        const response = await postUserController(user)
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postUserHandler