import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
export const registerUser = (userData, history) => dispatch => {
  console.log(userData);
  axios
    .post("http://localhost:5000/api/users/register", userData)
    .then(() => history.push("/challenges"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

//Login Get user token
export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:5000/api/users/signin", userData)
    .then(res => {
      //Save to localstorage
      const { token } = res.data;
      //Set token to localStorage
      localStorage.setItem("jwtToken", token);
      //Set token to auth header
      setAuthToken(token);
      //Decode token
      const decoded = jwt_decode(token);
      //Set current user
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response }));
};
//set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};

//Logout user
export const logoutUser = () => dispatch => {
  //Remove token from localStorage
  localStorage.removeItem("jwtToken");
  //Remove auth for future headers
  setAuthToken(false);
  //Set current user to {} and authenticated to false
  dispatch(setCurrentUser({}));
};
