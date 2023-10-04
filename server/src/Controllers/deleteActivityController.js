const {Activity} = require('../db')

const deleteActivityController= async(idActivity)=>{
    try {
        const response = await Activity.destroy({where: {id: idActivity} })
        if(response === 1){
            return 'Activity Eliminada con exito!'
        }
        return 'Activity no encontrada'
    } catch (error) {
        return error
    }
}

module.exports = deleteActivityController