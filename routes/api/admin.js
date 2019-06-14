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
    console.log(req.role);
    if (!req.role === "teacher")
      res.json({ error: "You don't have access to this page!" });
  }
);
//@route GET api/admin/assignments
//@desc  Return current user
//@access Private
router.get(
  "/assignments",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.role);
    if (!req.role === "teacher")
      res.json({ error: "You don't have access to this page!" });
    else {
      let statement = "SELECT * FROM assignments";
      mysqlConnection.query(statement, (err, results) => {
        if (!err) {
          res.send(results);
        } else {
          return res.status(400).json({ error: "No such assignments" });
        }
      });
    }
  }
);

//@route GET api/admin/assignments
//@desc  Return current user
//@access Private
router.get(
  "/testcases/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    console.log(req.role);
    if (!req.role === "teacher")
      res.json({ error: "You don't have access to this page!" });
    else {
      console.log("test Id is ",req.params.id)
      let statement = "SELECT * FROM tests_assignments  WHERE question_id= ?";
      mysqlConnection.query(statement, req.params.id, (err, results, fields) => {
        if (!err) {
          res.json(results);
        } else {
          return res.status(400).json({ error: "No such resources" });
        }
      });
    }
  }
);

router.get(
  "/assignments/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.role === "teacher")
      res.json({ error: "You don't have access to this page!" });
    let id = req.params.id;
    let statement = "SELECT * FROM assignment_question WHERE assignment_no=?;";
    mysqlConnection.query(statement, id, (err, results, fields) => {
      if (!err) {
        res.json(results);
      } else {
        res.json({ error: "Error has occurred" });
      }
    });
  }
);
router.get(
  "/submissions/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.role === "teacher")
      res.json({ error: "You don't have access to this page!" });
    let id = req.params.id;
    let statement =
      "SELECT * FROM submissions_assignments WHERE question_id=?;";
    mysqlConnection.query(statement, id, (err, results, fields) => {
      if (!err) {
        res.json(results);
      } else {
        res.json({ error: "Error has occurred" });
      }
    });
  }
);
router.get(
  "/solution/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    if (!req.role === "teacher")
      res.json({ error: "You don't have access to this page!" });
    let id = req.params.id;
    let statement = "SELECT * FROM submissions_assignments WHERE id=?;";
    mysqlConnection.query(statement, id, (err, results, fields) => {
      if (!err) {
        let response = {};
        response.submission = results[0].submission;
        let statement2 = "SELECT * FROM tests_assignments WHERE question_id=?";
        mysqlConnection.query(
          statement2,
          results[0].question_id,
          (err, rows, fields) => {
            if (!err) {
              response.testCases = rows;
              res.json(response);
            }
          }
        );
      } else {
        res.json({ error: "Error has occurred" });
      }
    });
  }
);

router.get("/landing", (req, res) => {
  let statement =
    "SELECT COUNT(*) as count FROM users;SELECT COUNT(*) as count FROM challenges;SELECT COUNT(*) as count FROM Users WHERE user_type='student'";
  mysqlConnection.query(statement, (err, results, fields) => {
    if (!err) {
      res.json({
        users: results[0][0].count,
        challenges: results[1][0].count,
        students: results[2][0].count
      });
    } else {
      res.json({ error: "Error has occurred" });
    }
  });
});
module.exports = router;
