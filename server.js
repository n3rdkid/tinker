const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser=require("body-parser");
const users=require('./routes/api/users');
const challenges=require('./routes/api/challenges');
const assignments=require('./routes/api/assignments');
const quiz=require('./routes/api/quiz');
const admin=require('./routes/api/admin');
const passport =require('passport');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//Passport middleware
app.use(passport.initialize());

app.use(cors());
//Passport config
require('./config/passport')(passport);

//Routes
app.use("/api/users",users);
app.use("/api/challenges",challenges);
app.use("/api/assignments",assignments);
app.use("/api/quiz",quiz);
app.use("/api/admin",admin);




const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running on port ${port} `));
