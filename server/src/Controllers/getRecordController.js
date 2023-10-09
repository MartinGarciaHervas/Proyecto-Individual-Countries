const {Record} = require('../db')

const getRecordController = async () => {
    try {
        const record = await Record.findAll()
        if(record.length){
            return record
        }
        return [{record: 0}]
    } catch (error) {
        return error.message        
    }
}

module.exports = getRecordController