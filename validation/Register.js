const Validator = require("validator");
const isEmpty = require("./isEmpty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
  //Soemthing needs to be passed
  data.username = !isEmpty(data.username) ? data.username : "";
  data.user_password = !isEmpty(data.user_password) ? data.user_password : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  console.log(data);
  if (!Validator.isLength(data.username, { min: 6, max: 30 }))
    errors.username = "Username must be between 6 and 30 characters!";
  if (Validator.isEmpty(data.email)) errors.email = "Email is required!";
  if (!Validator.isEmail(data.email)) errors.email = "Your email is invalid!";
  if (Validator.isEmpty(data.user_password))
    errors.password = "Password is required!";
  // if(!Validator.isLength(data.user_password,{min:6,max:30}))
  //errors.password = "Password must be atleast 6 characters!";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
