const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const app = express()
const bodyParser = require("body-parser")
const methodOverride = require("method-override")
const path = require("path")
const cors = require("cors")
const i18n = require("i18n-express")
const morgan = require('morgan')
const session = require("express-session")
const connectDB = require("./config/config")
connectDB()

app.use(bodyParser.json())
app.use(cors())
app.set("views", path.join(__dirname, "views"))
app.set("view engine", "ejs")
app.use(express.static(path.join(__dirname, "public")))
app.use(expressLayouts)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan(':method :url :status :response-time'))
app.use(methodOverride("_method", {
    methods: ['POST', 'GET','PUT','DELETE']
}))
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));
   
app.use(i18n({
    translationsPath: path.join(__dirname, 'i18n'),
    siteLangs: ["uz","eng"],
    textsVarName: 'translation'
}))

app.use("/", require("./routes/pageRouter"))


// ---------------ROURER------------------
app.use('/api', require('./routes/orderRouter'))
app.use('/api', require('./routes/userRouter'))
app.use('/api', require('./routes/productController'))
app.use('/api', require('./routes/paymentRouter'))
app.use('/api', require('./routes/catagoryRouter'))


const port = 3040
app.listen(port, (req, res) => {
    console.log(`Server is working in ${port} th port`)
})