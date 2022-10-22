const  express = require ( "express" );
const path = require('path');
const bodyParser = require('body-parser');

const  app = express ();

app.set( "view engine", "ejs" );
app.set('views', path.join(__dirname, 'views'))

const homepage = require("./routes/homepage")
const staff = require("./routes/staff")
const course = require("./routes/course")
const cscourse = require("./routes/cscourse") 
const admin = require("./routes/admin")
const addstaff = require("./routes/add-staff")



app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())

app.use("/", homepage)
app.use("/", staff)
app.use("/", course)
app.use("/course", cscourse)
app.use("/", admin)
app.use("/admin", addstaff)

app.listen(3000); //localhost3000