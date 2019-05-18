//Handles Username Password Email
const express = require("express");
const router = express.Router();


//@route GET api/users/test
//@desc  Test users route
//@access Public
router.get("/test", (req, res) => res.json({ hi: "hello" }));

//@route GET api/users/register
//@desc  Register users 
//@access Public
router.post("/register", (req, res) => {
  console.dir(req);
  console.log(req.body.email);
});

module.exports = router;
