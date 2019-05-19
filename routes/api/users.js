//Handles Username Password Email
const express = require("express");
const router = express.Router();
//For encryption
const bcrypt = require("bcryptjs");
const mysql = require("mysql");
//For Database
const databaseOptions = require("../../config/config");
const mysqlConnection = mysql.createConnection(databaseOptions);

//@route GET api/users/test
//@desc  Test users route
//@access Public
router.get("/test", (req, res) => res.json({ hi: "hello" }));

//@route GET api/users/register
//@desc  Register users
//@access Public
router.post("/register", (req, res) => {
  let { username, user_password, email, user_type } = req.body;
 //Generate salt and hash it
  let salt= bcrypt.genSaltSync(10);
  user_password=bcrypt.hashSync(user_password, salt);
  let statement = "INSERT INTO users VALUES (?,?,?,?)";
  mysqlConnection.query(
    statement,
    [username, user_password, email, user_type],
    (err, rows, fields) => {
      if (!err) {
        res.send(rows);
      } else res.send("User already exists");
    }
  );
});
router.post("/signin", (req, res) => {
  let statement = "SELECT * FROM users WHERE username=?";
  let { username, password } = req.body;
  mysqlConnection.query(statement, [username, password], (err, rows) => {
    if (!err){ 
     if(bcrypt.compareSync(password,rows[0].user_password)) 
     res.send("Authorized")
     else 
     res.send("not authorized");
    }
    else res.send("No user found");
  });
});
module.exports = router;
