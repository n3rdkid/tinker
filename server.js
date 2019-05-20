const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const users=require('./routes/api/users');
const passport =require('passport');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//Passport middleware
app.use(passport.initialize());
//Passport config
require('./config/passport')(passport);

//Routes
app.use("/api/users",users);




const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running on port ${port} `));
