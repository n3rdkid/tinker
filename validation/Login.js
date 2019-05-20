const Validator = require('validator');
const isEmpty =require('./isEmpty');
module.exports = function validateLoginInput(data) {
  let errors ={};
  //Soemthing needs to be passed
  data.username=!isEmpty(data.username)?data.username:'';
  data.password=!isEmpty(data.password)?data.password:'';
  if(Validator.isEmpty(data.username))
  errors.username="Username is required!";
  if(Validator.isEmpty(data.password))
  errors.password="Password is required!";


  return{
    errors,
    isValid:isEmpty(errors)
  }
}