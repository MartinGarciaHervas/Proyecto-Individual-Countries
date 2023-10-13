const { User } = require('../db')

const postUserController = async (user) => {
    try {
        const oldUser = await User.findOne({where: {email:user.email} || {username: user.username}})
        const newUser = await User.create({ email: user.email, password: user.password, username: user.username })
        if(!oldUser){
            return(true)
        }
        return new Error('Usuario o email ya existe')
    } catch (error) {
        return error.message
    }
}

module.exports = postUserController