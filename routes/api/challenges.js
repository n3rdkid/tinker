const express = require("express");
const router = express.Router();
const mysql = require("mysql");

//For Database
const databaseOptions = require("../../config/database");
const mysqlConnection = mysql.createConnection(databaseOptions);

//Connect to database
mysqlConnection.connect();

//@route GET api/challenges/test
//@desc  Test challenges route
//@access Public
router.get("/test", (req, res) => res.json({ hi: "You are live!" }));
//@route GET api/challenges/test
//@desc  Request a particular challenge
//@access Public
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let statement =
    "SELECT * FROM challenges WHERE id=?;SELECT * FROM tests WHERE challenge_id=?";
  mysqlConnection.query(statement, [id, id], (err, results, fields) => {
    if (!err) {
      let challengeResponse = {
       challenge:{
         id:results[0][0].id,
         instruction:results[0][0].instruction,
         starter:results[0][0].starter,
         label:results[0][0].label
        },
      tests:[{
        id:results[1][0].id,
        test:results[1][0].test,
        result:results[1][0].result,
      }]
      };
      res.send(challengeResponse);
    } else {
      return res.status(400).json({ error: "No such challenge" });
    }
  });
});
//@route POST api/challenges/test
//@desc  Request a particular challenge
//@access Public
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let statement =
    "SELECT * FROM challenges WHERE id=?;SELECT * FROM tests WHERE challenge_id=?";
  mysqlConnection.query(statement, [id, id], (err, results, fields) => {
    if (!err) {
      console.log(results[0]);
      console.log(results[1]);
    } else {
      return res.status(400).json({ error: "No such challenge" });
    }
  });
});

module.exports = router;
