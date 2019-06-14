const Validator = require("validator");
const isEmpty = require("../isEmpty");
module.exports = function validateTestCases(data) {
  let errors = {};
  //Soemthing needs to be passed
  data.test = !isEmpty(data.test) ? data.test : "";
  data.result = !isEmpty(data.result) ? data.result : "";
  data.testId = !isEmpty(data.testId) ?""+data.testId : "";
  if (Validator.isEmpty(data.test))
  errors.test = "Test is required!";
  if (Validator.isEmpty(data.result)) errors.result = "Expected result is required!";
  if (Validator.isEmpty(data.testId))
  errors.testId = "Test Id is required!";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
