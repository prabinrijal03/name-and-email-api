const userModel = require('../model/user.model');

class userService{
    static async registerUser(name,email){
        try {
            const createUser = new userModel({name, email});
            return await createUser.save();
        } catch (error) {
            throw error;
        }
    }

    static async checkUser(email){
        try{
        return await userModel.findOne({email});
        }
        catch(error){
            throw error;
        }
    }
}
module.exports = userService;