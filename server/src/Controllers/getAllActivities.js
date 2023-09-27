const {Activity} = require('../db');

const getAllActivities = async()=>{
    try {
        return await Activity.findAll();
    } catch (error) {
        return error
    }
}

module.exports = getAllActivities