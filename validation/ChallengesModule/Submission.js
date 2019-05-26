const Validator = require('validator');
const isEmpty =require('../isEmpty');
module.exports = function validateSubmissionInput(data) {
  let errors ={};
  //Soemthing needs to be passed
  data.submission=!isEmpty(data.submission)?data.submission:'';
  data.timeTaken=!isEmpty(data.timeTaken)?data.timeTaken:'';
  data.username=!isEmpty(data.username)?data.username:'';
  data.challenge_id=!isEmpty(data.challenge_id)?data.challenge_id:'';
  if(Validator.isEmpty(data.submission))
  errors.submission="Please write your code and then press submit!"; 
  if(Validator.isEmpty(data.timeTaken))
  errors.timeTaken="Please send a time taken!"; 
  if(Validator.isEmpty(data.username))
  errors.username="Username is required!";
  if(Validator.isEmpty(data.challenge_id)) 
  errors.challenge_id="Challenge id is required!";

  return{
    errors,
    isValid:isEmpty(errors)
  }
}