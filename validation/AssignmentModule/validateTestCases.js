const Validator = require("validator");
const isEmpty = require("../isEmpty");
module.exports = function validateTestCases(data) {
  let errors = {};
  //Soemthing needs to be passed
  data.test = !isEmpty(data.test) ? data.test : "";
  data.result = !isEmpty(data.result) ? data.result : "";
  data.question_id = !isEmpty(data.question_id) ? data.question_id : "";
  if (Validator.isEmpty(data.test))
  errors.test = "Test is required!";
  if (Validator.isEmpty(data.result)) errors.result = "Expected result is required!";
  if (Validator.isEmpty(data.question_id))
  errors.question_id = "Question Id is required!";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
