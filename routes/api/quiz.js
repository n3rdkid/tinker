const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const passport = require("passport");
//For Database
const databaseOptions = require("../../config/database");
const mysqlConnection = mysql.createConnection(databaseOptions);
//Connect to database
mysqlConnection.connect();

//@route GET api/quiz/test
//@desc  Test quiz route
//@access Public
router.get("/test", (req, res) =>
  res.json({
    hi: "You are live at Quiz!"
  })
);

//@route GET api/quiz/
//@desc  Fetch Quiz Questions
//@access Private
router.get(
  "/",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let questions = [];
    //For fetching question
    let statement = "SELECT * FROM Quiz ORDER BY RAND() LIMIT 20;";
    mysqlConnection.query(statement, (err, results) => {
      if (!err) {
        res.json({
          questions: results
        });
      }
    });
  }
);

//@route post api/quiz/
//@desc  Fetch Quiz Answers
//@access Private
router.post(
  "/:id",
  // passport.authenticate("jwt", { session: false }),
  (req, res) => {
    let questionId = req.params.id;
    //For fetching question
    let statement =
      "SELECT * FROM answers WHERE quiz_id = ?;SELECT * FROM correctAnswer WHERE quiz_id=?";

    mysqlConnection.query(
      statement,
      [questionId, questionId],
      (err, results, fields) => {
        if (!err) {
          let data = {
            answers: [...results[0]],
            correctAnswer: results[1][0].ans_id
          };

          res.json(data);
        } else res.json(err);
      }
    );
  }
);
router.post("/result", (req, res) => {
  let { user, score } = req.body;
  let statement = "INSERT INTO quiz_result (user,score) VALUES (?,?)";
  mysqlConnection.query(statement, [user, score], (err, results, fields) => {
    if (!err) {
      res.json(results);
    } else res.json(err);
  });
});

module.exports = router;
