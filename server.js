const express = require("express");
const app = express();
const bodyParser=require("body-parser");
const users=require('./routes/api/users');

//Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.use("/api/users",users);
app.get("/", (req, res) => res.send("Hello"));




const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running on port ${port} `));
