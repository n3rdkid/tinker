const express=require("express");
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
router.get("/:id",(req,res)=>{
  let id=req.params.id;
  let statement="SELECT * FROM challenges WHERE id=?";
  mysqlConnection.query(statement,id,(err,rows)=>{
    if(!err)
    {
      res.send(rows[0]);
    }
    else{
      return res.status(400).json({error:"No such challenge"});
    }
  })
})
//@route POST api/challenges/test
//@desc  Request a particular challenge
//@access Public
router.get("/:id",(req,res)=>{
  let id=req.params.id;
  let statement="SELECT * FROM challenges WHERE id=?";
  mysqlConnection.query(statement,id,(err,rows)=>{
    if(!err)
    {
      res.send(rows[0]);
    }
    else{
      return res.status(400).json({error:"No such challenge"});
    }
  })
})



module.exports = router;