const getCountryByIdController = require("../Controllers/getCountryByIdController");

const getCountryByIdHandler= async(req, res)=>{
    try {
        const { idPais } = req.params;
        const pais = await getCountryByIdController(idPais)
        res.status(200).json(pais)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

module.exports = getCountryByIdHandler