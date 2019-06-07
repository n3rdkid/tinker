const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const validateSubmissionInput = require("../../validation/AssignmentModule/Submission");
const validateResourcesInput = require("../../validation/AssignmentModule/Resources");
const validateQuestion = require("../../validation/AssignmentModule/validateQuestion");
const validateTestCases = require("../../validation/AssignmentModule/validateTestCases");
//For Database
const databaseOptions = require("../../config/database");
const mysqlConnection = mysql.createConnection(databaseOptions);

//Connect to database
mysqlConnection.connect();

//@route GET api/challenges/test
//@desc  Test challenges route
//@access Public
router.get("/test", (req, res) => res.json({ hi: "You are live!" }));
//@route GET api/assignments/:id
//@desc  Request all assignments
//@access Public
router.get("/", (req, res) => {
  let statement = "SELECT * FROM assignments WHERE dueDate>CURRENT_TIMESTAMP";
  mysqlConnection.query(statement, (err, results) => {
    if (!err) {
      res.send(results);
    } else {
      return res.status(400).json({ error: "No such challenge" });
    }
  });
});
router.post("/", (req, res) => {
 
  console.dir(req.body);
 
  let dueDate=req.body.dueDate; console.log(req.body.dueDate)
  let statement = "INSERT INTO assignments (dueDate) VALUES (?);";
  mysqlConnection.query(statement,dueDate, (err, results) => {
    if (!err) {
  
      res.json(results);
    } else {
      res.json({ error: err });
    }
  });
});

//@route GET api/assignments/:id
//@access Public
router.get("/:id", (req, res) => {
  let id = req.params.id;
  let statement ="SELECT * FROM assignment_question WHERE assignment_no=?;SELECT * FROM assignments WHERE dueDate>CURRENT_TIMESTAMP;"
  mysqlConnection.query(statement, id, (err, results, fields) => {
    if (!err) {
      console.log("Results 0",results[0])
      let flag=false;
      for(let assignment of results[1])
      {
        console.log("id",id,"assignment",assignment.id)
        if(id==assignment.id)
        {flag=true;
        break;}
      }
        if(flag)
        {
          res.json(results[0]);
        }
        else{
          res.json({error:"Due date has passed"})
        }
    }
    else{
        res.json(err);
    }
})
});
router.get("/question/:id", (req, res) => {
  id=req.params.id;
  let statement =
  "SELECT * FROM assignment_question WHERE id=?;SELECT * FROM tests_assignments WHERE question_id=?";
mysqlConnection.query(statement, [id, id], (err, results, fields) => {
  if (!err) {
    let questionResponse = {
      question: {
        id: results[0][0].id,
        title: results[0][0].title,
        instruction: results[0][0].instruction,
        starter: results[0][0].starter,
        label: results[0][0].label
      },

      tests: []
    };
    for (let i = 0; i < results[1].length; i++) {
      questionResponse.tests.push({
        id: results[1][i].id,
        test: results[1][i].test,
        result: results[1][i].result
      });
    }
    res.send(questionResponse);
  } else {
    return res.status(400).json({ error: "No such Question" });
  }
});
});
//@route GET api/assignment/resources/:id
//@access Public
router.get("/resources/:id", (req, res) => {
  let id = req.params.id;
  let statement = "SELECT * FROM resources_assignments WHERE question_id=?;";
  mysqlConnection.query(statement, id, (err, results, fields) => {
    if (!err) {
      res.json(results);
    } else {
      return res.status(400).json({ error: "No such resources" });
    }
  });
});
// @route POST api/challenges/
// @desc  Post a particular assignemnt question
// @access Public
router.post("/", (req, res) => {
  const { errors, isValid } = validateSubmissionInput(req.body);
  // Check Validation
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let { submission, timeTaken, username, question_id } = req.body;
  let statement =
    "INSERT INTO submissions_assignments (submission,timeTaken,username,question_id,submisison_date) VALUES(?,?,?,?,NOW());";
  mysqlConnection.query(
    statement,
    [submission, timeTaken, username, question_id],
    (err, results, fields) => {
      if (!err) {
        res.send(results[0]);
      } else {
        return res.status(400).json({ err });
      }
    }
  );
});
//@route GET api/challenges/leaderboard/:id
//@access Public
router.get("/leaderboard/:id", (req, res) => {
  let id = req.params.id;
  let statement = "SELECT * FROM submissions_assignments WHERE question_id= ?  ORDER BY timeTaken LIMIT 10;";
  mysqlConnection.query(statement, id, (err, results, fields) => {
    if (!err) {
      res.json(results);
    } else {
      return res.status(400).json({ error: "No such resources" });
    }
  });
});



//@route Post api/assignments/resources/:id
//@access Public
router.post("/resources", (req, res) => {
  console.dir(req.body);
  const { errors, isValid } = validateResourcesInput(req.body);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let { title, link, description, question_id } = req.body;
  let statement =
    "INSERT INTO resources_assignments (title,link,description,question_id) VALUES (?,?,?,?)";
  mysqlConnection.query(
    statement,
    [title, link, description, question_id],
    (err, results, fields) => {
      if (!err) {
        res.send("Inserted Successfully!");
      } else {
        return res.status(400).json({ error: "Failed to insert resources" });
      }
    }
  );
});
//@route Post api/assignments/resources/:id
//@access Public
router.post("/question", (req, res) => {
   const { errors, isValid } = validateQuestion(req.body);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let { title, instruction, starter, label,assignment_no } = req.body;
  let statement =
    "INSERT INTO assignment_question (title,instruction,starter,label,assignment_no) VALUES (?,?,?,?,?)";
  mysqlConnection.query(
    statement,
    [title, instruction, starter, label,assignment_no],
    (err, results, fields) => {
      if (!err) {
        res.json(results);
      } else {
        return res.status(400).json({ error: "Failed to insert resources" });
      }
    }
  );
});
//@route Post api/assignments/resources/:id
//@access Public
router.post("/testcases", (req, res) => {
  const { errors, isValid } = validateTestCases(req.body);
 if (!isValid) {
   return res.status(400).json({ errors });
 }
 let { test, result, question_id } = req.body;
 let statement =
   "INSERT INTO tests_assignments (test,result,question_id) VALUES (?,?,?)";
 mysqlConnection.query(
   statement,
   [test, result, question_id],
   (err, results, fields) => {
     if (!err) {
       res.send("Inserted Successfully into test table for question!");
     } else {
       return res.status(400).json({ error: "Failed to insert resources" });
     }
   }
 );
});
router.get("/testcases/:id", (req, res) => {
  let id = req.params.id;
  let statement = "SELECT * FROM tests_assignments WHERE question_id= ?";
  mysqlConnection.query(statement, id, (err, results, fields) => {
    if (!err) {
      res.json(results);
    } else {
      return res.status(400).json({ error: "No such Testcases" });
    }
  });
});



module.exports = router;
