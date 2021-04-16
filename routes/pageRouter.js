const express = require("express")
const router = express.Router()
const {homePage} = require("../controller/pageController")

router.get("/", homePage);

module.exports = router