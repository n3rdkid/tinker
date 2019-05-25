const Validator = require('validator');
const isEmpty =require('../isEmpty');
module.exports = function validateResourcesInput(data) {
  let errors ={};
  //Soemthing needs to be passed
  data.title=!isEmpty(data.title)?data.title:'';
  data.link=!isEmpty(data.link)?data.link:'';
  data.description=!isEmpty(data.description)?data.description:'';
  data.challenge_id=!isEmpty(data.challenge_id)?data.challenge_id:'';
  if(Validator.isEmpty(data.title))
  errors.title="Please write title for the resource!"; 
  if(Validator.isEmpty(data.link))
  errors.link="Please provide a link!"; 
  if(Validator.isEmpty(data.description))
  errors.description="Description is required!";
  if(Validator.isEmpty(data.challenge_id))
  errors.challenge_id="Challenge id is required!";

  return{
    errors,
    isValid:isEmpty(errors)
  }
}