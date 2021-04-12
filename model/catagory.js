const mongoose=require('mongoose')

const categorySchema=mongoose.Schema({
    name:{
        type:String, 
        required:true
    },
    slug:{
        type:String
    },
    date:{
        type:Date, 
        default:Date.now()
    }
})

module.exports=mongoose.model('Category', categorySchema);