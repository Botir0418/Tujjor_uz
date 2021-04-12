const express = require('express')
const router = express.Router()

const{
    AddUser,
    login,
    GetById,
    GetByIdAndDelete,
    GetByIdAndUpdate,
    GetAll,
    getMe
} = require('../controller/userController')

router.post('/add', AddUser)
router.post('/login', login)
router.get('/:id', GetById)
router.get('/all', GetAll)
router.delete('/:id', GetByIdAndDelete)
router.get('/:id', GetByIdAndUpdate)
router.get('/profile', getMe)



module.exports = router
