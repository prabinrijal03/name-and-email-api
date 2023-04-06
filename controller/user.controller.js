const userService = require('../services/user.services');

exports.register = async(req,res,next)=>{
    try {
        const {name,email} = req.body;
        const successRes = await userService.registerUser(name,email);
        res.json({
            status: true,
            success: "User registered successfully"
        });
    } catch (error) {
        throw error;
    }
}
exports.login = async(req,res,next)=>{
    try {
        const {name,email} = req.body;
        const user = await userService.checkUser(email);
        if(!user){
            throw new Error('user dont exist');
        }
    } catch (error) {
        throw error;
    }
}