const express = require("express");
const app = express();
const bodyParser=require("body-parser");
//Body Parser Middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
const users=require('./routes/api/users');
//Setup MySQL
const mysql = require("mysql");
//Create Connection
const mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "employee"
});
//Connect to database
mysqlConnection.connect(err => {
  if (!err) console.log("connected");
  else console.log(err);
});


//Run query
//Get all employees
app.get("/employees", (req, res) => {
  mysqlConnection.query(
    "SELECT * FROM employee",
    (err, rows, fields) => {
      if (!err) {
        console.log(rows);
        res.send(rows);
      } else console.log(err);
    }
  );
});

app.get("/", (req, res) => res.send("Hello"));


app.use("/api/users",users);

const port = process.env.port || 5000;
app.listen(port, () => console.log(`Server is running on port ${port} `));
