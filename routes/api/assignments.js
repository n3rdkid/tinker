const express = require("express");
const router = express.Router();
const mysql = require("mysql");
const validateSubmissionInput = require("../../validation/AssignmentModule/Submission");
const validateResourcesInput = require("../../validation/AssignmentModule/Resources");
const validateQuestion = require("../../validation/AssignmentModule/validateQuestion");
const validateUpdateQuestion = require("../../validation/AssignmentModule/validateUpdateQuestion");
const validateTestCases = require("../../validation/AssignmentModule/validateTestCases");

const validateUpdateTestCases = require("../../validation/AssignmentModule/validateUpdateTestCases");
//For Database
const databaseOptions = require("../../config/database");
const mysqlConnection = mysql.createConnection(databaseOptions);

//Connect to database
mysqlConnection.connect();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: false,
  port: 25,
  auth: {
    user: "thisisjustdummysaurav@gmail.com",
    pass: "TestNepalAdhikari22-"
  },
  tls: {
    rejectUnauthorized: false
  }
});

const mailOptions = {
  from: "thisisjustdummysaurav@gmail.com", // sender address
  to: "sauravads123@gmail.com,beevekmgr@gmail.com", // list of receivers
  subject: "New Assignment Notification", // Subject line
  html:
    "<p>If you are seeing this, there is something wrong with the system. Please check for new assignments.</p>" // plain text body
};
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

  let dueDate = req.body.dueDate;
  let statement = "INSERT INTO assignments (dueDate) VALUES (?);";
  mysqlConnection.query(statement, dueDate, (err, results) => {
    if (!err) {
      console.log("New Assignment = ", results.insertId);
      mysqlConnection.query(
        `SELECT email FROM users WHERE user_type="student"`,
        (err, rows) => {
          mailOptions.html = `<div>Hello User!<br><br> A new assignment has been added to the system.
          <p> Assignment No: ${
            results.insertId
          } Due date <b style="color:red">${dueDate}.</p>.
          <br>Please click on the link below to view it.<br><br><div style="display:flex;justify-content:center;"><a href="http://localhost:3000/assignments/${results.insertId}" style=" border: 2px solid black;
          background-color: white;
          color: black;
          padding: 14px 28px;
          font-size: 16px;
          cursor: pointer;">View Assignment </div><br><br>
          Regards,<br>
          Tinker Team      </div>`;
          if (!err) {
            let emailList = [];
            for (let users of rows) emailList.push(users.email);
            // mailOptions.to=emailList.join(",");
          } else console.log(err);
          console.log("Sending mails to", mailOptions.to);
          transporter.sendMail(mailOptions, function(err, info) {
            if (err) console.log(err);
            else console.log(info);
            // });
          });
        }
      );
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
  let statement =
    "SELECT * FROM assignment_question WHERE assignment_no=?;SELECT * FROM assignments WHERE dueDate>CURRENT_TIMESTAMP;";
  mysqlConnection.query(statement, id, (err, results, fields) => {
    if (!err) {
      console.log("Results 0", results[0]);
      let flag = false;
      for (let assignment of results[1]) {
        console.log("id", id, "assignment", assignment.id);
        if (id == assignment.id) {
          flag = true;
          break;
        }
      }
      if (flag) {
        res.json(results[0]);
      } else {
        res.json({ error: "Due date has passed" });
      }
    } else {
      res.json(err);
    }
  });
});
router.get("/question/:id", (req, res) => {
  id = req.params.id;
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
router.post("/submissions", (req, res) => {
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
        res.json({type:"success",message:"Submitted Succesfully"});
      } else {
        return res.json({type:"error",message:"Failed to Submity"});
      }
    }
  );
});
//@route GET api/challenges/leaderboard/:id
//@access Public
router.get("/leaderboard/:id", (req, res) => {
  let id = req.params.id;
  let statement =
    "SELECT * FROM submissions_assignments WHERE question_id= ?  ORDER BY timeTaken LIMIT 10;";
  mysqlConnection.query(statement, id, (err, results, fields) => {
    if (!err) {
      res.json(results);
    } else {
      return res.status(400).json({ error: "No such resources" });
    }
  });
});

//@route GET api/challenges/leaderboard/:id
//@access Public
router.get("/testCases/:id", (req, res) => {
  let id = req.params.id;
  let statement =
    "SELECT * FROM tests_assignments  WHERE id= ?";
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
        res.json({type:"success",message:"Added resource succesfully"});
      } else {
        return res.json({type:"error",message:"Failed to insert resources"});
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
  let { title, instruction, starter, label, assignment_no } = req.body;
  let statement =
    "INSERT INTO assignment_question (title,instruction,starter,label,assignment_no) VALUES (?,?,?,?,?)";
  mysqlConnection.query(
    statement,
    [title, instruction, starter, label, assignment_no],
    (err, results, fields) => {
      if (!err) {
        res.json({type:"success",message:"Added Question succesfully",results});

      } else {
        return res.json({type:"error",message:"Failed to insert question"});
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
        res.json({type:"success",message:"Inserted Successfully!",results});
      } else {
        return res.json({type:"error",message:"Failed to test resources"});
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

//@route Post api/assignments/resources/:id
//@access Public
router.put("/question", (req, res) => {
  const { errors, isValid } = validateUpdateQuestion(req.body);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let { title, instruction, starter, label, question_no } = req.body;
  let statement =
    "UPDATE assignment_question SET title=?,instruction=?,starter=?,label=? WHERE id =?";
  mysqlConnection.query(
    statement,
    [title, instruction, starter, label, question_no],
    (err, results, fields) => {
      if (!err) {
        res.json({type:"success",message:"Updated Succesfully",results});

      } else {
        return   res.json({type:"error",message:"Failed to update"});

      }
    }
  );
});

//@route GET api/challenges/leaderboard/:id
//@access Public
router.put("/test", (req, res) => {
  const { errors, isValid } = validateUpdateTestCases(req.body);
  if (!isValid) {
    return res.status(400).json({ errors });
  }
  let {testId,test,result}=req.body;
  let statement =
    "UPDATE tests_assignments SET test=?,result=? WHERE id=?";
  mysqlConnection.query(statement, [test,result,testId], (err, results, fields) => {
    if (!err) {
     res.json({type:"success",message:"Updated Succesfully",results});
    } else {
      return res.status(400).json({ error: "No such resources" });
    }
  });
});


module.exports = router;
