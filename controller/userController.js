const User = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
/*
Foydalanuvchining kirish bolimi!
 */ 
exports.AddUser = async (req, res)=>{
    const salt = await bcrypt.genSaltSync(12)
    const password = await bcrypt.hashSync(req.body.password,salt)

    const user = new User({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: password
    })
    user.save()
        .then(()=>{
            res.status(201).json({
                success:true,
                date:user
            })
        })
        .catch((error)=>{
            res.status(400).json({
                success:false,
                date:error
            })
        })
}
/*
Foydalanuvchining login bolimi
*/
exports.login = async (req, res)=> {
    await User.findOne({email: req.body.email},(error, user)=>{
        if(error){
            res.send(error)
        }else{
            if(!user){
                res.status(404).json({
                    success:false,
                    date:'Foydalanuvchi topilmadi'
                })
            }else {
                if(!bcrypt.compareSync(req.body.password,user.password)){
                    res.status(401).json({
                        success:false,
                        date:'Parol togri kelmadi'
                    })
                }else{
                    let payload = {subject: user._id}
                    let token = jwt.sign(payload, config.JWT_SECRET)
                res.status(200).json({
                    token
                })
                }
            }
        }
    })
}
exports.GetById = async (req, res)=>{
    const user = await User.findById(req.params.id)
        .select('name')
    res.status(200).json({
        user
    })
}
exports.GetAll = async(req, res)=>{
    const user=await User
        .find()
        .sort({date:-1})
        .limit(3)
        .select('name')
    res.send(user)
}
exports.GetByIdAndDelete = async (req, res)=>{
   const user = await User.findByIdAndDelete(req.params.id)
    res.send(user)
}
exports.GetByIdAndUpdate = async(req, res)=>{
   const user= await User.findByIdAndUpdate(req.params.id)
    user.name = req.body.name,
        user.email = req.body.email,
        user.phone = req.body.phone,
        user.password = req.body.password
    user.save()
        .then(()=>{
            res.status(201).json({
                success:true,
                date:user
            })
        })
        .catch((error)=>{
            res.send(400).json({
                success:false,
                date:error
            })
        })
}

exports.getMe = async (req,res)=>{
    const token = req.headers.authorization
    const user =  jwt.decode(token.slice(7,token.length))
    const me = await User.findOne({_id: user.subject})
        .select({password: 0})
    res.send(me)
}


