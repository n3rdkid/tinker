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

//@route GET api/users/test
//@desc  Test users route
//@access Public
router.get("/test", (req, res) => res.json({ hi: "Admin" }));

//@route GET api/users/current
//@desc  Return current user
//@access Private
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
      console.log(req.role)
    if(!req.role==="teacher")
res.json({error:"You don't have access to this page!"});
  }
);

module.exports = router;
