const {User} = require('../db')

const loginController = async(user)=>{
    try {
        const response = await User.findOne({where:{email:user.email, password:user.password}})
        if(response){
            return [true, response]
        }
        return false
    } catch (error) {
        return error.message       
    }
}

module.exports = loginController