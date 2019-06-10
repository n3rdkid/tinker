const express = require("express");
const router = express.Router();
//For encryption
const bcrypt = require("bcryptjs");
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const passport = require("passport");
//For Database
const databaseOptions = require("../../config/database");
const mysqlConnection = mysql.createConnection(databaseOptions);
//Connect to database
mysqlConnection.connect();

//Load Register validation
const validateRegisterInput = require("../../validation/Register");
//Load Register validation
const validateLoginInput = require("../../validation/Login");

//@route GET api/users/test
//@desc  Test users route
//@access Public
router.get("/test", (req, res) => res.json({ hi: "hello" }));

//@route GET api/users/register
//@desc  Register users
//@access Public
router.post("/register", (req, res) => {
  console.log(req.body);
  const { errors, isValid } = validateRegisterInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  console.log("REgistring user after valid");
  let { username, user_password, email, user_type } = req.body;
  //Generate salt and hash it
  let salt = bcrypt.genSaltSync(10);
  user_password = bcrypt.hashSync(user_password, salt);
  let statement = "INSERT INTO users(username,user_password,email) VALUES(?,?,?);";
  mysqlConnection.query(
    statement,
    [username, user_password, email],
    (err, rows, fields) => {
      console.log("query");
      if (!err) {
        console.log("here I am");
        res.send(rows);
      } else res.send("User already exists");
    }
  );
});
router.post("/signin", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }

  let statement = "SELECT * FROM users WHERE username=?";
  let { username, password } = req.body;
  mysqlConnection.query(statement, username, (err, rows) => {
    if (!err && rows[0]) {
      if (bcrypt.compareSync(password, rows[0].user_password)) {
        //"Authorized"
        const payload = {
          username: rows[0].username,
          role:rows[0].user_type
        };
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 3600
          },
          (err, token) => {
            res.json({ success: true, token: `Bearer ` + token });
          }
        );
      }
    } else {
      //Not authorized"
      res.status(400).json({ error: "Unauthorized" });
    }
  });
});

module.exports = router;
