const Validator = require("validator");
const isEmpty = require("../isEmpty");
module.exports = function validateSubmissionInput(data) {
  let errors = {};
  //Soemthing needs to be passed
  data.assignment_no = !isEmpty(data.assignment_no) ? data.assignment_no : "";
  data.title = !isEmpty(data.title) ? data.title : "";
  data.instruction = !isEmpty(data.instruction) ? data.instruction : "";
  data.starter = !isEmpty(data.starter) ? data.starter : "";
  data.label = !isEmpty(data.label) ? data.label : "";

  if (Validator.isEmpty(data.assignment_no))
  errors.assignmentNo = "Assignment No is required!";
  if (Validator.isEmpty(data.title)) errors.title = "Title is required!";
  if (Validator.isEmpty(data.instruction))
  errors.instruction = "Instructions is required!";
  if (Validator.isEmpty(data.starter)) errors.starter = "Starter is required!";
  if (Validator.isEmpty(data.label)) errors.label = "Label is required!";

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
