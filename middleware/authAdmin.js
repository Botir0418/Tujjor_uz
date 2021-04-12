const User = require('../model/user')
const authAdmin= async(req,res,next)=>{

            const user= await User.findOne({_id:req.user.id})
        if(user.role == 0){
            return res.status(400).json({msg: 'Admin resources access denied'});
        }
            next()
}
module.exports = authAdmin;