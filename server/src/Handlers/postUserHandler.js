function postUserHandler(req, res){
    try {
        const user = req.body
        
        res.status(200).json({access: true})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

module.exports = postUserHandler