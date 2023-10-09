const {Record} = require('../db')

const recordController = async (score) => {
    try {
        await Record.destroy();
        const newRecord = await Record.create(score)
        return score
    } catch (error) {
        return error.message
    }
}

module.exports = recordController