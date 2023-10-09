const loginController = require('../Controllers/loginController')

const loginHandler = async(req, res)=>{
    try {
        const {email, password} = req.query
        const access = await loginController({email, password})
        res.status(200).json(access)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = loginHandler