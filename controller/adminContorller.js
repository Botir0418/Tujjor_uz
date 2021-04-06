const tujjor = require("../model/tujjor")

exports.add = async(req, res) => {

  const mobs = new tujjor({
    name: req.body.name,
    email: req.body.email,
    telephone: req.body.telephone,
    password: req.body.password,
    rePassword: req.body.rePassword,
    role: req.body.role
  })
  mobs.save()
  .then(() => {
    res.status(201).json({
      success: true,
      data: mobs
    })
    // console.log(mobs)
    // res.redirect("/typography")
  })
  .catch((error) => {
    res.status(400).json({
      success: false,
      data: error
    })
  })

  // console.log(req.body)
  
}

exports.allModerator = async(req, res) => {
  const users = await tujjor.find({role: "moderator"})
  .sort({date: -1})
  console.log(users)
  
  res.render("./adminPanel/moderatorList", { users: users, layout: "./adminPanel/ui-typography", title: "Admin"})
}

exports.registration = (req, res) => {
    res.render("./registration/index", {layout: "./registration/index", title: "Registration layout"})
  }
  
  exports.adminPanel = (req, res) => {
    res.render("./adminPanel/index", {layout: "./adminPanel/index", title: "Admin panel"})
  }
  
  exports.typography = (req, res) => {
    res.render("./adminPanel/ui-typography", {layout: "./adminPanel/ui-typography", title: "Typography"})
  }
  
  exports.components = (req, res) => {
    res.render("./adminPanel/components-range-slider", {layout: "./adminPanel/components-range-slider", title: "Components"})
  }
  
  exports.charts = (req, res) => {
    res.render("./adminPanel/charts-chartjs", {layout: "./adminPanel/charts-chartjs", title: "Charts"})
  }
  
  exports.addingModerator = (req, res) => {
    res.render("./adminPanel/addingModerator", {layout: "./adminPanel/ui-typography", title: "Add Moderator"})
  }
  
  exports.moderatorList = (req, res) => {
    res.render("./adminPanel/moderatorList", {layout: "./adminPanel/ui-typography"})
  }
  
  exports.editModerator = (req, res) => {
    res.render("./adminPanel/editModerator", {layout: "./adminPanel/ui-typography"})
  }