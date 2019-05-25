const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const validateSubmissionInput = require("../../validation/ChallengesModule/Submission");
const validateResourcesInput = require("../../validation/ChallengesModule/Resources");
//For Database
const databaseOptions = require("../../config/database");
const mysqlConnection = mysql.createConnection(databaseOptions);

//Connect to database
mysqlConnection.connect();

//@route GET api/challenges/test
//@desc  Test challenges route
//@access Public
router.get("/test", (req, res) => res.json({ hi: "You are live!" }));
//@route GET api/challenges/:id
//@desc  Request a particular challenge
//@access Public
router.get("/", (req, res) => {
  let statement = "SELECT * FROM challenges";
  mysqlConnection.query(statement, (err, results) => {
    if (!err) {
      res.send(results);
    } else {
      return res.status(400).json({ error: "No such challenge" });
    }
  });
});

//@route GET api/challenges/:id
//@access Public
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let statement =
    "SELECT * FROM challenges WHERE id=?;SELECT * FROM tests WHERE challenge_id=?";
  mysqlConnection.query(statement, [id, id], (err, results, fields) => {
    if (!err) {
      let challengeResponse = {
        challenge: { 
          id: results[0][0].id,
          instruction: results[0][0].instruction,
          starter: results[0][0].starter,
          label: results[0][0].label
        },
        tests: [
          {
            id: results[1][0].id,
            test: results[1][0].test,
            result: results[1][0].result
          }
        ]
      };
      res.send(challengeResponse);
    } else {
      return res.status(400).json({ error: "No such challenge" });
    }
  });
});
//@route POST api/challenges/
//@desc  Request a particular challenge
//@access Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateSubmissionInput(req.body);
  //Check Validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let { submission, score, username, challenge_id } = req.body;
  let statement =
    "INSERT INTO submissions (submission,score,username,challenge_id) VALUES(?,?,?,?)";
  mysqlConnection.query(
    statement,
    [submission, score, username, challenge_id],
    (err, results, fields) => {
      if (!err) {
        res.send(results[0]);
      } else {
        return res.status(400).json({ err });
      }
    }
  );
});


//@route GET api/challenges/resources/:id
//@access Public
router.get("/resources/:id", (req, res) => {
  let id = req.params.id;
  let statement =
    "SELECT * FROM resources WHERE challenge_id=?;";
  mysqlConnection.query(statement, id, (err, results, fields) => {
    if (!err) {
         res.json(results);
    } else {
      return res.status(400).json({ error: "No such resources" });
    }
  });
});
//@route Post api/challenges/resources/:id
//@access Public
router.post("/resources", (req, res) => {
  console.log("Dtaa")
  console.dir(req.body);
  const { errors, isValid } =validateResourcesInput(req.body);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let {title,link,description,challenge_id}=req.body;
  let statement =
    "INSERT INTO resources (title,link,description,challenge_id) VALUES (?,?,?,?)";
  mysqlConnection.query(statement, [title,link,description,challenge_id], (err, results, fields) => {
    if (!err) {
         res.send("Inserted Successfully!")
    } else {
      return res.status(400).json({ error: "Failed to insert resources" });
    }
  });
});



module.exports = router;
