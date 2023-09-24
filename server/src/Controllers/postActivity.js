const {Activity} = require('../db');

const postActivity = async(req, res)=>{
    try {
        const {name, difficulty, duration, season} = req.body
        await Activity.findOrCreate({ where: { name: name, difficulty: difficulty, duration: duration, season: season }})
        res.status(200).json('Activity creada con Exito!!')
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postActivity