const { User } = require('../db')

const postUserController = async (user) => {
    try {
        const newUser = await User.create({ email: user.email, password: user.password })
        return({access:true})
    } catch (error) {
        return error.message
    }
}

module.exports = postUserController