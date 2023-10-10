const { User } = require('../db')

const postUserController = async (user) => {
    try {
        const newUser = await User.create({ email: user.email, password: user.password, username: user.username })
        return(true)
    } catch (error) {
        return error.message
    }
}

module.exports = postUserController