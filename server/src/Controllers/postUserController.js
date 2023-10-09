const { User } = require('../db')

const postUserController = async (user) => {
    try {
        const newUser = await User.create({ email: user.email, password: user.password })
        return(true)
    } catch (error) {
        return error.message
    }
}

module.exports = postUserController