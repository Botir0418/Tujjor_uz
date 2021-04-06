const mongoose = require("mongoose")

const tujjorSchema = new mongoose.Schema({
   name: {
      type: String, 
      required: [true, 'Iltimos ismingizni kiriting'], 
      trim: true
   },
   email: {
      type: String, 
      required: [true, 'Iltimos pochtangizni kiriting'], 
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w)*(\.\w{2,3})+$/ , 'Iltimos pochtangizni tekshiring'], 
      unique: [true, "Bu pochta allaqachon registratsiyadan o'tgan"],
      trim: true
   },
   telephone: {
      type: String, 
      required: true,
      unique: true
   },
   password: {
      type: String, 
      required: [true, 'Iltimos parolni kiriting'],
      trim: true,
      select: false
   },
   rePassword: {
      type: String, 
      required: [true, 'Iltimos parolni tekshiring'],
      trim: true,
      select: false
   },
   role: {
      type: String,
      enum: ['admin', 'moderator'],
      default: 'moderator'
   },
   date: {
      type: Date, 
      default: Date.now()
   }
})

module.exports = mongoose.model('tujjor', tujjorSchema)