const  express = require ( "express" );
const path = require('path');

const  app = express ( );

app.set( "view engine", "ejs" );
app.set('views', path.join(__dirname, 'views'))

const homepage = require("./routes/homepage")
const staff = require("./routes/staff")
const course = require("./routes/course")
const admin = require("./routes/admin")


app.use(express.static(path.join(__dirname, 'public')))

app.use(homepage)
app.use(staff)
app.use(course)
app.use(admin)



app.listen(3000); //localhost3000