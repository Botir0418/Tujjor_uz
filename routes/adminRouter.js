const express = require("express")
const router = express.Router()
const {
    registration, 
    adminPanel, 
    editModerator, 
    components, 
    charts, 
    addingModerator
} = require("../controller/adminContorller")

const {
    add, 
    allModerator
} = require("../controller/adminContorller")

router.post("/addingModerator", add)
router.get("/registration", registration)
router.get("/admin", adminPanel)
router.get("/editModerator", editModerator)
router.get("/editModerator/:id", editModerator)
router.get("/components", components)
router.get("/charts", charts)
router.get("/addingModerator", addingModerator)
router.get("/typography", allModerator)

module.exports = router